export const languageOrder = ['en', 'es', 'fr', 'de'];

export const uiTranslations = {
    en: {
        tabs: { evidences: 'Evidences', ghosts: 'Ghosts' },
        evidences: {
            emf: 'EMF Level 5',
            dots: 'D.O.T.S. Projector',
            fingerprints: 'Fingerprints',
            orbs: 'Ghost Orb',
            writing: 'Ghost Writing',
            spiritbox: 'Spirit Box',
            freezing: 'Freezing Temperatures'
        },
        reset: 'Reset',
        strength: 'Strength',
        weakness: 'Weakness',
        evidencesLabel: 'Evidences',
        selectGhost: 'Select a ghost to see its info.'
    },
    es: {
        tabs: { evidences: 'Evidencias', ghosts: 'Fantasmas' },
        evidences: {
            emf: 'Nivel EMF 5',
            dots: 'Proyector D.O.T.S.',
            fingerprints: 'Huellas',
            orbs: 'Orbe Fantasmal',
            writing: 'Escritura Fantasmal',
            spiritbox: 'Spirit Box',
            freezing: 'Temperaturas Heladas'
        },
        reset: 'Reiniciar',
        strength: 'Fuerza',
        weakness: 'Debilidad',
        evidencesLabel: 'Evidencias',
        selectGhost: 'Selecciona un fantasma para ver su información.'
    },
    fr: {
        tabs: { evidences: 'Preuves', ghosts: 'Fantômes' },
        evidences: {
            emf: 'Niveau EMF 5',
            dots: 'Projecteur D.O.T.S.',
            fingerprints: 'Empreintes',
            orbs: 'Orbe Fantôme',
            writing: 'Écriture Fantôme',
            spiritbox: 'Spirit Box',
            freezing: 'Températures Glaciales'
        },
        reset: 'Réinitialiser',
        strength: 'Force',
        weakness: 'Faiblesse',
        evidencesLabel: 'Preuves',
        selectGhost: 'Sélectionnez un fantôme pour voir ses informations.'
    },
    de: {
        tabs: { evidences: 'Beweise', ghosts: 'Geister' },
        evidences: {
            emf: 'EMF Stufe 5',
            dots: 'D.O.T.S.-Projektor',
            fingerprints: 'Fingerabdrücke',
            orbs: 'Geisterkugel',
            writing: 'Geisterschrift',
            spiritbox: 'Spirit Box',
            freezing: 'Gefriertemperaturen'
        },
        reset: 'Zurücksetzen',
        strength: 'Stärke',
        weakness: 'Schwäche',
        evidencesLabel: 'Beweise',
        selectGhost: 'Wähle einen Geist aus, um Informationen zu sehen.'
    }
};

export const ghostMappings = [
    ['Spirit', 'Wraith', 'Jinn', 'Shade', 'Oni', 'Goryo', 'Myling', 'The Twins', 'Raiju', 'Obake', 'Gallu', 'Dayan'],
    ['Wraith', 'Phantom', 'Banshee', 'Yurei', 'Oni', 'Yokai', 'Goryo', 'Raiju', 'Deogen', 'Thaye', 'Obambo'],
    ['Phantom', 'Poltergeist', 'Banshee', 'Jinn', 'Demon', 'Hantu', 'Goryo', 'Myling', 'Obake', 'The Mimic', 'Obambo', 'Gallu'],
    ['Banshee', 'Mare', 'Revenant', 'Yurei', 'Yokai', 'Hantu', 'Onryo', 'Raiju', 'Obake', 'Thaye', 'Dayan'],
    ['Spirit', 'Poltergeist', 'Mare', 'Revenant', 'Shade', 'Demon', 'Myling', 'Moroi', 'Deogen', 'Thaye', 'Obambo'],
    ['Spirit', 'Wraith', 'Phantom', 'Poltergeist', 'Mare', 'Yokai', 'Onryo', 'The Twins', 'The Mimic', 'Moroi', 'Deogen', 'Dayan', 'Gallu'],
    ['Jinn', 'Revenant', 'Shade', 'Demon', 'Yurei', 'Oni', 'Hantu', 'Onryo', 'The Twins', 'The Mimic', 'Moroi'],
];

