<template>
    <div class="whole" @mouseenter="showBtn" @mouseleave="hideBtn">
        <div class="showJournal">
            <div class="journalInner" :style="{ display: journalHidden ? 'none' : 'block' }">
                <div class="tabs">
                    <button @click="selectedPage = 'Evidences'" class="tab-item"
                        :class="{ 'tab-item-active': selectedPage === 'Evidences' }">
                        Evidences
                    </button>
                    <button @click="selectedPage = 'Ghosts'" class="tab-item"
                        :class="{ 'tab-item-active': selectedPage === 'Ghosts' }">
                        Ghosts
                    </button>
                </div>
                <div class="evidenceContainer">
                    <div v-show="selectedPage == 'Evidences'" class="evidences-page">
                        <hr>
                        <div class="evidences-table">
                            <div class="evidence-item">
                                <div @click="toggleState(0)" class="evidence-name" id="emf">
                                    <div class="content">
                                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                            <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black"
                                                stroke-width="3" fill="none" style="display: none;" />
                                        </svg>
                                        EMF Level 5
                                    </div>
                                    <div class="strike-line"></div> <!-- Línea horizontal -->
                                </div>
                                <div @click="toggleState(1)" class="evidence-name" id="dots">
                                    <div class="content">
                                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                            <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black"
                                                stroke-width="3" fill="none" style="display: none;" />
                                        </svg>
                                        D.O.T.S. Projector
                                    </div>
                                    <div class="strike-line"></div> <!-- Línea horizontal -->
                                </div>
                            </div>
                            <div class="evidence-item">
                                <div @click="toggleState(2)" class="evidence-name" id="fp">
                                    <div class="content">
                                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                            <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black"
                                                stroke-width="3" fill="none" style="display: none;" />
                                        </svg>
                                        Fingerprints
                                    </div>
                                    <div class="strike-line"></div> <!-- Línea horizontal -->
                                </div>
                                <div @click="toggleState(3)" class="evidence-name" id="orbs">
                                    <div class="content">
                                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                            <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black"
                                                stroke-width="3" fill="none" style="display: none;" />
                                        </svg>
                                        Ghost Orb
                                    </div>
                                    <div class="strike-line"></div> <!-- Línea horizontal -->
                                </div>
                            </div>
                            <div class="evidence-item">
                                <div @click="toggleState(4)" class="evidence-name" id="gw">
                                    <div class="content">
                                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                            <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black"
                                                stroke-width="3" fill="none" style="display: none;" />
                                        </svg>
                                        Ghost Writing
                                    </div>
                                    <div class="strike-line"></div> <!-- Línea horizontal -->
                                </div>
                                <div @click="toggleState(5)" class="evidence-name" id="sb">
                                    <div class="content">
                                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                            <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black"
                                                stroke-width="3" fill="none" style="display: none;" />
                                        </svg>
                                        Spirit Box
                                    </div>
                                    <div class="strike-line"></div> <!-- Línea horizontal -->
                                </div>
                            </div>
                            <div class="evidence-item">
                                <div @click="toggleState(6)" class="evidence-name ft" id="ft">
                                    <div class="content">
                                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                            <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black"
                                                stroke-width="3" fill="none" style="display: none;" />
                                        </svg>
                                        Freezing Temperatures
                                    </div>
                                    <div class="strike-line"></div> <!-- Línea horizontal -->
                                </div>
                            </div>
                        </div>
                        <hr>
                        <table class="fantasmas-table">
                            <tr v-for="row in fantasmasTable" :key="row.id">
                                <td v-for="(ghost, index) in row.ghosts" :key="index">
                                    <div :id="ghost" style="opacity:0.3;"
                                        :class="{ 'ghost-name': true, 'fantasma-seleccionado': isGhostSelected(ghost), 'init': init }"
                                        @click="toggleStateGhost(ghostNames[3 * (row.id - 1) + index])">
                                        <div class="content w-100">
                                            {{ ghost }}
                                        </div>
                                        <div class="strike-line"></div> <!-- Línea horizontal -->
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <hr>
                        <div class="w-100">
                            <button class="btn-reset" @click="resetEvidencias">Reset</button>
                        </div>
                    </div>
                    <div v-show="selectedPage == 'Ghosts'" class="ghosts-page">
                        <hr>
                        <div class="ghosts-list">
                            <tr v-for="row in fantasmasTable" :key="row.id" class="w-100">
                                <td class="w-30" v-for="(ghost, index) in row.ghosts" :key="index">
                                    <div class="ghost-name text-center"
                                        :class="{ 'ghost-selected': selectedGhost.ghostName == ghost }"
                                        @click="showInfo(ghostNames[3 * (row.id - 1) + index])">
                                        {{ ghost }}
                                    </div>
                                </td>
                            </tr>
                        </div>
                        <hr>
                        <div class="ghosts-info" v-if="selectedGhost">
                            <div class="ghost-description" v-if="selectedGhost">{{ selectedGhost.description }}</div>
                            <div class="ghost-strength mt-2"><strong>Strength: </strong>{{ selectedGhost.strength }}
                            </div>
                            <div class="ghost-weakness mt-2"><strong>Weakness: </strong>{{ selectedGhost.weakness }}
                            </div>
                            <div class="ghost-evidences mt-2"><strong>Evidences: </strong>{{ selectedGhost.evidences }}
                            </div>
                        </div>
                        <div v-else class="text-center">Select a ghost to see its info.</div>
                    </div>
                </div>
            </div>
            <button v-show="!journalHidden" class="toggle-btn" @click="toggleJournal">
                <img class="toggle-btn-size" src="/recursos/arrowleft.png" alt="Minimizar">
            </button>
            <button v-show="journalHidden" id="btn-maximizar" class="toggle-btn" @click="toggleJournal">
                <img class="toggle-btn-size" src="/recursos/arrowright.png" alt="Maximizar">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedGhost: '',
            ghostsInfo: [
                {
                    id: 1,
                    ghostName: 'Spirit',
                    description: 'Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.',
                    strength: 'No strength.',
                    weakness: 'Incense is more effective, preventing a hunt for longer.',
                    evidences: 'EMF Level 5, Spirit Box, Ghost Writing'
                },
                {
                    id: 2,
                    ghostName: 'Wraith',
                    description: 'Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.',
                    strength: 'Cannot be tracked by footsteps. Will occasionally teleport to a random player.',
                    weakness: 'Will not step in salt.',
                    evidences: 'EMF Level 5, Spirit Box, D.O.T.S Projector'
                },
                {
                    id: 3,
                    ghostName: 'Phantom',
                    description: 'A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.',
                    strength: 'Looking at a Phantom and hearing heartbeat sounds will drain the player\'s sanity. Will occasionally walk to a random player.',
                    weakness: 'Taking a photo of the Phantom will cause it to disappear. Less visible during hunts.',
                    evidences: 'D.O.T.S Projector, Fingerprints, Ghost Orb'
                },
                {
                    id: 4,
                    ghostName: 'Poltergeist',
                    description: 'One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims.',
                    strength: 'Capable of throwing multiple objects at once. Can throw objects at high velocities.',
                    weakness: 'Becomes powerless with no throwables nearby.',
                    evidences: 'Spirit Box, Fingerprints, Ghost Writing'
                },
                {
                    id: 5,
                    ghostName: 'Banshee',
                    description: 'The singing siren, known for attracting its victims through song. It has been known to single out its prey before making a killing blow.',
                    strength: 'Will target only one player at a time. Increased chance of performing a singing ghost event.',
                    weakness: 'Has a distinctive wail on the Parabolic Microphone.',
                    evidences: 'EMF Level 5, Fingerprints, Freezing Temperatures'
                },
                {
                    id: 6,
                    ghostName: 'Jinn',
                    description: 'A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed.',
                    strength: 'Travels at a faster speed if a distant player is in line of sight while the fuse box is on. Can occasionally drain large amounts of sanity from a nearby player.',
                    weakness: 'Cannot use its ability if the fuse box is off. Will never turn the fuse box off directly.',
                    evidences: 'EMF Level 5, Spirit Box, Freezing Temperatures'
                },
                {
                    id: 7,
                    ghostName: 'Mare',
                    description: 'A Mare is the source of all nightmares, making it most powerful in the dark.',
                    strength: 'Has an increased chance to attack in the dark.',
                    weakness: 'Turning the lights on will reduce the chance of an attack. Will occasionally turn lights off right away. Will never turn a light on.',
                    evidences: 'Spirit Box, Ghost Orb, Freezing Temperatures'
                },
                {
                    id: 8,
                    ghostName: 'Revenant',
                    description: 'A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant; however, as soon as they hunt they can move incredibly fast.',
                    strength: 'Moves significantly faster if the player location is known during a hunt.',
                    weakness: 'Moves very slowly when not chasing a player.',
                    evidences: 'Ghost Orb, Ghost Writing, Freezing Temperatures'
                },
                {
                    id: 9,
                    ghostName: 'Shade',
                    description: 'A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are people nearby.',
                    strength: 'Less likely to perform interactions.',
                    weakness: 'Cannot hunt if people are nearby.',
                    evidences: 'EMF Level 5, Ghost Writing, Freezing Temperatures'
                },
                {
                    id: 10,
                    ghostName: 'Demon',
                    description: 'A Demon is one of the worst ghosts you can encounter. It has been known to attack without reason.',
                    strength: 'Incense is less effective, preventing a hunt for less time. Can rarely initiate a hunt at any sanity level.',
                    weakness: 'Crucifix range is 50% larger than placement range indicator.',
                    evidences: 'EMF Level 5, Spirit Box, Freezing Temperatures'
                },
                {
                    id: 11,
                    ghostName: 'Yurei',
                    description: 'A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.',
                    strength: 'Can quickly drain sanity from nearby players.',
                    weakness: 'Smudging the Yurei will temporarily trap it and reduce how often it wanders. Using its ability causes it to slam doors.',
                    evidences: 'D.O.T.S Projector, Ghost Orb, Freezing Temperatures'
                },
                {
                    id: 12,
                    ghostName: 'Oni',
                    description: 'Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.',
                    strength: 'Increased activity when players are nearby.',
                    weakness: 'More visible during hunts. Cannot perform the "airball" ghost event.',
                    evidences: 'EMF Level 5, D.O.T.S Projector, Freezing Temperatures'
                },
                {
                    id: 13,
                    ghostName: 'Yokai',
                    description: 'Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.',
                    strength: 'Talking near the Yokai will anger it, increasing the chance to hunt.',
                    weakness: 'Can only hear players within a short radius during a hunt.',
                    evidences: 'Spirit Box, Ghost Orb, D.O.T.S Projector'
                },
                {
                    id: 14,
                    ghostName: 'Hantu',
                    description: 'A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.',
                    strength: 'Lower temperatures allow the Hantu to move faster during hunts.',
                    weakness: 'Warmer areas slow the Hantu\'s movement while hunting. Will produce freezing breath during a hunt if the fuse box is off. Will never turn the fuse box on.',
                    evidences: 'Fingerprints, Ghost Orb, Freezing Temperatures'
                },
                {
                    id: 15,
                    ghostName: 'Goryo',
                    description: 'When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.',
                    strength: 'Can only enter a D.O.T.S. state when nobody is nearby. Its D.O.T.S. silhouette can only be seen through a Video Camera.',
                    weakness: 'Cannot wander far from its room, or change favorite rooms.',
                    evidences: 'EMF Level 5, D.O.T.S Projector, Ghost Orb'
                },
                {
                    id: 16,
                    ghostName: 'Myling',
                    description: 'A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.',
                    strength: 'Produces quieter sounds during a hunt.',
                    weakness: 'Produces paranormal sounds more frequently on the Parabolic Microphone.',
                    evidences: 'EMF Level 5, Fingerprints, Ghost Writing'
                },
                {
                    id: 17,
                    ghostName: 'Onryo',
                    description: "The Onryo is often referred to as 'The Wrathful Spirit'. It steals souls from dying victims' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.",
                    strength: 'A flame extinguishing can cause an Onryo to hunt regardless of average sanity.',
                    weakness: 'A nearby lit flame will prevent the Onryo from hunting, just like a crucifix.',
                    evidences: 'Spirit Box, Ghost Orb, Freezing Temperatures'
                },
                {
                    id: 18,
                    ghostName: 'The Twins',
                    description: "These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.",
                    strength: 'Either twin may start a hunt, though not at the same time. One twin is slow, the other is fast.',
                    weakness: 'Will often interact with the environment at the same time but usually in different places.',
                    evidences: 'EMF Level 5, Spirit Box, Freezing Temperatures'
                },
                {
                    id: 19,
                    ghostName: 'Raiju',
                    description: 'A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.',
                    strength: 'Moves faster near active electronic equipment.',
                    weakness: 'Disrupts electronic equipment from further away when it hunts.',
                    evidences: 'EMF Level 5, D.O.T.S Projector, Ghost Orb'
                },
                {
                    id: 20,
                    ghostName: 'Obake',
                    description: 'Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.',
                    strength: 'Has a chance to not leave fingerprints when interacting with things. May cause existing fingerprints to disappear sooner than usual.',
                    weakness: 'Has a small chance of leaving special fingerprints. Can briefly shapeshift into another model during a hunt.',
                    evidences: 'EMF Level 5, Fingerprints, Ghost Orb'
                },
                {
                    id: 21,
                    ghostName: 'The Mimic',
                    description: 'The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.',
                    strength: 'Can mimic the abilities and traits of other ghosts.',
                    weakness: 'Will present fake Ghost Orbs as secondary evidence.',
                    evidences: 'Spirit Box, Fingerprints, Freezing Temperatures'
                },
                {
                    id: 22,
                    ghostName: 'Moroi',
                    description: 'Moroi have risen from the grave to drain energy from the living. They have been known to place curses on their victims, curable only by antidotes or moving very far away.',
                    strength: 'Moves noticeably faster at low average sanity. Can curse players, making them lose sanity quicker than usual while in the investigation zone.',
                    weakness: 'Incense blinds the ghost for 50% longer during hunts.',
                    evidences: 'Spirit Box, Ghost Writing, Freezing Temperatures'
                },
                {
                    id: 23,
                    ghostName: 'Deogen',
                    description: "Sometimes surrounded by an endless fog, Deogen have been eluding ghost hunters for years.\nThese ghosts have been reported to find even the most hidden prey, before stalking them into exhaustion.",
                    strength: 'Always knows where the player is during a hunt and moves very quickly toward its victim.',
                    weakness: 'Moves extremely slowly once near its victim.',
                    evidences: 'D.O.T.S Projector, Spirit Box, Ghost Writing'
                },
                {
                    id: 24,
                    ghostName: 'Thaye',
                    description: "Thaye have been known to rapidly age over time, even in the afterlife. From what we've learned, they seem to deteriorate faster while within the presence of the living.",
                    strength: 'Much more active, aggressive and faster during hunts as soon as a player enters the location.',
                    weakness: 'Becomes slower and less active over time when players are nearby.',
                    evidences: 'D.O.T.S Projector, Ghost Orb, Ghost Writing'
                }
            ],
            selectedPage: 'Evidences',
            fantasmasTable: [
                { id: 1, ghosts: ['Spirit', 'Wraith', 'Phantom'] },
                { id: 2, ghosts: ['Poltergeist', 'Banshee', 'Jinn'] },
                { id: 3, ghosts: ['Mare', 'Revenant', 'Shade'] },
                { id: 4, ghosts: ['Demon', 'Yurei', 'Oni'] },
                { id: 5, ghosts: ['Yokai', 'Hantu', 'Goryo'] },
                { id: 6, ghosts: ['Myling', 'Onryo', 'The Twins'] },
                { id: 7, ghosts: ['Raiju', 'Obake', 'The Mimic'] },
                { id: 8, ghosts: ['Moroi', 'Deogen', 'Thaye'] },
            ],
            fantasmas: '',
            journalHidden: false,
            evidencias: [
                'deseleccionado',
                'deseleccionado',
                'deseleccionado',
                'deseleccionado',
                'deseleccionado',
                'deseleccionado',
                'deseleccionado',
            ],
            maxEvidencias: 3,
            evidence: ['emf', 'dots', 'fp', 'orbs', 'gw', 'sb', 'ft'],
            ghostNames: ['Spirit', 'Wraith', 'Phantom', 'Poltergeist', 'Banshee', 'Jinn', 'Mare', 'Revenant', 'Shade', 'Demon', 'Yurei', 'Oni', 'Yokai', 'Hantu', 'Goryo', 'Myling', 'Onryo', 'The Twins', 'Raiju', 'Obake', 'The Mimic', 'Moroi', 'Deogen', 'Thaye'],
            ghostList: {
                Spirit: 'deseleccionado',
                Wraith: 'deseleccionado',
                Phantom: 'deseleccionado',
                Poltergeist: 'deseleccionado',
                Banshee: 'deseleccionado',
                Jinn: 'deseleccionado',
                Mare: 'deseleccionado',
                Revenant: 'deseleccionado',
                Shade: 'deseleccionado',
                Demon: 'deseleccionado',
                Yurei: 'deseleccionado',
                Oni: 'deseleccionado',
                Yokai: 'deseleccionado',
                Hantu: 'deseleccionado',
                Goryo: 'deseleccionado',
                Myling: 'deseleccionado',
                Onryo: 'deseleccionado',
                'The Twins': 'deseleccionado',
                Raiju: 'deseleccionado',
                Obake: 'deseleccionado',
                'The Mimic': 'deseleccionado',
                Moroi: 'deseleccionado',
                Deogen: 'deseleccionado',
                Thaye: 'deseleccionado'
            },
            init: true,
            ghostMappings : [
                //emf5
                ['Spirit', 'Wraith', 'Jinn', 'Shade', 'Oni', 'Goryo', 'Myling', 'The Twins', 'Raiju', 'Obake'],
                //dots
                ['Wraith', 'Phantom', 'Banshee', 'Yurei', 'Oni', 'Yokai', 'Goryo', 'Raiju', 'Deogen', 'Thaye'],
                //fp
                ['Phantom', 'Poltergeist', 'Banshee', 'Jinn', 'Demon', 'Hantu', 'Goryo', 'Myling', 'Obake', 'The Mimic'],
                //orbs
                ['Banshee', 'Mare', 'Revenant', 'Yurei', 'Yokai', 'Hantu', 'Onryo', 'Raiju', 'Obake', 'Thaye'],
                //gw
                ['Spirit', 'Poltergeist', 'Mare', 'Revenant', 'Shade', 'Demon', 'Myling', 'Moroi', 'Deogen', 'Thaye'],
                //sb
                ['Spirit', 'Wraith', 'Phantom', 'Poltergeist', 'Mare', 'Yokai', 'Onryo', 'The Twins', 'The Mimic', 'Moroi', 'Deogen'],
                //ft
                ['Jinn', 'Revenant', 'Shade', 'Demon', 'Yurei', 'Oni', 'Hantu', 'Onryo', 'The Twins', 'The Mimic', 'Moroi'],
            ],
        };
    },
    computed: {
    },
    methods: {
        showInfo(id) {
            this.selectedGhost = this.ghostsInfo[this.ghostsInfo.findIndex(ghost => ghost.ghostName == id)];
        },
        showBtn() {
            if (this.journalHidden) {
                document.getElementById('btn-maximizar').style.display = 'block';
            }
        },
        hideBtn() {
            if (this.journalHidden) {
                document.getElementById('btn-maximizar').style.display = 'none';
            }

        },
        isGhostSelected(ghostName) {
            return this.fantasmas.includes(ghostName);
        },
        getGhostRow(ghostNames) {
            return ghostNames.map(name => ({ name, selected: this.isGhostSelected(name) }));
        },
        toggleJournal() {
            this.journalHidden = !this.journalHidden;
        },
        toggleState(item) {
            const currentState = this.evidencias[item];

            const selectedCount = Object.values(this.evidencias).filter(state => state === 'seleccionado').length;

            if (currentState === 'deseleccionado' && selectedCount < this.maxEvidencias) {
                this.evidencias[item] = 'seleccionado';
                this.setSeleccionado(item);
                this.updateFantasmas();
            } else if (currentState === 'seleccionado') {
                this.evidencias[item] = 'eliminado';
                this.setEliminado(item);
                this.updateFantasmas();
            } else if (currentState === 'eliminado') {
                this.evidencias[item] = 'deseleccionado';
                this.setDeseleccionado(item);
                this.updateFantasmas();
            }
        },
        toggleStateGhost(item) {
            const currentState = this.ghostList[item];
            if (currentState === 'deseleccionado') {
                this.ghostList[item] = 'seleccionado';
                this.setGhostSeleccionado(item);
            } else if (currentState === 'seleccionado') {
                this.ghostList[item] = 'eliminado';
                this.setGhostEliminado(item);
            } else if (currentState === 'eliminado') {
                this.ghostList[item] = 'deseleccionado';
                this.setGhostDeseleccionado(item);
            }
        },
        setSeleccionado(id) {
            let evidence;
            switch (id) {
                case 0: evidence = 'emf';
                    break;
                case 1: evidence = 'dots';
                    break;
                case 2: evidence = 'fp';
                    break;
                case 3: evidence = 'orbs';
                    break;
                case 4: evidence = 'gw';
                    break;
                case 5: evidence = 'sb';
                    break;
                case 6: evidence = 'ft';
                    break;
            }
            const element = document.getElementById(evidence);
            if (element) {
                const checkMark = element.querySelector(".cross");
                const strikeLine = element.querySelector(".strike-line");
                if (checkMark) checkMark.style.display = "block"; // Muestra el tilde
                if (strikeLine) strikeLine.style.display = "none"; // Oculta la línea
            }
        },
        setEliminado(id) {
            let evidence;
            switch (id) {
                case 0: evidence = 'emf';
                    break;
                case 1: evidence = 'dots';
                    break;
                case 2: evidence = 'fp';
                    break;
                case 3: evidence = 'orbs';
                    break;
                case 4: evidence = 'gw';
                    break;
                case 5: evidence = 'sb';
                    break;
                case 6: evidence = 'ft';
                    break;
            }
            const element = document.getElementById(evidence);
            if (element) {
                element.style.textDecoration = 'line-through';
                element.style.textDecorationThickness = '2px';
                const checkMark = element.querySelector(".cross");
                const strikeLine = element.querySelector(".strike-line");
                if (checkMark) checkMark.style.display = "none"; // Oculta el tilde
                if (strikeLine) strikeLine.style.display = "block"; // Muestra la línea
            }
        },
        setDeseleccionado(id) {
            let evidence;
            switch (id) {
                case 0: evidence = 'emf';
                    break;
                case 1: evidence = 'dots';
                    break;
                case 2: evidence = 'fp';
                    break;
                case 3: evidence = 'orbs';
                    break;
                case 4: evidence = 'gw';
                    break;
                case 5: evidence = 'sb';
                    break;
                case 6: evidence = 'ft';
                    break;
            }
            const element = document.getElementById(evidence);
            if (element) {
                element.style.textDecoration = 'none';
                const checkMark = element.querySelector(".cross");
                const strikeLine = element.querySelector(".strike-line");
                if (checkMark) checkMark.style.display = "none"; // Oculta el tilde
                if (strikeLine) strikeLine.style.display = "none"; // Oculta la línea
            }
        },
        setGhostSeleccionado(id) {
            const element = document.getElementById(id);
            if (element) {
                const checkMark = element.querySelector(".cross");
                const strikeLine = element.querySelector(".strike-line");
                if (checkMark) checkMark.style.display = "block"; // Muestra el tilde
                if (strikeLine) strikeLine.style.display = "none"; // Oculta la línea
                element.style.outline = 'solid';
                element.style.outlineOffset = '-1px';
                element.style.outlineWidth = '2px';
                element.style.outlineColor = 'black';
                element.style.borderRadius = '10px';
            }
        },
        setGhostEliminado(id) {
            const element = document.getElementById(id);
            if (element) {
                element.style.textDecoration = 'line-through';
                element.style.textDecorationThickness = '2px';
                element.style.outline = 'none';
            }
        },
        setGhostDeseleccionado(id) {
            const element = document.getElementById(id);
            if (element) {
                element.style.textDecoration = 'none';
                const checkMark = element.querySelector(".cross");
                const strikeLine = element.querySelector(".strike-line");
                if (checkMark) checkMark.style.display = "none"; // Oculta el tilde
                if (strikeLine) strikeLine.style.display = "none"; // Oculta la línea
                element.style.outline = 'none';
            }
        },
        resetEvidencias() {
            for (const evidencia in this.evidencias) {
                this.evidencias[evidencia] = 'deseleccionado';
                this.setDeseleccionado(parseInt(evidencia));
            }
            for (const ghost in this.ghostList) {
                this.ghostList[ghost] = 'deseleccionado';
                this.setGhostDeseleccionado(ghost);
            }
            this.fantasmas = ''
            this.textoFantasmas = '';
            this.init = true;
        },
        updateFantasmas() {
            this.init = false;            
            let selectedGhosts = [];
            this.ghostMappings.map((row, index) => {
                switch (this.evidencias[index]) {
                    case 'seleccionado':
                        if (selectedGhosts.length === 0) {
                            row.map(item => selectedGhosts.push(item))
                        } else {
                            selectedGhosts = selectedGhosts.filter(i => {
                                return row.includes(i)
                            });
                        }
                        break;
                    case 'eliminado':
                        if (selectedGhosts.length === 0) {
                            selectedGhosts = this.ghostNames;
                        }
                        selectedGhosts = selectedGhosts.filter(i => {
                            return !row.includes(i)
                        });
                        break;
                }
            })
            if (selectedGhosts.length === 0) {
                if (this.evidencias.every(evidence => evidence == 'deseleccionado')) {
                    this.init = true;
                    console.log('Estan todos desel')
                }
            }
            this.fantasmas = selectedGhosts;
        },
    },
};
</script>

