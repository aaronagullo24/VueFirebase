new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes', 'marter', 'miercoles', 'jueves', 'viernes'],
        tareas: [
            { nombre: "Hacer la compra", prioridad: 'baja' },
            { nombre: "aprender Vue y firebase", prioridad: 'alta' },
            { nombre: 'ir al gym', prioridad: 'alta' }
        ],
        persona: {
            nombre: 'aaron',
            profesion: 'developer',
            ciudad: 'valencia'
        }
    }
});