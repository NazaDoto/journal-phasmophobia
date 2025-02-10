<template>
    <div>
        <button class="toggle-btn btn-maximizar" @click="toggleBotones">
            <img v-if="botonesMinimizados" class="toggle-btn-size" src="/recursos/logo.png" alt="Minimizar">
        </button>
        <div :class="{ 'minimizado': botonesMinimizados, 'maximizado': !botonesMinimizados }">
            <div class="tabs">
                <button class="tab-item"
                    :class="paginaSeleccionada == 'Evidences' ? 'tab-item-active' : ''">Evidences</button>
                <button class="tab-item">Ghosts</button>
                <button class="toggle-btn" @click="toggleBotones">
                    <img class="toggle-btn-size" src="/recursos/close.png" alt="Maximizar">
                </button>
            </div>
            <div class="cajaEvidencias">
                <hr>
                <span v-if="fantasmas" class="fantasma"></span>
                <span v-else class="fantasma">{{ textoFantasmas }}</span>
                <table class="evidencias-table">
                    <tr>
                        <td @click="toggleState(evidence[0])" class="nombre-evidencia" id="emf">EMF Level 5</td>
                        <td @click="toggleState(evidence[1])" class="nombre-evidencia" id="dots">D.O.T.S Projector</td>
                    </tr>
                    <tr>
                        <td @click="toggleState(evidence[2])" class="nombre-evidencia" id="hd">Fingerprints</td>
                        <td @click="toggleState(evidence[3])" class="nombre-evidencia" id="orbes">Ghost Orb</td>
                    </tr>
                    <tr>
                        <td @click="toggleState(evidence[4])" class="nombre-evidencia" id="libro">Ghost Writing</td>
                        <td @click="toggleState(evidence[5])" class="nombre-evidencia" id="sb">Spirit Box</td>
                    </tr>
                    <tr>
                        <td @click="toggleState(evidence[6])" class="nombre-evidencia" id="temp">Freezing Temperatures
                        </td>
                    </tr>
                    <tr>
                    </tr>
                </table>
                <hr>
                <table class="fantasmas-table">
                    <tr v-for="row in fantasmasTable" :key="row.id">
                        <td v-for="ghost in row.ghosts" :key="ghost.id">
                            <div :class="{ 'fantasma-nombre': true, 'fantasma-seleccionado': isGhostSelected(ghost.name) }">
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            paginaSeleccionada: 'Evidences',
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
            textoFantasmas: '',
            fantasmas: '',
            botonesMinimizados: false,
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
            fantasmasNombre: ['Spirit', 'Wraith', 'Phantom', 'Poltergeist', 'Banshee', 'Jinn', 'Mare', 'Revenant', 'Shade', 'Demon', 'Yurei', 'Oni', 'Yokai', 'Hantu', 'Goryo', 'Myling', 'Onryo', 'The Twins', 'Raiju', 'Obake', 'The Mimic', 'Moroi', 'Deogen', 'Thaye'],
            hoveredIndex: null,
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
        toggleBotones() {
            this.botonesMinimizados = !this.botonesMinimizados;
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
        setSeleccionado(id) {
            const element = document.getElementById(id);
            if (element) {
                element.style.outlineStyle = 'solid';
                element.style.outlineWidth = '2px';
                element.style.outlineColor = 'black';
                element.style.outlineOffset = '-2px';
                element.style.borderRadius = '10px';
            }
        },
        setEliminado(id) {
            const element = document.getElementById(id);
            if (element) {
                element.style.outline = 'none';
                element.style.textDecoration = 'line-through';
            }
        },
        setDeseleccionado(id) {
            const element = document.getElementById(id);
            if (element) {
                element.style.outline = 'none';
                element.style.textDecoration = 'none';
            }
        },
        resetEvidencias() {
            for (const image in this.evidencias) {
                this.evidencias[image] = 'deseleccionado';
                this.setDeseleccionado(image);
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

            if (this.fantasmas === '') {
                this.textoFantasmas = 'Ningún fantasma cuenta con estas evidencias.';
            }
        },
    },
};
</script>

<style>
body {
    font-family: 'fuente';
    user-select: none;
}

.fantasmas-table {
    text-align: center;
    width: 100%;
}

.fantasmas-table td {
    padding: 5px;
    margin: auto;
}

.fantasma-nombre {
    opacity: 0.5;
    /* Opacidad predeterminada */
}

.fantasma-nombre.fantasma-seleccionado {
    font-weight: bold;
    /* FuPhantom en negrita si está seleccionado */
    opacity: 1;

    /* Restablecer la opacidad si está seleccionado */
}

.evidencias-table {
    text-align: center;
    width: 100%;
    margin: 0 auto 0 auto;
    font-size: 2rem;
    white-space: nowrap;
}

.evidencias-table td {
    border-style: solid;
    border-color: rgba(0, 0, 0, 0);
}

.nombre-evidencia {
    margin: auto;
    vertical-align: middle;
    padding: 0;
}

.nombre-evidencia:hover {
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
    top: 16%;
    left: 10px;
}

.btn-maximizar .toggle-btn-size {
    width: 50px;
    height: 50px;
}

.cajaEvidencias {
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 255px;
    height: 70%;
    position: absolute;
    top: 15%;
    left: 0;
    justify-content: space-evenly;
    background-color: rgb(254, 252, 219);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 10px 10px 10px;
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

.seleccionado {
    border: 2px solid green;
    /* Cambiar a tus estilos deseados */
}

.eliminado {
    border: 2px solid red;
    /* Cambiar a tus estilos deseados */
}

.btn-reset {
    font-family: 'fuente';
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

.minimizado {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.maximizado {
    opacity: 100;
    transition: opacity 0.3s ease;
}

.toggle-btn {
    border: none;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    text-shadow: 1px 1px 5px black;
    z-index: 1;
    margin-left:auto;
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
    display:flex;
    height: 30px;
    width:calc(30% + 20px);
    min-width: 255px;
    position:absolute;
    left: 5px;
    top:calc(15% - 30px);
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
    .cajaEvidencias {
        min-height: 290px;
    }

    .fantasmas-table td {
        padding: 0;
    }

    .evidencias-table tr {
        display: flex;
        justify-content: space-evenly;
    }
}
</style>