<style>
.journalInner{
    width: 295px;
}
.mt-2 {
    margin-top: 5px;
}

/* Estilos para la barra de desplazamiento (WebKit) */
::-webkit-scrollbar {
    width: 10px;
    /* Ancho de la barra de desplazamiento */
    height: 10px;
    /* Altura de la barra de desplazamiento (para scroll horizontal) */
}

/* Fondo de la barra de desplazamiento */
::-webkit-scrollbar-track {
    /* Color más claro al pasar el mouse */
    border-radius: 5px;
    /* Bordes redondeados */
}

/* Barra de desplazamiento */
::-webkit-scrollbar-thumb {
    background-color: rgb(242, 196, 150);
    /* Color más claro al pasar el mouse */
    border-radius: 5px;
    /* Bordes redondeados */
}

/* Efecto hover sobre la barra de desplazamiento */
::-webkit-scrollbar-thumb:hover {
    background: #cb711d;
    /* Color más claro al pasar el mouse */
}

/* Botones de la barra de desplazamiento (flechas) */
::-webkit-scrollbar-button {
    display: none;
    /* Oculta los botones de flecha */
}

.ghosts-info {
    overflow: auto;
    text-align: justify;
    width:100%;
    padding: 0 5px;
    height: 100%;
}

.ghost-selected {
    background-image: url('/recursos/brush.png');
    background-size: cover;
    background-position: center;
}

