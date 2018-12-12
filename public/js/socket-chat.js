var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', function() {
    socket.emit('entrarChat', usuario, function(resp) {
        console.log('Usuarios conectados', resp);
    });

});

socket.on('crearMensaje', function(mensaje) {
    console.log(mensaje);
});


// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


socket.on("listaPersona", function(personas) {
    console.log('Personas conectadas', personas);
});


// socket.emit('crearMensaje',{usuario:'Jorge',mensaje: 'Hola mundo'},function(resp){
//     console.log("Respuesta server : ",resp);
// });


socket.on('mensajePrivado', function(mensaje) {
    console.log("mensajePrivado", mensaje);
});