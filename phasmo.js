const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Variables de entorno
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const EXTENSION_SECRET = process.env.EXTENSION_SECRET;
const EXTENSION_CLIENT_ID = process.env.EXTENSION_CLIENT_ID;
const BROADCASTER_ID = process.env.BROADCASTER_ID; // tu canal

// Valida la firma de Twitch EventSub
function verifySignature(req) {
  const messageId = req.header('Twitch-Eventsub-Message-Id');
  const timestamp = req.header('Twitch-Eventsub-Message-Timestamp');
  const body = JSON.stringify(req.body);
  const message = messageId + timestamp + body;

  const hmac = crypto
    .createHmac('sha256', CLIENT_SECRET)
    .update(message)
    .digest('hex');

  const expectedSignature = `sha256=${hmac}`;
  const signature = req.header('Twitch-Eventsub-Message-Signature');

  return signature === expectedSignature;
}

// Endpoint para EventSub
app.post('/eventsub', (req, res) => {
  if (!verifySignature(req)) {
    return res.status(403).send('Invalid signature');
  }

  const messageType = req.header('Twitch-Eventsub-Message-Type');

  if (messageType === 'webhook_callback_verification') {
    return res.send(req.body.challenge);
  }

  if (messageType === 'notification') {
    const event = req.body.event;

    if (event.reward && event.user_name) {
      console.log(`🔔 ${event.user_name} redeemed: ${event.reward.title}`);

      // Enviar al PubSub de la extensión
      sendToExtension(event);
    }

    res.sendStatus(200);
  }
});

// Genera un JWT para PubSub
function makeExtensionJWT() {
  const payload = {
    exp: Math.floor(Date.now() / 1000) + 60,
    user_id: BROADCASTER_ID,
    role: 'external',
    channel_id: BROADCASTER_ID,
    pubsub_perms: {
      send: ['broadcast'],
    },
  };

  return jwt.sign(payload, Buffer.from(EXTENSION_SECRET, 'base64'), {
    algorithm: 'HS256',
  });
}

// Envía mensaje a la extensión
async function sendToExtension(event) {
  const token = makeExtensionJWT();

  try {
    await axios.post(
      `https://api.twitch.tv/helix/extensions/pubsub`,
      {
        broadcaster_id: BROADCASTER_ID,
        target: ['broadcast'],
        message: JSON.stringify(event),
      },
      {
        headers: {
          'Client-Id': EXTENSION_CLIENT_ID,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('✅ Event sent to extension');
  } catch (err) {
    console.error('❌ Error sending to extension:', err.response?.data || err.message);
  }
}

app.listen(3000, () => {
  console.log('🚀 Backend listening on port 3000');
});

