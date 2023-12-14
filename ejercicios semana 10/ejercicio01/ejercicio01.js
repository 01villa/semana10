'use strict'
// Escribir un programa que extraiga las parte 
// numérica de una placa de un auto.
// Ejemplo:
// placa=”ABC-2030”
// salida: 2030
let placa = "ABC-2030";
let start = placa.indexOf('-');

alert(placa.slice (start +1));
