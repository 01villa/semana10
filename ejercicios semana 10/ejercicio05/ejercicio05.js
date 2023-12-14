'use strict'
// Escribir un programa para obtener el nombre de usuario
//  de un correo electrónico.
// #Ejemplo
// Entrada: nombredeuser@magbdigital.net
// salida: nombredeuser



let user= "ruben@magbdigital.net"
let end= user.indexOf('@');
alert(user.slice(0,end))