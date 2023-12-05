<template>
    <div class="cajaEvidencias">
        <span v-if="fantasmas" class="fantasma">{{ fantasmas }}</span>
        <span v-else class="fantasma">{{ textoFantasmas }}</span>
        <div v-for="image in images" :key="image" class="itemEvidencia">
            <img @click="toggleState(image)" :id="image" class="imagen-evidencia" :src="'./recursos/' + image + '.png'"
                @mouseover="showName(image)" @mouseleave="hideName(image)" alt=""
                :class="{ 'seleccionado': evidencias[image] === 'seleccionado', 'eliminado': evidencias[image] === 'eliminado' }"
                width="50" height="50">
            <span v-if="hoveredIndex === image" class="imagen-name">{{ getImageName(image) }}</span>

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
            textoFantasmas: '',
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
            imageNames: {
                dots: 'DOTS',
                emf: 'EMF 5',
                hd: 'Ultravioleta',
                libro: 'Escritura fantasmal',
                orbes: 'Orbes fantasmales',
                sb: 'Spirit Box',
                temp: 'Temperaturas heladas',
            },
            hoveredIndex: null,
        };
    },
    methods: {
        showName(index) {
            this.hoveredIndex = index;
        },
        hideName(index) {
            this.hoveredIndex = null;
        },
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
            this.textoFantasmas = '';
        },
        updateFantasmas() {
            // Mapea el nombre del fantasma según los campos seleccionados en evidencias
            const ghostMappings = {
                'emf': ['Espíritu', 'Espectro', 'Jinn', 'Sombra', 'Oni', 'Goryo', 'Myling', 'Gemelos', 'Raiju', 'Obake'],
                'sb': ['Espíritu', 'Espectro', 'Ente', 'Poltergeist', 'Pesadilla', 'Yokai', 'Onryo', 'Gemelos', 'Mímico', 'Moroi', 'Deogen'],
                'hd': ['Ente', 'Poltergeist', 'Banshee', 'Jinn', 'Demonio', 'Hantu', 'Goryo', 'Myling', 'Obake', 'Mímico'],
                'libro': ['Espíritu', 'Poltergeist', 'Pesadilla', 'Revenant', 'Sombra', 'Demonio', 'Myling', 'Moroi', 'Deogen', 'Thaye'],
                'orbes': ['Banshee', 'Pesadilla', 'Revenant', 'Yurei', 'Yokai', 'Hantu', 'Onryo', 'Raiju', 'Obake', 'Thaye'],
                'temp': ['Jinn', 'Revenant', 'Sombra', 'Demonio', 'Yurei', 'Oni', 'Hantu', 'Onryo', 'Gemelos', 'Mímico'],
                'dots': ['Espectro', 'Ente', 'Banshee', 'Oni', 'Yurei', 'Yokai', 'Goryo', 'Raiju', 'Deogen', 'Thaye'],
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
                } else if (this.evidencias[image] === 'eliminado') {
                    // Eliminar fantasmas asociados con esta evidencia eliminada
                    const ghostsForImage = ghostMappings[image];
                    return acc.filter(ghost => !ghostsForImage.includes(ghost));
                }
                return acc;
            }, []);

            // Reemplaza los fantasmas actuales con los nuevos
            this.fantasmas = selectedGhosts.map(ghost => ghost.charAt(0).toUpperCase() + ghost.slice(1)).join(' | ');
            if (this.fantasmas == '') {
                this.textoFantasmas = 'Ningún fantasma cuenta con estas evidencias.';
            }
        },
        getImageName(image) {
            return this.imageNames[image] || 'Nombre Desconocido';
        },

    },
};
</script>
  
<style>
.fantasma {
    padding-left: 10px;
    padding-right: 10px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    top: -70%;
    font-size: larger;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
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

.imagen {
    position: relative;
    display: inline-block;
    margin: 10px;
}

.imagen-name {
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    padding: 15px;
    background-color: gray;
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px;
    border-radius: 3px;
    font-size: 14px;
    z-index: 999;
    display: none;
}

.imagen-evidencia:hover+.imagen-name {
    display: block;
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
    border-radius: 20px;
    font-weight: bold;
    padding: 15px;
    background-color: gray;
}

.btn-reset:hover {
    cursor: pointer;
    background-color: lightgray;
}
</style>
  