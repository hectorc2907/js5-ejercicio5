let tiempo; // Variable para el temporizador
let hora = 0; // Hora inicial
let minutos = 0; // Minuto inicial
let segundos = 0; // Segundo inicial

function iniciar() {
  cronometro = setInterval(runTimer, 1000);
}

function pausar() {
  clearInterval(cronometro);
}

function reiniciar() {
  clearInterval(tiempo);
  hora = 0;
  minutos = 0;
  segundos = 0;
  document.getElementById('cronometro').innerHTML = '00:00:00';
}

function runTimer() {
  segundos++;
  if (segundos == 60) {
    minutos++;
    segundos = 0;
  }
  if (minutos == 60) {
    hora++;
    minutos = 0;
  }
  let h = hora < 10 ? "0" + hora : hora;
  let m = minutos < 10 ? "0" + minutos : minutos;
  let s = segundos < 10 ? "0" + segundos : segundos;
  document.getElementById('cronometro').innerHTML = h + ":" + m + ":" + s;
}