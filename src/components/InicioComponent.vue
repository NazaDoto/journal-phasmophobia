<template>
    <div>
        <button class="toggle-btn btn-maximizar" @click="toggleJournal">
            <img v-if="journalHidden" class="toggle-btn-size" src="/recursos/logo.png" alt="Minimizar">
        </button>
        <div :class="{ 'hideJournal': journalHidden, 'showJournal': !journalHidden }">
            <div class="tabs">
                <button @click="selectedPage = 'Evidences'" class="tab-item"
                    :class="{ 'tab-item-active': selectedPage === 'Evidences' }">
                    Evidences
                </button>
                <button @click="selectedPage = 'Ghosts'" class="tab-item"
                    :class="{ 'tab-item-active': selectedPage === 'Ghosts' }">
                    Ghosts
                </button>
                <button class="toggle-btn" @click="toggleJournal">
                    <img class="toggle-btn-size" src="/recursos/close.png" alt="Maximizar">
                </button>
            </div>
            <div class="evidenceContainer">
                <div v-if="selectedPage == 'Evidences'" class="evidences-page">
                    <hr>

                    <table class="evidences-table">
                        <tr>
                            <td @click="toggleState(evidence[0])" class="evidence-name" id="emf">
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                    <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black" stroke-width="3"
                                        fill="none" style="display: none;" />
                                </svg>

                                EMF Level 5
                            </td>
                            <td @click="toggleState(evidence[1])" class="evidence-name" id="dots">
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                    <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black" stroke-width="3"
                                        fill="none" style="display: none;" />
                                </svg>

                                D.O.T.S Projector
                            </td>
                        </tr>
                        <tr>
                            <td @click="toggleState(evidence[2])" class="evidence-name" id="hd">
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                    <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black" stroke-width="3"
                                        fill="none" style="display: none;" />
                                </svg>

                                Fingerprints
                            </td>
                            <td @click="toggleState(evidence[3])" class="evidence-name" id="orbes">
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                    <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black" stroke-width="3"
                                        fill="none" style="display: none;" />
                                </svg>

                                Ghost Orb
                            </td>
                        </tr>
                        <tr>
                            <td @click="toggleState(evidence[4])" class="evidence-name" id="libro">
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                    <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black" stroke-width="3"
                                        fill="none" style="display: none;" />
                                </svg>

                                Ghost Writing
                            </td>
                            <td @click="toggleState(evidence[5])" class="evidence-name" id="sb">
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                    <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black" stroke-width="3"
                                        fill="none" style="display: none;" />
                                </svg>

                                Spirit Box
                            </td>
                        </tr>
                        <tr>
                            <td @click="toggleState(evidence[6])" class="evidence-name" id="temp">
                                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="15" fill="none" stroke="black" stroke-width="4" />
                                    <path class="cross" d="M3 3 L12 12 M12 3 L3 12" stroke="black" stroke-width="3"
                                        fill="none" style="display: none;" />
                                </svg>

                                Freezing Temperatures
                            </td>
                        </tr>
                        <tr>
                        </tr>
                    </table>
                    <hr>
                    <table class="fantasmas-table">
                        <tr v-for="row in fantasmasTable" :key="row.id">
                            <td v-for="(ghost, index) in row.ghosts" :key="index">
                                <div :id="ghost.name" :style="{ opacity: fantasmas.length !== 0 ? 0.3 : 1 }"
                                    :class="{ 'ghost-name': true, 'fantasma-seleccionado': isGhostSelected(ghost.name) }"
                                    @click="toggleStateGhost(ghostNames[3 * (row.id - 1) + index])">
                                    {{ ghost.name }}
                                </div>
                            </td>
                        </tr>
                    </table>
                    <hr>
                    <div class="w-100">
                        <button class="btn-reset" @click="resetEvidencias">Reset</button>
                    </div>
                </div>
                <div v-else class="ghosts-page">
                    Coming soon...
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
            evidencias: {
                emf: 'deseleccionado',
                dots: 'deseleccionado',
                hd: 'deseleccionado',
                orbes: 'deseleccionado',
                libro: 'deseleccionado',
                sb: 'deseleccionado',
                temp: 'deseleccionado',
            },
            maxEvidencias: 3,
            evidence: ['emf', 'dots', 'hd', 'orbes', 'libro', 'sb', 'temp'],
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
        };
    },
    computed: {
        fantasmasTable() {
            return [
                { id: 1, ghosts: this.getGhostRow(['Spirit', 'Wraith', 'Phantom']) },
                { id: 2, ghosts: this.getGhostRow(['Poltergeist', 'Banshee', 'Jinn']) },
                { id: 3, ghosts: this.getGhostRow(['Mare', 'Revenant', 'Shade']) },
                { id: 4, ghosts: this.getGhostRow(['Demon', 'Yurei', 'Oni']) },
                { id: 5, ghosts: this.getGhostRow(['Yokai', 'Hantu', 'Goryo']) },
                { id: 6, ghosts: this.getGhostRow(['Myling', 'Onryo', 'The Twins']) },
                { id: 7, ghosts: this.getGhostRow(['Raiju', 'Obake', 'The Mimic']) },
                { id: 8, ghosts: this.getGhostRow(['Moroi', 'Deogen', 'Thaye']) },
            ];
        },
    },
    methods: {
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
        setGhostSeleccionado(id) {
            const element = document.getElementById(id);
            if (element) {
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
                element.style.outline = 'none';
                element.style.textDecoration = 'line-through';
                element.style.textDecorationThickness = '2px';
            }
        },
        setGhostDeseleccionado(id) {
            const element = document.getElementById(id);
            const checkMark = element.querySelector(".cross");
            if (checkMark) {
                checkMark.style.display = "none"; // Oculta el tilde
            }
            if (element) {
                element.style.outline = 'none';
                element.style.textDecoration = 'none';
            }
        },
        setSeleccionado(id) {
            const element = document.getElementById(id);
            if (element) {
                const checkMark = element.querySelector(".cross");
                if (checkMark) {
                    checkMark.style.display = "block"; // Muestra el tilde
                }
            }
        },
        setEliminado(id) {
            const element = document.getElementById(id);
            if (element) {
                const checkMark = element.querySelector(".cross");
                if (checkMark) {
                    checkMark.style.display = "none"; // Oculta el tilde
                }
                element.style.outline = 'none';
                element.style.textDecoration = 'line-through';
                element.style.textDecorationThickness = '2px';
            }
        },
        setDeseleccionado(id) {
            const element = document.getElementById(id);
            const checkMark = element.querySelector(".cross");
            if (checkMark) {
                checkMark.style.display = "none"; // Oculta el tilde
            }
            if (element) {
                element.style.outline = 'none';
                element.style.textDecoration = 'none';
            }
        },
        resetEvidencias() {
            for (const evidencia in this.evidencias) {
                this.evidencias[evidencia] = 'deseleccionado';
                this.setDeseleccionado(evidencia);
            }
            for (const ghost in this.ghostList){
                this.ghostList[ghost] = 'deseleccionado';
                this.setGhostDeseleccionado(ghost);
            }
            this.updateFantasmas();
            this.textoFantasmas = '';
        },
        updateFantasmas() {
            const ghostMappings = {
                emf: ['Spirit', 'Wraith', 'Jinn', 'Shade', 'Oni', 'Goryo', 'Myling', 'The Twins', 'Raiju', 'Obake'],
                sb: ['Spirit', 'Wraith', 'Phantom', 'Poltergeist', 'Mare', 'Yokai', 'Onryo', 'The Twins', 'The Mimic', 'Moroi', 'Deogen'],
                hd: ['Phantom', 'Poltergeist', 'Banshee', 'Jinn', 'Demon', 'Hantu', 'Goryo', 'Myling', 'Obake', 'The Mimic'],
                libro: ['Spirit', 'Poltergeist', 'Mare', 'Revenant', 'Shade', 'Demon', 'Myling', 'Moroi', 'Deogen', 'Thaye'],
                orbes: ['Banshee', 'Mare', 'Revenant', 'Yurei', 'Yokai', 'Hantu', 'Onryo', 'Raiju', 'Obake', 'Thaye'],
                temp: ['Jinn', 'Revenant', 'Shade', 'Demon', 'Yurei', 'Oni', 'Hantu', 'Onryo', 'The Twins', 'The Mimic', 'Moroi'],
                dots: ['Wraith', 'Phantom', 'Banshee', 'Oni', 'Yurei', 'Yokai', 'Goryo', 'Raiju', 'Deogen', 'Thaye'],
            };

            const selectedEvidences = this.evidence.filter(image => this.evidencias[image] === 'seleccionado');
            const eliminatedEvidences = this.evidence.filter(image => this.evidencias[image] === 'eliminado');

            const selectedGhosts = selectedEvidences.reduce((acc, image) => {
                const ghostsForImage = ghostMappings[image];
                return acc.length === 0 ? ghostsForImage : acc.filter(ghost => ghostsForImage.includes(ghost));
            }, []);

            const eliminatedGhosts = eliminatedEvidences.reduce((acc, image) => {
                const ghostsForImage = ghostMappings[image];
                return acc.filter(ghost => !ghostsForImage.includes(ghost));
            }, selectedGhosts);

            this.fantasmas = eliminatedGhosts.map(ghost => ghost.charAt(0).toUpperCase() + ghost.slice(1));

        },
    },
};
</script>