const ghostsEn = [
    { id: 1, ghostName: 'Spirit', description: 'Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.', strength: 'No strength.', weakness: 'Incense is more effective, preventing a hunt for longer.', evidences: 'EMF Level 5, Spirit Box, Ghost Writing' },
    { id: 2, ghostName: 'Wraith', description: 'Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.', strength: 'Cannot be tracked by footsteps. Will occasionally teleport to a random player.', weakness: 'Will not step in salt.', evidences: 'EMF Level 5, Spirit Box, D.O.T.S Projector' },
    { id: 3, ghostName: 'Phantom', description: 'A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.', strength: "Looking at a Phantom and hearing heartbeat sounds will drain the player's sanity. Will occasionally walk to a random player.", weakness: 'Taking a photo of the Phantom will cause it to disappear. Less visible during hunts.', evidences: 'D.O.T.S Projector, Fingerprints, Ghost Orb' },
    { id: 4, ghostName: 'Poltergeist', description: 'One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims.', strength: 'Capable of throwing multiple objects at once. Can throw objects at high velocities.', weakness: 'Becomes powerless with no throwables nearby.', evidences: 'Spirit Box, Fingerprints, Ghost Writing' },
    { id: 5, ghostName: 'Banshee', description: 'The singing siren, known for attracting its victims through song. It has been known to single out its prey before making a killing blow.', strength: 'Will target only one player at a time. Increased chance of performing a singing ghost event.', weakness: 'Has a distinctive wail on the Parabolic Microphone.', evidences: 'EMF Level 5, Fingerprints, Freezing Temperatures' },
    { id: 6, ghostName: 'Jinn', description: 'A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed.', strength: 'Travels at a faster speed if a distant player is in line of sight while the fuse box is on. Can occasionally drain large amounts of sanity from a nearby player.', weakness: 'Cannot use its ability if the fuse box is off. Will never turn the fuse box off directly.', evidences: 'EMF Level 5, Spirit Box, Freezing Temperatures' },
    { id: 7, ghostName: 'Mare', description: 'A Mare is the source of all nightmares, making it most powerful in the dark.', strength: 'Has an increased chance to attack in the dark.', weakness: 'Turning the lights on will reduce the chance of an attack. Will occasionally turn lights off right away. Will never turn a light on.', evidences: 'Spirit Box, Ghost Orb, Freezing Temperatures' },
    { id: 8, ghostName: 'Revenant', description: 'A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant; however, as soon as they hunt they can move incredibly fast.', strength: 'Moves significantly faster if the player location is known during a hunt.', weakness: 'Moves very slowly when not chasing a player.', evidences: 'Ghost Orb, Ghost Writing, Freezing Temperatures' },
    { id: 9, ghostName: 'Shade', description: 'A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are people nearby.', strength: 'Less likely to perform interactions.', weakness: 'Cannot hunt if people are nearby.', evidences: 'EMF Level 5, Ghost Writing, Freezing Temperatures' },
    { id: 10, ghostName: 'Demon', description: 'A Demon is one of the worst ghosts you can encounter. It has been known to attack without reason.', strength: 'Incense is less effective, preventing a hunt for less time. Can rarely initiate a hunt at any sanity level.', weakness: 'Crucifix range is 50% larger than placement range indicator.', evidences: 'EMF Level 5, Spirit Box, Freezing Temperatures' },
    { id: 11, ghostName: 'Yurei', description: 'A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.', strength: 'Can quickly drain sanity from nearby players.', weakness: 'Smudging the Yurei will temporarily trap it and reduce how often it wanders. Using its ability causes it to slam doors.', evidences: 'D.O.T.S Projector, Ghost Orb, Freezing Temperatures' },
    { id: 12, ghostName: 'Oni', description: 'Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.', strength: 'Increased activity when players are nearby.', weakness: 'More visible during hunts. Cannot perform the "airball" ghost event.', evidences: 'EMF Level 5, D.O.T.S Projector, Freezing Temperatures' },
    { id: 13, ghostName: 'Yokai', description: 'Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.', strength: 'Talking near the Yokai will anger it, increasing the chance to hunt.', weakness: 'Can only hear players within a short radius during a hunt.', evidences: 'Spirit Box, Ghost Orb, D.O.T.S Projector' },
    { id: 14, ghostName: 'Hantu', description: 'A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.', strength: 'Lower temperatures allow the Hantu to move faster during hunts.', weakness: "Warmer areas slow the Hantu's movement while hunting. Will produce freezing breath during a hunt if the fuse box is off. Will never turn the fuse box on.", evidences: 'Fingerprints, Ghost Orb, Freezing Temperatures' },
    { id: 15, ghostName: 'Goryo', description: 'When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.', strength: 'Can only enter a D.O.T.S. state when nobody is nearby. Its D.O.T.S. silhouette can only be seen through a Video Camera.', weakness: 'Cannot wander far from its room, or change favorite rooms.', evidences: 'EMF Level 5, D.O.T.S Projector, Ghost Orb' },
    { id: 16, ghostName: 'Myling', description: 'A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.', strength: 'Produces quieter sounds during a hunt.', weakness: 'Produces paranormal sounds more frequently on the Parabolic Microphone.', evidences: 'EMF Level 5, Fingerprints, Ghost Writing' },
    { id: 17, ghostName: 'Onryo', description: "The Onryo is often referred to as 'The Wrathful Spirit'. It steals souls from dying victims' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.", strength: 'A flame extinguishing can cause an Onryo to hunt regardless of average sanity.', weakness: 'A nearby lit flame will prevent the Onryo from hunting, just like a crucifix.', evidences: 'Spirit Box, Ghost Orb, Freezing Temperatures' },
    { id: 18, ghostName: 'The Twins', description: "These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.", strength: 'Either twin may start a hunt, though not at the same time. One twin is slow, the other is fast.', weakness: 'Will often interact with the environment at the same time but usually in different places.', evidences: 'EMF Level 5, Spirit Box, Freezing Temperatures' },
    { id: 19, ghostName: 'Raiju', description: 'A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.', strength: 'Moves faster near active electronic equipment.', weakness: 'Disrupts electronic equipment from further away when it hunts.', evidences: 'EMF Level 5, D.O.T.S Projector, Ghost Orb' },
    { id: 20, ghostName: 'Obake', description: 'Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.', strength: 'Has a chance to not leave fingerprints when interacting with things. May cause existing fingerprints to disappear sooner than usual.', weakness: 'Has a small chance of leaving special fingerprints. Can briefly shapeshift into another model during a hunt.', evidences: 'EMF Level 5, Fingerprints, Ghost Orb' },
    { id: 21, ghostName: 'The Mimic', description: 'The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.', strength: 'Can mimic the abilities and traits of other ghosts.', weakness: 'Will present fake Ghost Orbs as secondary evidence.', evidences: 'Spirit Box, Fingerprints, Freezing Temperatures' },
    { id: 22, ghostName: 'Moroi', description: 'Moroi have risen from the grave to drain energy from the living. They have been known to place curses on their victims, curable only by antidotes or moving very far away.', strength: 'Moves noticeably faster at low average sanity. Can curse players, making them lose sanity quicker than usual while in the investigation zone.', weakness: 'Incense blinds the ghost for 50% longer during hunts.', evidences: 'Spirit Box, Ghost Writing, Freezing Temperatures' },
    { id: 23, ghostName: 'Deogen', description: 'Sometimes surrounded by an endless fog, Deogen have been eluding ghost hunters for years. These ghosts have been reported to find even the most hidden prey, before stalking them into exhaustion.', strength: 'Always knows where the player is during a hunt and moves very quickly toward its victim.', weakness: 'Moves extremely slowly once near its victim.', evidences: 'D.O.T.S Projector, Spirit Box, Ghost Writing' },
    { id: 24, ghostName: 'Thaye', description: "Thaye have been known to rapidly age over time, even in the afterlife. From what we've learned, they seem to deteriorate faster while within the presence of the living.", strength: 'Much more active, aggressive and faster during hunts as soon as a player enters the location.', weakness: 'Becomes slower and less active over time when players are nearby.', evidences: 'D.O.T.S Projector, Ghost Orb, Ghost Writing' },
    { id: 25, ghostName: 'Obambo', description: 'The Obambo is the ghost of someone who never received proper rest. Moody and defensive, it shifts between calm and aggressive states.', strength: 'When aggressive, Obambo begins the hunt more quickly.', weakness: 'When calm, Obambo takes longer to begin the hunt and is easier to track.', evidences: 'Ghost Writing, UV, D.O.T.S. Projector' },
    { id: 26, ghostName: 'Gallu', description: 'Another form of demon, Gallu is a reminder that death comes for everyone. Using protective equipment provokes the ghost until it becomes ineffective.', strength: "Using protective equipment enrages the ghost, weakening the equipment's effects.", weakness: 'Being enraged exhausts Gallu, making protective equipment more effective.', evidences: 'EMF Level 5, Fingerprints, Spirit Box' },
    { id: 27, ghostName: 'Dayan', description: "The Dayan is born from the soul of someone who suffered immense cruelty in life. Now, in death, it remains hypervigilant toward anyone who 'dances' too close.", strength: "Dayan gains strength to protect itself if people 'dance' too close to it.", weakness: 'Dayan loses strength if people near it remain still.', evidences: 'EMF Level 5, Ghost Orb, Spirit Box' },
];

