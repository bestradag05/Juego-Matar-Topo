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
    Swal.fire({
        title: '¡ Bien Echo !',
        html: `<b>Puntos: ${puntos}</b><br><br>
        <p>¿ Deseas reiniciar el juego ?</p>`,
        icon: `warning`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, reiniciar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Juego Reiniciado!',
            'Consigue tu mejor Score !',
            'success'
          ).then((result) => {
                clearInterval(intervalorTopo);
                clearInterval(intervalorTiempo);
            
            if (result.isConfirmed) {
                
                mostrarTopo();
                intervalorTopo = setInterval(mostrarTopo, 2000);
                intervalorTiempo = setInterval(actualizarTiempo, 1000);
    
                document.getElementById('tiempo').innerHTML = 15;
                document.getElementById("puntaje").innerHTML = 0;
                puntos = 0;
                valorTiempo = 15;
            }
            });
          
        }
      })

}


function finalizarJuego(){
    Swal.fire({
        title: '¡ Bien Echo !',
        html: `<b>Puntos: ${puntos}</b><br><br>
        <p>Tiempo finalizado, si deseas volver a jugar cierra esta ventanda y <b>¡ Diviertete !</b></p>`,
        icon: `success`,
      });

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
