<template>
    <div class="cajaEvidencias">
        <span class="fantasma">{{ fantasmas }}</span>
        <div v-for="image in images" :key="image" class="itemEvidencia">
            <img @click="toggleState(image)" :id="image" class="imagen-evidencia" :src="'./recursos/' + image + '.png'"
                alt=""
                :class="{ 'seleccionado': evidencias[image] === 'seleccionado', 'eliminado': evidencias[image] === 'eliminado' }"
                width="50" height="50">
        </div>
        <div class="itemEvidencia">
            <button class="btn-reset" @click="resetEvidencias">Reset</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            fantasmas: '',
            evidencias: {
                dots: 'deseleccionado',
                emf: 'deseleccionado',
                hd: 'deseleccionado',
                libro: 'deseleccionado',
                orbes: 'deseleccionado',
                sb: 'deseleccionado',
                temp: 'deseleccionado',
            },
            maxEvidencias: 3,
            images: [
                'dots',
                'emf',
                'hd',
                'libro',
                'orbes',
                'sb',
                'temp',
            ],
        };
    },
    methods: {
        toggleState(item) {
            const currentState = this.evidencias[item];

            // Contar las evidencias seleccionadas
            const selectedCount = Object.values(this.evidencias).filter(state => state === 'seleccionado').length;

            if (currentState === 'deseleccionado' && selectedCount < this.maxEvidencias) {
                this.evidencias[item] = 'seleccionado';
                this.setStyle(item, "rgba(0,120,255,0.2)", "10px");
                this.updateFantasmas();
            } else if (currentState === 'seleccionado') {
                this.evidencias[item] = 'eliminado';
                this.setStyle(item, "rgba(255,0,0,0.2)", "10px");
                this.updateFantasmas();
            } else if (currentState === 'eliminado') {
                this.evidencias[item] = 'deseleccionado';
                this.setStyle(item, "rgba(0,0,0,0)", "none");
                this.updateFantasmas();
            }
        },
        setStyle(id, backgroundColor, borderRadius) {
            const element = document.getElementById(id);
            if (element) {
                element.style.backgroundColor = backgroundColor;
                element.style.borderRadius = borderRadius;
            }
        },
        resetEvidencias() {
            // Restablecer todas las evidencias a 'deseleccionado'
            for (const image in this.evidencias) {
                this.evidencias[image] = 'deseleccionado';
                this.setStyle(image, "rgba(0,0,0,0)", "none");
            }
            this.updateFantasmas();
        },
        updateFantasmas() {
            // Mapea el nombre del fantasma según los campos seleccionados en evidencias
            const ghostMappings = {
                'emf': ['Espíritu', 'Espectro', 'Jinn', 'Sombra', 'Oni', 'Goryo', 'Myling', 'Gemelos', 'Raiju', 'Obake'],
                'sb': ['Espíritu', 'Espectro', 'Ente', 'Poltergeist', 'Pesadilla', 'Yokai', 'Onryo', 'Gemelos', 'Mímico', 'Moroi', 'Deogen'],
                'hd': ['Ente', 'Poltergeist', 'Banshee', 'Jinn', 'Demonio', 'Hantu', 'Goryo', 'Myling', 'Obake', 'Mímico'],
                'libro': ['Espíritu', 'Poltergeist', 'Pesadilla', 'Revenant', 'Sombra', 'Demonio', 'Myling', 'Moroi', 'Deogen', 'Thaye'],
                'orbes': ['Banshee', 'Pesadilla', 'Revenant', 'Yurei', 'Yokai', 'Hantu', 'Onryo', 'Raiju', 'Obake', 'Thaye'],
                'temp': ['Jinn', 'Revenant', 'Sombra', 'Demonio', 'Yurei', 'Oni', 'Hantu', 'Onryo', 'Gemelos', 'Mímico', 'Moroi'],
                'dots': ['Espectro', 'Ente', 'Banshee', 'Oni', 'Yokai', 'Goryo', 'Raiju', 'Deogen', 'Thaye'],
            };


            const selectedGhosts = this.images.reduce((acc, image) => {
                if (this.evidencias[image] === 'seleccionado') {
                    const ghostsForImage = ghostMappings[image];
                    if (acc.length === 0) {
                        // Si es la primera evidencia seleccionada, agrega todos los fantasmas para esa evidencia
                        return ghostsForImage;
                    } else {
                        // Filtra los fantasmas que no coinciden con la evidencia actual
                        return acc.filter(ghost => ghostsForImage.includes(ghost));
                    }
                }
                return acc;
            }, []);

            // Reemplaza los fantasmas actuales con los nuevos
            this.fantasmas = selectedGhosts.map(ghost => ghost.charAt(0).toUpperCase() + ghost.slice(1)).join(' | ');
        },

    },
};
</script>
  
<style>
.fantasma {
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    top: -50%;
    font-size: larger;
    font-weight: bold;
    text-align: center;
}

.cajaEvidencias {
    width: 100vw;
    height: 80px;
    position: absolute;
    top: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.itemEvidencia {
    display: inline;
    height: 70px;
    width: 70px;
    margin: auto 5px auto 5px;

}

.imagen-evidencia {
    padding: 5px;
    margin: 0 10px;
}

.imagen-evidencia:hover {
    cursor: pointer;
    width: 60px;
    height: 60px;
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
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
    border: none;
    font-weight: bold;
    padding: 15px;
}

.btn-reset:hover {
    cursor: pointer;
    background-color: lightgrey;
}
</style>
  