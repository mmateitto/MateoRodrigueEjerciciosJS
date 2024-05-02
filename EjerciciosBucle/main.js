//Ejercicio 1
let ejercicio1 = parseInt(prompt("ejercicio 1"));
let multiplicacion;
let i = 1;

while (i < 11) {
    multiplicacion = ejercicio1 * i;
    console.log(multiplicacion);
    i++
}

//Ejercicio 2
let solucion = 0;
let ejercicio2 = parseInt(prompt("ejercicio 2"));

while (ejercicio2 != solucion) {
    ejercicio2 = parseInt(prompt("ejercicio 2"));
}

//Ejercicio 3
let adivinar = 33;
let ejercicio3 = parseInt(prompt("ejercicio 3"));
let intentos = 1;

while (ejercicio3 != adivinar) {
    if (ejercicio3 < adivinar) {
        console.log("el numero que ingresaste es menor, volve a intentarlo");
        ejercicio3 = parseInt(prompt("ejercicio 3"));
    } else if (ejercicio3 > adivinar) {
        console.log("el numero que ingresaste es mayor, volve a intentarlo");
        ejercicio3 = parseInt(prompt("ejercicio 3"));
    }
    intentos++
}
console.log("Felicitaciones adivinaste en el intento numero: " + intentos);

//Ejercicio 4
let numero = parseInt(prompt("ejercicio 4"));

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
if (esPrimo(numero)) {
    console.log(numero + " es primo.");
} else {
    console.log(numero + " no es primo.");
}

