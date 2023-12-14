'use strict'

// Escribir un programa que obtenga el mes de la siguiente 
// fecha: “2022-10-31”
// #Ejemplo:
// codigo: "2022-10-31"
// salida: 10


let fecha = "2022-10";

let start = fecha.lastIndexOf('-');

alert (fecha.slice (start +1))
