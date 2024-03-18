<template>
    <div>
        <button class="toggle-btn" @click="toggleBotones">
            <img v-if="botonesMinimizados" class="toggle-btn-size" src="/recursos/libro.png" alt="Minimizar">
            <img v-else class="toggle-btn-size" src="/recursos/close.png" alt="Maximizar">
        </button>
        <div class="cajaEvidencias" :class="{ 'minimizado': botonesMinimizados, 'maximizado': !botonesMinimizados }">
            <div class="titulo-pruebas">Evidences</div>
            <hr>
            <span v-if="fantasmas" class="fantasma"></span>
            <span v-else class="fantasma">{{ textoFantasmas }}</span>
            <table class="evidencias-table">
                <tr>
                    <td @click="toggleState(images[0])" class="nombre-evidencia" id="emf">EMF Level 5</td>
                    <td @click="toggleState(images[1])" class="nombre-evidencia" id="dots">D.O.T.S Projector</td>
                </tr>
                <tr>
                    <td @click="toggleState(images[2])" class="nombre-evidencia" id="hd">Fingerprints</td>
                    <td @click="toggleState(images[3])" class="nombre-evidencia" id="orbes">Ghost Orb</td>
                </tr>
                <tr>
                    <td @click="toggleState(images[4])" class="nombre-evidencia" id="libro">Ghost Writing</td>
                    <td @click="toggleState(images[5])" class="nombre-evidencia" id="sb">Spirit Box</td>
                </tr>
                <tr>
                    <td @click="toggleState(images[6])" class="nombre-evidencia" id="temp">Freezing Temperatures</td>
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
            <div>
                <button class="btn-reset" @click="resetEvidencias">Reset</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fantasmasTable: [
                { id: 1, ghosts: ['Spirit', 'Spectre', 'Phantom'] },
                { id: 2, ghosts: ['Poltergeist', 'Banshee', 'Jinn'] },
                { id: 3, ghosts: ['Mare', 'Revenant', 'Shade'] },
                { id: 4, ghosts: ['Demon', 'Yurei', 'Oni'] },
                { id: 5, ghosts: ['Yokai', 'Hantu', 'Goryo'] },
                { id: 6, ghosts: ['Myling', 'Onryo', 'The Twins'] },
                { id: 7, ghosts: ['Raiju', 'Obake', 'Mimic'] },
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
            images: ['emf', 'dots', 'hd', 'orbes', 'libro', 'sb', 'temp'],
            fantasmasNombre: ['Spirit', 'Spectre', 'Phantom', 'Poltergeist', 'Banshee', 'Jinn', 'Mare', 'Revenant', 'Shade', 'Demon', 'Yurei', 'Oni', 'Yokai', 'Hantu', 'Goryo', 'Myling', 'Onryo', 'The Twins', 'Raiju', 'Obake', 'Mimic', 'Moroi', 'Deogen', 'Thaye'],
            hoveredIndex: null,
        };
    },
    computed: {
        fantasmasTable() {
            return [
                { id: 1, ghosts: this.getGhostRow(['Spirit', 'Spectre', 'Phantom']) },
                { id: 2, ghosts: this.getGhostRow(['Poltergeist', 'Banshee', 'Jinn']) },
                { id: 3, ghosts: this.getGhostRow(['Mare', 'Revenant', 'Shade']) },
                { id: 4, ghosts: this.getGhostRow(['Demon', 'Yurei', 'Oni']) },
                { id: 5, ghosts: this.getGhostRow(['Yokai', 'Hantu', 'Goryo']) },
                { id: 6, ghosts: this.getGhostRow(['Myling', 'Onryo', 'The Twins']) },
                { id: 7, ghosts: this.getGhostRow(['Raiju', 'Obake', 'Mimic']) },
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
        setSeleccionado(id){
            const element = document.getElementById(id);
            if (element) {
                element.style.borderStyle = 'solid';
                element.style.borderRadius = '10px';
                element.style.borderColor = 'black';
            }
        },
        setEliminado(id){
            const element = document.getElementById(id);
            if (element) {
                element.style.borderColor = 'rgba(0,0,0,0)';
                element.style.textDecoration = 'line-through';
            }
        },
        setDeseleccionado(id){
            const element = document.getElementById(id);
            if (element) {
                element.style.borderColor = 'rgba(0,0,0,0)';
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
                emf: ['Spirit', 'Spectre', 'Jinn', 'Shade', 'Oni', 'Goryo', 'Myling', 'The Twins', 'Raiju', 'Obake'],
                sb: ['Spirit', 'Spectre', 'Phantom', 'Poltergeist', 'Mare', 'Yokai', 'Onryo', 'The Twins', 'Mimic', 'Moroi', 'Deogen'],
                hd: ['Phantom', 'Poltergeist', 'Banshee', 'Jinn', 'Demon', 'Hantu', 'Goryo', 'Myling', 'Obake', 'Mimic'],
                libro: ['Spirit', 'Poltergeist', 'Mare', 'Revenant', 'Shade', 'Demon', 'Myling', 'Moroi', 'Deogen', 'Thaye'],
                orbes: ['Banshee', 'Mare', 'Revenant', 'Yurei', 'Yokai', 'Hantu', 'Onryo', 'Raiju', 'Obake', 'Thaye'],
                temp: ['Jinn', 'Revenant', 'Shade', 'Demon', 'Yurei', 'Oni', 'Hantu', 'Onryo', 'The Twins', 'Mimic', 'Moroi'],
                dots: ['Spectre', 'Phantom', 'Banshee', 'Oni', 'Yurei', 'Yokai', 'Goryo', 'Raiju', 'Deogen', 'Thaye'],
            };

            const selectedEvidences = this.images.filter(image => this.evidencias[image] === 'seleccionado');
            const eliminatedEvidences = this.images.filter(image => this.evidencias[image] === 'eliminado');

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

body{
    font-family: 'fuente';
    user-select: none;
}
.fantasmas-table {
    text-align: center;
    width: 100%;
    font-size:3vh;
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
    font-size: 20px;
}

.evidencias-table td {
    border-style: solid;
    border-color: rgba(0,0,0,0);
}


.nombre-evidencia:hover {
    cursor: pointer;
}

.titulo-pruebas {
    font-size:6vh;
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


.cajaEvidencias {
    width: 30vw;
    position: absolute;
    top: 10%;
    left: 60%;
    justify-content: center;
    align-items: center;
    background-color: rgb(254,252,219);
        border-radius: 50px;
    padding: 10px;
    background-image: url('C:\Proyectos\journal-phasmophobia-en\public\recursos\fondo-page.jpg');
    background-size: contain;
}

hr{
    color: black;
    border-style: solid;
    margin-top: 0;
    margin-bottom: 0;
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
    font-size:4vh;
    color:white;
    text-shadow: 2px 1px 5px black;
    border:none;
    background-color:rgba(0,0,0,0);
    width: 100%;
    margin-top:10px;
}

.btn-reset:hover {
    cursor: pointer;
    color:rgb(210, 230, 247);
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
    position: absolute;
    top: 8%;
    left: 82%;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0);
    margin-left: 15px;
    color: white;
    text-shadow: 1px 1px 5px black;
    z-index: 1;
}

.toggle-btn:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
}

.toggle-btn-size {
    height: 40px;
    width: 40px;
}
.testLetra{
    border-width: 3px;
    border-radius: 10px;
    border-color:black;
    border-style: solid;
}
</style>