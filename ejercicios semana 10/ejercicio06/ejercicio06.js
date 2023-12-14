'use strcit'
// Escribir un programa que obtenga el nombre de usuario 
// de facebook desde la url.
// #Ejemplo
// Entrada: facebook.com/nombreuser
// Salida: nombreuser


let user= "facebook.com/rubenvilla"
let start= user.indexOf('/');
alert(user.slice(start+1))