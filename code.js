var timeout;
function changeText() {
  var elem = document.getElementById("accion");

  var date = new Date();
  var horas = date.getHours();
  var minutos = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

  elem.innerHTML = horas + ":" + minutos + " Almuerzo";

  clearTimeout(timeout);
  timeout = setTimeout(function() {
    elem.innerHTML = "";
  }, 3000);
}
