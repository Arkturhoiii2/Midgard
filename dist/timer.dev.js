"use strict";

function odswiezanie() {
  var dzisiaj = new Date();
  var dzien = dzisiaj.getDate();
  var miesiac = dzisiaj.getMonth() + 1;
  var rok = dzisiaj.getFullYear();
  var godzina = dzisiaj.getHours();
  if (godzina < 10) godzina = "0" + godzina;
  var minuta = dzisiaj.getMinutes();
  if (minuta < 10) minuta = "0" + minuta;
  var sekunda = dzisiaj.getSeconds();
  if (sekunda < 10) sekunda = "0" + sekunda;
  document.getElementById("zegarek").innerHTML = dzien + "/" + miesiac + "/" + rok + "|" + godzina + ":" + minuta + ":" + sekunda;
  setTimeout("odswiezanie()", 1000);
}