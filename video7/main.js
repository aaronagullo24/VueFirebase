Vue.filter('alReves',function(valor){
    return valor.split('').reverse().join('');
});


new Vue({
    el: 'main',
    data: {
        minimo: 5,
        busqueda: '',
        juegos: [{
            titulo: "Fifa",
            genero: 'deporta',
            puntuacion: 5
        },
        {
            titulo: "Batlefield",
            genero: 'FPS',
            puntuacion: 9
        },
        {
            titulo: "Civilation",
            genero: 'Estrategia',
            puntuacion: 7
        },
        ]
    },
    computed: {
        mejoresJuegos() {
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);

        },
        buscarJuego() {
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
    }

});