<template>
    <div class="whole" @mouseenter="showBtn" @mouseleave="hideBtn">
        <div class="showJournal">
            <div class="journalInner" :style="{ display: journalHidden ? 'none' : 'block' }">
                <div class="tabs">
                    <button @click="selectedPage = 'Evidences'" class="tab-item"
                        :class="{ 'tab-item-active': selectedPage === 'Evidences' }">
                        {{ texts.tabs.evidences }}
                    </button>
                    <button @click="selectedPage = 'Ghosts'" class="tab-item"
                        :class="{ 'tab-item-active': selectedPage === 'Ghosts' }">
                        {{ texts.tabs.ghosts }}
                    </button>
                    <button class="tab-item ml-2 flag" @click="changeLanguage">
                        <img v-if="currentLang === 'en'" src="/recursos/flags/gb.png" alt="English" class="flag-img" />
                        <img v-else-if="currentLang === 'es'" src="/recursos/flags/es.png" alt="Español"
                            class="flag-img" />
                        <img v-else-if="currentLang === 'fr'" src="/recursos/flags/fr.png" alt="Français" class="flag-img" />
                        <img v-else src="/recursos/flags/de.png" alt="Deutsch" class="flag-img" />
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
                                        {{ texts.evidences.emf }}
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
                                        {{ texts.evidences.dots }}
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
                                        {{ texts.evidences.fingerprints }}
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
                                        {{ texts.evidences.orbs }}
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
                                        {{ texts.evidences.writing }}
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
                                        {{ texts.evidences.spiritbox }}
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
                                        {{ texts.evidences.freezing }}
                                    </div>
                                    <div class="strike-line"></div> <!-- Línea horizontal -->
                                </div>
                            </div>
                        </div>
                        <hr>
                        <table class="fantasmas-table">
                            <tr v-for="row in fantasmasTable" :key="row.id">
                                <td v-for="(ghost, index) in row.ghosts" :key="index">
                                    <div :id="'f' + (3 * (row.id - 1) + index)" style="opacity:0.3;"
                                        :class="{ 'ghost-name': true, 'fantasma-seleccionado': isGhostSelected(ghost), 'init': init }"
                                        @click="toggleStateGhost(3 * (row.id - 1) + index)">
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
                            <button class="btn-reset" @click="resetEvidencias">{{ texts.reset }}</button>
                        </div>
                    </div>
                    <div v-show="selectedPage == 'Ghosts'" class="ghosts-page">
                        <hr>
                        <div class="ghosts-list">
                            <tr v-for="row in fantasmasTable" :key="row.id" class="w-100">
                                <td class="w-30" v-for="(ghost, index) in row.ghosts" :key="index">
                                    <div class="ghost-name text-center"
                                        :class="{ 'ghost-selected': selectedGhost?.id == (3 * (row.id - 1) + index + 1) }"
                                        @click="showInfo(3 * (row.id - 1) + index + 1)">
                                        {{ ghost }}
                                    </div>
                                </td>
                            </tr>
                        </div>
                        <hr>
                        <div class="ghosts-info" v-if="selectedGhost != null">
                            <div class="ghost-description" v-if="selectedGhost != null">{{ selectedGhost.description }}
                            </div>
                            <div class="ghost-strength mt-2"><strong>{{ texts.strength }}: </strong>{{
                                selectedGhost.strength }}
                            </div>
                            <div class="ghost-weakness mt-2"><strong>{{ texts.weakness }}: </strong>{{
                                selectedGhost.weakness }}
                            </div>
                            <div class="ghost-evidences mt-2"><strong>{{ texts.evidencesLabel }}: </strong>{{
                                selectedGhost.evidences }}
                            </div>
                        </div>
                        <div v-else class="text-center">{{ texts.selectGhost }}</div>
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
import { ghostMappings, ghostsInfo, languageOrder, uiTranslations } from '../data/ghostData';

