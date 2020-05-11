new Vue({
    el: 'main',
    data: {
        mensaje: 'hola mundo',
        nuevaTarea: null,
        tareas: [{
            titulo: "aprender vue",
            prioridad: false,
            antiguedad: 23
        },
        {
            titulo: "vue",
            prioridad: true,
            antiguedad: 123
        },
        {
            titulo: "gym",
            prioridad: true,
            antiguedad: 223
        },
        ]
    },
    method: {
        agregarTarea() {
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0
            });
            this.nuevaTarea = null;
        }
    },
    computed: {
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join(``);
        },
        tareasConPrioridad() {
            return this.tareas.filter(function (tarea) {
                return tarea.prioridad;
            })
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a,b)=>b.antiguedad - a.antiguedad)
        }
    }
});