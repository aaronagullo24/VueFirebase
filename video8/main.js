const wm1 = new Vue({
    el: 'main',
    data: {
        mensaje: ' intancias vue'
    },
    beforeUpdate(){
        console.log(this.mensaje);
    },
    update(){
        console.log(this.mensaje);
    },
    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
        }
    },
    computed: {
        mensajeenMayuscular() {
            return this.mensaje.toUpperCase();
        }
    }
});


const wm2 = new Vue({
    el: '#app',
    data: {
        mensaje: 'instancia dos'
    }
});