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
    masChico = num2;
}

if (masChico > num3) {
    masChico = num3;
}

console.log(masChico);

//Ejerecicio 5
let persona1 = {
    nombre: "persona1",
    edad: prompt("edad persona 1"),
    altura: prompt("altura persona 1")
}

let persona2 = {
    nombre: "persona2",
    edad: prompt("edad persona 2"),
    altura: prompt("altura persona 2")
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
    vision: prompt("tu vision")
}
let capacitado = false;

if (usuario.edad > 18 && usuario.altura > 150 && usuario.vision > 8) {
    capacitado = true;
}

console.log(capacitado);

//Ejercicio 7
let nombre = prompt("nombre cliente");
let pase = prompt("pase cliente");
let entrada = confirm("tiene entrada");

if (nombre == "Mateo" || pase == "VIP") {
    console.log("bienvenida, usted tiene ingreso libre");
} else if (entrada == true) {
    let usaEntrada = confirm("desea usar su entrada");
    if (usaEntrada == true) {
        console.log("bienvenida, usted tiene ingreso libre");
    } else {
        console.log("hasta la proxima");
    }
} else if (entrada == false) {
    let quiereComprar = confirm("desea comprar");
    if (quiereComprar == true) {
        let saldo = prompt("saldo cliente");
        if (saldo >= 1000) {
            console.log("Venta de entrada exitosa, bienvenido.");
        } else {
            console.log("venta de entrada rechazada, saldo insuficiente");
        }
    } else {
        console.log("hasta la proxima");
    }
} else {
    console.log("hasta la proxima");
}

//Ejercicio 8

let numeroIncognita = 9;
let numeroIngresado = prompt("ingrese un numero del 1 al 10");

if (numeroIngresado < numeroIncognita) {
    numeroIngresado = prompt("el numero ingresado es menor, vuelve a intentarlo");
    if (numeroIngresado > numeroIncognita) {
        numeroIngresado = prompt("el numero ingresado es mayor, vuelve a intentarlo");
        if (numeroIngresado > numeroIncognita) {
            console.log("el numero ingresado es mayor");
        } else if (numeroIngresado < numeroIncognita) {
            console.log("el numero ingresado es menor");
        } else {
            console.log("Ganaste, haz adivinado el número.");
        }
    } else if (numeroIngresado < numeroIncognita) {
        numeroIngresado = prompt("el numero ingresado es menor, vuelve a intentarlo");
        if (numeroIngresado > numeroIncognita) {
            console.log("el numero ingresado es mayor");
        } else if (numeroIngresado < numeroIncognita) {
            console.log("el numero ingresado es menor");
        } else {
            console.log("Ganaste, haz adivinado el número.");
        }
    } else {
        console.log("Ganaste, haz adivinado el número.");
    }
} else if (numeroIngresado > numeroIncognita) {
    numeroIngresado = prompt("el numero ingresado es mayor, vuelve a intentarlo");
    if (numeroIngresado > numeroIncognita) {
        numeroIngresado = prompt("el numero ingresado es mayor, vuelve a intentarlo");
        if (numeroIngresado > numeroIncognita) {
            console.log("Perdiste, el numero ingresado es mayor");
        } else if (numeroIngresado < numeroIncognita) {
            console.log("Perdiste, el numero ingresado es menor");
        } else {
            console.log("Ganaste, haz adivinado el número.");
        }
    } else if (numeroIngresado < numeroIncognita) {
        numeroIngresado = prompt("el numero ingresado es menor, vuelve a intentarlo");
        if (numeroIngresado > numeroIncognita) {
            console.log("Perdiste, el numero ingresado es mayor");
        } else if (numeroIngresado < numeroIncognita) {
            console.log("Perdiste, el numero ingresado es menor");
        } else {
            console.log("Ganaste, haz adivinado el número.");
        }
    } else {
        console.log("Ganaste, haz adivinado el número.");
    }
} else {
    console.log("Ganaste, haz adivinado el número.");
}

//Ejercicio 9
let miEdad = parseInt(prompt("Ingresa tu edad"));

