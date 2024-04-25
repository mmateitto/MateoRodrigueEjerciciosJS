//Ejercicio 1
let num1 = prompt("numero 1 aqui");
let num2 = prompt("numero 2 aqui");

if (num1 > num2) {
    console.log("el primer numero es mayor que el segundo");
}

//Ejercicio 2
if (num1 === num2) {
    console.log("son iguales");
} else {
    console.log("son diferentes");
}

//Ejercicio 3
if (num1 > num2) {
    console.log(num1);
} else if (num1 === num2) {
    console.log("son iguales");
} else {
    console.log(num2);
}

//Ejercicio 4
let num3 = prompt("numero 3 aqui");
let masChico = num1;

if (masChico > num2) {
    masChico = num2
}

if (masChico > num3) {
    masChico = num3;
}

console.log(masChico);

//Ejerecicio 5
let persona1 = {
    nombre: "persona1",
    edad: prompt("edad persona 1"),
    altura: prompt("altura persona 1"),
}

let persona2 = {
    nombre: "persona2",
    edad: prompt("edad persona 2"),
    altura: prompt("altura persona 2"),
}

if (persona1.altura > persona2.altura) {
    console.log("La persona 1 es mas alta");
} else {
    console.log("la persona 2 es mas alta");
}

if (persona1.edad > persona2.edad) {
    console.log("la persona 1 es la mas grande de edad");
} else {
    console.log(" la persona 2 es la mas grande de edad");
}

//Ejercicio 6
let usuario = {
    nombre: prompt("nombre tuyo"),
    edad: prompt("edad tuya"),
    altura: prompt("altura tuya"),
    vision: prompt("tu vision"),
}
let capacitado = false

if (usuario.edad > 18 && usuario.altura > 150 && usuario.vision > 8) {
    capacitado = true
}

console.log(capacitado);


//Ejercicio 7
let nombre = prompt("nombre cliente")
let pase = prompt("pase cliente")
let entrada = confirm("tiene entrada")

let saldo = prompt("saldo cliente")

let quiereComprar

if (nombre == "Mateo"|| pase == "VIP") {
    console.log("bienvenida, usted tiene ingreso libre");
}else if (entrada == true) {
    let usaEntrada = confirm("desea usar su entrada")
}

if (usaEntrada = true ){
    console.log("bienvenida, usted tiene ingreso libre");
} else if (usaEntrada = false){
    quiereComprar = confirm("desea comprar?")
}

if (quiereComprar = true && saldo >= 1000) {
    console.log("Venta de entrada exitosa, bienvenida.");
} else if (saldo < 1000) { console.log("venta de entrada rechazada, vuelva a intentar");
} else console.log("hasta la proxima");