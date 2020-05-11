const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'aprender Vue',
            'Aprender JS',
            'Publicar algo'
        ]
    },
    methods: {
        agregarTareas() {
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null
        }
    }
});
/*
function agregarTareas() {
    const input = document.querySelector('input[type=text]');
    vm.tareas.unshift(input.value);
    input.value = '';
}
*/