const wm1 = new Vue({
    el: 'main',
    data: {
        tareas: [
            { titulo: 'hacer la compra', completado: false },
            { titulo: 'aprender vue', completado: false },
            { titulo: 'aprender firebase', completado: false },
            { titulo: 'dominar JS', completado: false },
        ]
    },
    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        }
    },
    computed:{
        tareasCompletadas(){
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }

});


