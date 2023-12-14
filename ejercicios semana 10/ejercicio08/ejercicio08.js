'use strict'
// Desarrollar un programa que genere la asignación de
// letras para las filas de computadoras en un laboratorio. 
// Se debe tener en cuenta que la codificación sigue el formato LAB2#A, 
// donde indica la fila A del laboratorio 2
// Entrada: LAB2#B
// Salida: C


let fila = "LAB2#B"; 
let letra = fila.substring(5);

alert(letra.codePointAt(0));
alert(String.fromCodePoint(67));


  