.ghosts-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 5px);
    padding-top: 5px;
    gap: 5px;
}

.ghosts-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.m-auto {
    margin: auto;
}

.init {
    opacity: 1 !important;
}

.whole {
    width: 100svw;
    height: 100svh;
    position: absolute;
    top: 0;
    left: 0;
}

.evidence-item {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.evidence-name {
    position: relative;
    width: 50%;
}

.ft {
    width: auto;
}

.ghost-name {
    position: relative;
    /* Permite posicionar la línea de forma absoluta */
    width: 100%;
    /* Ocupa todo el ancho disponible */
}

.strike-line {
    position: absolute;
    top: 50%;
    /* Centra verticalmente */
    left: 0;
    width: 20%;
    height: 2.5px;
    /* Grosor de la línea */
    background-color: black;
    /* Color de la línea */
    /* Ajusta el centrado vertical */
    display: none;
    /* Inicialmente oculta */
}

.evidence-name .content,
.ghost-name .content {
    position: relative;
    z-index: 1;
    /* Asegura que el contenido esté por encima de la línea */
}

.content {
    width: fit-content;
}

body {
    font-family: 'fuente';
    user-select: none;
    font-style: italic;
}

.fantasmas-table {
    text-align: center;
    width: 100%;
}

.fantasmas-table td {
    padding: 2px;
    margin: auto;
}

.ghost-name {
    margin: auto;
    white-space: nowrap;
    /* Opacidad predeterminada */
}

.ghost-name:hover {
    background-image: url('/recursos/brush.png');
    /* Imagen de pincelada */
    background-size: cover;
    background-position: center;
    cursor: pointer;
}

.ghost-name.fantasma-seleccionado {
    /* FuPhantom en negrita si está seleccionado */
    opacity: 1 !important;
}

.evidences-table {
    width: 100%;
    margin: 0 auto 0 auto;
    white-space: nowrap;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.evidences-table td {
    border-style: solid;
    border-color: rgba(0, 0, 0, 0);
}

.evidence-name {
    vertical-align: middle;
    padding: 0;
    border-radius: 10px;
    white-space: nowrap;
}

.w-30 {
    width: 33.333%;
}

.evidence-name:hover {
    background-image: url('/recursos/brush.png');
    /* Imagen de pincelada */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

.titulo-pruebas {
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    margin-left: 20px;
}

.fantasma {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    top: 70%;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;

}

.btn-maximizar {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    border: none;
}

.btn-maximizar:hover {
    cursor: pointer;
}

.text-center {
    text-align: center;
}

.btn-maximizar-size {
    width: 30px;
    height: 30px;

}

.evidences-page {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    height: 100%;
    width: 100%;
    gap: 5px;
}

.evidenceContainer {
    width: 30%;
    min-width: 275px;
    height: 350px;
    display: flex;
    flex-direction: column;
    background-color: rgb(254, 252, 219);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 10px;
    background-image: url('C:\Proyectos\journal-phasmophobia-en\public\recursos\fondo-page.jpg');
    background-size: contain;
}

.w-100 {
    display: flex;
    justify-content: center;
    width: 100%;
}

hr {
    color: black;
    border-style: solid;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
}


.btn-reset {
    margin:auto;
    width: 30%;
    font-family: 'fuente';
    font-size: large;
    font-weight: normal;
    color: white;
    text-shadow: 2px 1px 5px black;
    border: none;
    background-color: rgba(0, 0, 0, 0);
}

.btn-reset:hover {
    cursor: pointer;
    background-image: url('/recursos/brush.png');
    /* Imagen de pincelada */
    background-size: cover;
    background-position: center;
}

.hideJournal {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.showJournal {
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 15%;
    opacity: 100;
    transition: opacity 0.3s ease;
    width: 30%;
    min-width: 305px;
    max-width:330px;
    min-height: 375px;
    max-height: 400px;
}

.toggle-btn {
    margin-bottom: auto;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    text-shadow: 1px 1px 5px black;
    z-index: 1;

}

.toggle-btn:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
}

.toggle-btn-size {
    width: 20px;
}

.testLetra {
    border-width: 3px;
    border-radius: 10px;
    border-color: black;
    border-style: solid;
}

.line-through {
    display: none;
}

.tabs {
    display: flex;
    height: 30px;
    width: calc(30% + 20px);
    min-width: 255px;
}

.tab-item {
    font-family: 'fuente';
    font-size: 1rem;
    background-color: rgb(242, 196, 150);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-size: contain;
    border: none;
    height: 80%;
    width: 30%;
    margin-top: auto;
}

.tab-item-active {
    font-size: 1.2rem;
    background-color: rgb(254, 235, 217);
    width: 40%;
    height: 100%;
}

.tab-item:hover {
    cursor: pointer;
    filter: brightness(1);
}


    .fantasmas-table,
    .evidences-table, .ghosts-list {
        font-size: 1.2rem;
    }


@media (max-height:499px) {
    .fantasmas-table,
    .evidences-table, .ghosts-list {
        font-size: 1rem;
    }
    .evidenceContainer {
        height: 300px;
    }

    .fantasmas-table td {
        padding: 1px;
    }

    .showJournal {
        min-height: 290px;
    }
}
</style>