const germanNames = {
    Spirit: 'Geist',
    Wraith: 'Gespenst',
    Phantom: 'Phantom',
    Poltergeist: 'Poltergeist',
    Banshee: 'Banshee',
    Jinn: 'Jinn',
    Mare: 'Mare',
    Revenant: 'Revenant',
    Shade: 'Schatten',
    Demon: 'Dämon',
    Yurei: 'Yurei',
    Oni: 'Oni',
    Yokai: 'Yokai',
    Hantu: 'Hantu',
    Goryo: 'Goryo',
    Myling: 'Myling',
    Onryo: 'Onryo',
    'The Twins': 'Die Zwillinge',
    Raiju: 'Raiju',
    Obake: 'Obake',
    'The Mimic': 'Der Mimik',
    Moroi: 'Moroi',
    Deogen: 'Deogen',
    Thaye: 'Thaye',
    Obambo: 'Obambo',
    Gallu: 'Gallu',
    Dayan: 'Dayan',
};

const toGermanEvidence = (value) => value
    .replaceAll('EMF Level 5', 'EMF Stufe 5')
    .replaceAll('D.O.T.S Projector', 'D.O.T.S.-Projektor')
    .replaceAll('Fingerprints', 'Fingerabdrücke')
    .replaceAll('Ghost Orb', 'Geisterkugel')
    .replaceAll('Ghost Writing', 'Geisterschrift')
    .replaceAll('Freezing Temperatures', 'Gefriertemperaturen');

const ghostsDe = ghostsEn.map((ghost) => ({
    ...ghost,
    ghostName: germanNames[ghost.ghostName] ?? ghost.ghostName,
    description: `Dieser Geist ist als ${germanNames[ghost.ghostName] ?? ghost.ghostName} bekannt. ${ghost.description}`,
    strength: `Stärke: ${ghost.strength}`,
    weakness: `Schwäche: ${ghost.weakness}`,
    evidences: toGermanEvidence(ghost.evidences),
}));

export const ghostsInfo = {
    en: ghostsEn,
    es: ghostsEn,
    fr: ghostsEn,
    de: ghostsDe,
};