if (miEdad <= 12) {
    console.log("Eres un infante");
} else if (miEdad >= 13 && miEdad <= 18) {
    console.log("Eres un adolescente");
} else if (miEdad >= 19 && miEdad <= 45) {
    console.log("Eres un mayor joven");
} else if (miEdad > 45 && miEdad <= 100) {
    console.log("Eres un anciano");
} else if (miEdad > 100) {
    confirm("De verdad tiene esa edad??");
}

//Ejercicio 10
let jugador1 = prompt("Piedra, papel o tijera?");
let jugador2 = prompt("Piedra, papel o tijera?");

if (jugador1 == jugador2) {
    console.log("Empataron");
} else if (jugador1 == "PIEDRA" && jugador2 == "TIJERA") {
    console.log("El ganador es el Jugador 1");
} else if (jugador1 == "PIEDRA" && jugador2 == "PAPEL") {
    console.log("El ganador es el Jugador 2");
} else if (jugador1 == "PAPEL" && jugador2 == "TIJERA") {
    console.log("El ganador es el Jugador 2");
} else if (jugador1 == "PAPEL" && jugador2 == "PIEDRA") {
    console.log("El ganador es el Jugador 1");
} else if (jugador1 == "TIJERA" && jugador2 == "PAPEL") {
    console.log("El ganador es el Jugador 1");
} else if (jugador1 == "TIJERA" && jugador2 == "PIEDRA") {
    console.log("El ganador es el Jugador 2");
} else {
    console.log("Uno de los jugadores ha hecho trampa");
}

//Ejercicio 11
let colorIngresado = prompt("Ingrese un color");

switch (colorIngresado) {
    case "blanco":
        console.log("Falta de color");
        break;
    case "negro":
        console.log("Falta de color");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    case "azul":
        console.log("El color del agua");
        break;
    case "amarillo":
        console.log("El color del sol");
        break;
    case "rojo":
        console.log("El color del fuego");
        break;
    case "marron":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");
        break;
}

//Ejercicio 12
let valorUno = parseInt(prompt("Ingrese un valor"));
let operacion = prompt("Ingrese el tipo de operacion (suma, resta, multiplicación, división)");
let valorDos = parseInt(prompt("Ingrese un segundo valor"));
let resultado;

if (operacion == "suma") {
    resultado = valorUno + valorDos;
    console.log(resultado);
} else if (operacion == "resta") {
    resultado = valorUno - valorDos;
    console.log(resultado);
} else if (operacion == "multiplicacion") {
    resultado = valorUno * valorDos;
    console.log(resultado);
} else if (operacion == "division") {
    if (valorDos == 0) {
        console.log("ERROR");
    } else {
        resultado = valorUno / valorDos;
        console.log(resultado);
    }
}

//Ejercicio 13

let apellidoDni = prompt("Ingresa tu apellido");
let nombreDni = prompt("Ingresa tu nombre");
let sexoDni = prompt("Ingresa tu sexo");
let fechaDeNacimientoDni = prompt("Ingresa tu fecha de nacimiento");
let nacionalidadDni = prompt("Ingresa tu nacionalidad");
let numeroDni = prompt("Ingresa tu numero de documento");
let domicilioDni = prompt("Ingresa tu domicilio");
let lugarDeNacimientoDni = prompt("Ingresa tu lugar/ciudad/barrio de nacimiento");
console.log("Apellido :", apellidoDni, "Nombre :", nombreDni, "Sexo :", sexoDni, "Fecha de Nacimiento :", fechaDeNacimientoDni, "Nacionalidad :", nacionalidadDni, "Numero de Documento :", numeroDni, "Domicilio :", domicilioDni, "Lugar de Nacimiento :", lugarDeNacimientoDni);
let confirmacionDni = confirm("¿Los datos ingresado son correctos?");

if (confirmacionDni == true) {
    let dni = {
        apellido: apellidoDni,
        nombre: nombreDni,
        sexo: sexoDni,
        fechaDeNacimiento: fechaDeNacimientoDni,
        nacionalidad: nacionalidadDni,
        numeroDocumento: numeroDni,
        domicilio: domicilioDni,
        lugarDeNacimiento: lugarDeNacimientoDni,
    }
    console.table(dni);
    alert("Registro Exitoso");
} else {
    alert("Vuelva a intentarlo en 1 mes.");
}