export default {
    data() {
        return {
            selectedGhost: null,
            currentLang: 'en',
            ghostsInfo,
            selectedPage: 'Evidences',

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
            ghostNames: ghostsInfo.en.map((ghost) => ghost.ghostName),
            ghostList: Array(ghostsInfo.en.length).fill('deseleccionado'),
            init: true,
            ghostMappings,
        };
    },
    computed: {
        texts() {
            return uiTranslations[this.currentLang] || uiTranslations.en;
        },
        ghostsInfoLang() {
            return this.ghostsInfo[this.currentLang];
        },
        ghostNamesLang() {
            // Devuelve solo los nombres traducidos de los fantasmas
            return this.ghostsInfoLang.map(g => g.ghostName);
        },
        fantasmasTable() {
            // Genera la tabla de fantasmas con nombres traducidos
            const names = this.ghostNamesLang;
            const rows = [];
            for (let i = 0; i < names.length; i += 3) {
                rows.push({ id: i / 3 + 1, ghosts: names.slice(i, i + 3) });
            }
            return rows;
        }
    },
    created() {
        this.resetGhostList();
    },
    watch: {
        currentLang() {
            this.resetGhostList();
            this.selectedGhost = null;
        }
    },
    methods: {
        resetGhostList() {
            this.ghostList = Array(this.ghostNamesLang.length).fill('deseleccionado');
            this.fantasmas = '';
            this.evidencias.fill('deseleccionado');
            this.journalHidden = false;
            this.init = true;
        },
        changeLanguage() {
            const index = languageOrder.indexOf(this.currentLang);
            this.currentLang = languageOrder[(index + 1) % languageOrder.length];
            this.resetGhostList();
            this.resetEvidencias();
        },
        showInfo(id) {
            this.selectedGhost = this.ghostsInfo[this.currentLang].find(g => g.id === id);
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
            // Quitar selección previa
            this.ghostList.forEach((estado, idx) => {
                if (estado === 'seleccionado' && idx !== id) {
                    this.ghostList[idx] = 'deseleccionado';
                    this.setGhostDeseleccionado(idx);
                }
            });

            // Seleccionar el nuevo fantasma
            this.ghostList[id] = 'seleccionado';
            const element = document.getElementById('f' + id);
            if (element) {
                const checkMark = element.querySelector(".cross");
                const strikeLine = element.querySelector(".strike-line");
                if (checkMark) checkMark.style.display = "block"; // Muestra el tilde
                if (strikeLine) strikeLine.style.display = "none"; // Oculta la línea
                element.style.outline = 'solid';
                element.style.outlineOffset = '-1px';
                element.style.outlineWidth = '2px';
                element.style.outlineColor = 'black';
                element.style.borderRadius = '999px';
            }
        },
        setGhostEliminado(id) {
            const element = document.getElementById('f' + id);
            if (element) {
                element.style.textDecoration = 'line-through';
                element.style.textDecorationThickness = '2px';
                element.style.outline = 'none';
            }
        },
        setGhostDeseleccionado(id) {
            const element = document.getElementById('f' + id);
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
                }
            }
            this.fantasmas = selectedGhosts;
        },
    },
};
</script>

<style>
.journalInner {
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
    width: 100%;
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

.flag-img {
    height: 12px;
    width: 12px;
    object-fit: fill;
    vertical-align: middle;
    margin-top: -2px;
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
    width: auto;
    text-overflow: ellipsis;
    overflow: hidden;
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
    overflow: hidden;
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
    min-height: 350px;
    display: flex;
    flex-direction: column;
    background-color: rgb(254, 252, 219);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 10px;
    background-image: url('C:\Proyectos\journal-phasmophobia-en\public\recursos\fondo-page.jpg');
    /* background-image: url('D:\Proyectos\journal-phasmophobia\public\recursos\fondo-page.jpg'); */
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
    margin: auto;
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
    max-width: 330px;
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

.flag {
    width: 10%;
    margin-left: auto;
}

.fantasmas-table,
.evidences-table,
.ghosts-list {
    font-size: 1.2rem;
}


@media (max-height:499px) {

    .fantasmas-table,
    .evidences-table,
    .ghosts-list {
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