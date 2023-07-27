let agujeros = document.querySelectorAll(".agujero");
let puntos = 0;
let valorTiempo = document.getElementById('tiempo').innerHTML;
let intervalorTiempo;
let intervalorTopo;


function iniciarJuego() {

    mostrarTopo();
    intervalorTopo = setInterval(mostrarTopo, 2000);
    intervalorTiempo = setInterval(actualizarTiempo, 1000);
    puntos = 0;
    valorTiempo = 15;
}

function reiniciarJuego()
{
    finalizarJuego();
    mostrarTopo();
    intervalorTopo = setInterval(mostrarTopo, 2000);
    intervalorTiempo = setInterval(actualizarTiempo, 1000);
    document.getElementById('tiempo').innerHTML = 15;
    document.getElementById("puntaje").innerHTML = 0;
    puntos = 0;
    valorTiempo = 15;
}


function finalizarJuego(){
    clearInterval(intervalorTopo);
    clearInterval(intervalorTiempo);
}

function mostrarTopo() {
    let indexAleatorio = Math.floor(Math.random() * (12 - 0) + 0);
    agujeros[indexAleatorio].parentElement.className += ' activo ';
    setTimeout(() => {
        agujeros[indexAleatorio].parentElement.classList.remove('activo');
    }, 1000);
}

function matarTopo(e) {

    if (e.classList.contains('activo')) {
        puntos += 1;
        actualizarPuntaje(puntos);
    }
}


function actualizarPuntaje(puntos) {
    let puntaje = document.getElementById("puntaje");
    puntaje.innerHTML = puntos;
}


function actualizarTiempo() {
    valorTiempo--;
    document.getElementById('tiempo').innerHTML = valorTiempo;

    if (valorTiempo == 0) {
        finalizarJuego();
        
    }
}