<style>
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

.evidencias-table {
    width: 100%;
    margin: 0 auto 0 auto;
    font-size: 2rem;
    white-space: nowrap;
}

.evidencias-table td {
    border-style: solid;
    border-color: rgba(0, 0, 0, 0);
}

.evidence-name {
    margin: auto;
    width: 50%;
    vertical-align: middle;
    padding: 0;
    border-radius: 10px;
    white-space: nowrap;
}

.evidence-name:hover {
    background-image: url('/recursos/brush.png');
    /* Imagen de pincelada */
    background-size: cover;
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
    top: calc(15% - 10px);
    left: 10px;
}

.btn-maximizar .toggle-btn-size {
    width: 50px;
    height: 50px;
}

.evidences-page {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
}

.evidenceContainer {
    width: 30%;
    min-width: 255px;
    height: 70%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 15%;
    left: 0;
    justify-content: space-evenly;
    background-color: rgb(254, 252, 219);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 10px;
    background-image: url('D:\Proyectos\journal-phasmophobia\public\recursos\fondo-page.jpg');
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
    font-family: 'fuente';
    font-size: large;
    font-weight: normal;
    color: white;
    text-shadow: 2px 1px 5px black;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}

.btn-reset:hover {
    cursor: pointer;
    color: rgb(210, 230, 247);
}

.hideJournal {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.showJournal {
    opacity: 100;
    transition: opacity 0.3s ease;
}

.toggle-btn {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    text-shadow: 1px 1px 5px black;
    z-index: 1;
    margin-left: auto;
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

.tabs {
    display: flex;
    height: 30px;
    width: calc(30% + 20px);
    min-width: 255px;
    position: absolute;
    left: 5px;
    top: calc(15% - 30px);
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

@media (max-width:1919px) {

    .fantasmas-table,
    .evidencias-table {
        font-size: 1rem;
    }
}

@media (max-height:499px) {
    .evidenceContainer {
        min-height: 290px;
    }

    .fantasmas-table td {
        padding: 1px;
    }

}
</style>