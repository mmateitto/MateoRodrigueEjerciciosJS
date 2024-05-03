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
let ejercicio4 = parseInt(prompt("ejercicio 4"));

function esPrimo(ejercicio4) {
    if (ejercicio4 <= 1) {
        return false;
    }
    for (let i = 2; i <= ejercicio4 / 2; i++) {
        if (ejercicio4 % i === 0) {
            return false;
        }
    }
    return true;
}
if (esPrimo(ejercicio4)) {
    console.log(ejercicio4 + " es primo.");
} else {
    console.log(ejercicio4 + " no es primo.");
}

//Ejercicio 5
let ejercicio5 = parseInt(prompt("ejercicio 5"));
console.log("Los divisores de", ejercicio5, "son:");
for (let i = 1; i <= ejercicio5; i++) {
    if (ejercicio5 % i === 0) {
        console.log(i);
    }
}

//Ejercicio 6
let array6 = ["casa", "plata", "finanzas", "estudios", "sociedad", "politica", "ciencia", "calentamiento global", "vinculos", "tecnologia"]

for (let i = 0; i < array6.length; i++) {
    console.log(array6[i]);
}

//Ejercicio 7
let array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < array7.length; i++) {
    console.log(i * 2);
}

//Ejercicio 8
let array8 = [
    { nombre: "Daniel", edad: 54, relacion: "Padre", ocupacion: "Logistica" },
    { nombre: "Graciela", edad: 52, relacion: "Madre", ocupacion: "Costurera" },
    { nombre: "Alejandra", edad: 31, relacion: "Hija Mayor", ocupacion: "Cocinera" },
    { nombre: "Lucia", edad: 23, relacion: "Hija del Medio", ocupacion: "Administrativa" },
    { nombre: "Daniela", edad: 13, relacion: "Hija Menor", ocupacion: "Estudiante" }
]
for (let i = 0; i < array8.length; i++) {
    console.log("Hola, soy " + array8[i].nombre + " tengo " + array8[i].edad + " años, soy " + array8[i].relacion + " y trabajo como " + array8[i].ocupacion);
}

//Ejercicio 9
let array9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("Numeros Impares: ");
for (let i = 0; i < array9.length; i++) {
    if (array9[i] % 2 !== 0) {
        console.log(array9[i]);
    }
}

//Ejercicio 10
let pares = 0;
let impares = 0;
while (true) {
    let numero = parseInt(prompt("ingresa un numero, o usa el 0 para terminar"));
    if (numero == 0) {
        break;
    }
    if (numero % 2 === 0) {
        pares += numero;
    } else {
        impares += numero;
    }
}
console.log("la suma de los numeros pares es:" + pares);
console.log("la suma de los numeros impares es:" + impares);

//Ejercicio 11
let array11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeroGrande = array11[0];

for (let i = 1; i < array11.length; i++) {
    if (array11[i] > numeroGrande) {
        numeroGrande = array11[i]
    }
}
console.log("el numero mas grande es:", numeroGrande);

//Ejercicio 12
let array12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeroChico = array12[0];

for (let i = 1; i < array12.length; i++) {
    if (array12[i] < numeroChico) {
        numeroChico = array12[i]
    }
}
console.log("el numero mas chico es:", numeroChico);

//Ejercicio 13
let jugador1 = prompt("Nombre del Jugador 1");
let jugador2 = prompt("Nombre del Jugador 2");
let continuar = true;

while (continuar) {
    let jugadaJugador1 = obtenerJugada(jugador1);
    let jugadaJugador2 = obtenerJugada(jugador2);

    let ganador = determinarGanador(jugadaJugador1, jugadaJugador2);
    if (ganador === "empate") {
        console.log("empate, intentelo de nuevo");
    } else {
        console.log(ganador + " gana el juego");
        continuar = false;
    }
}
function determinarGanador(jugadaJugador1, jugadaJugador2) {
    if (jugadaJugador1 === jugadaJugador2) {
        return "empate";
    } else if (
        (jugadaJugador1 === "piedra" && jugadaJugador2 === "tijera") ||
        (jugadaJugador1 === "papel" && jugadaJugador2 === "piedra") ||
        (jugadaJugador1 === "tijera" && jugadaJugador2 === "papel")
    ) {
        return jugador1;
    } else {
        return jugador2;
    }
}
function obtenerJugada(nombreJugador) {
    let jugada = prompt(nombreJugador + " piedra, papel o tijera?");
    return jugada;
}

//Ejercicio 14
for (let i = 0; i < 5; i++) {
    let fila = "";
    for (let j = 0; j <= i; j++) {
        fila += "* "
    }
    console.log(fila);
}

//Ejercicio 15

for (let i = 4; i >= 0; i--) {
    let fila = "";
    for (let j = 0; j <= i; j++) {
        fila += "* ";
    }
    console.log(fila);
}

//Ejecicio 16 y ultimo :))
let array16 = [7, 3, 1, 9, 4, 6, 2, 8, 5, 10];
let longitud = array16.length;
for (let i = 0; i < longitud - 1; i++) {
    for (let j = 0; j < longitud - 1 - i; j++) {
        if (array16[j] > array16[j + 1]) {
            let temp = array16[j];
            array16[j] = array16[j + 1];
            array16[j + 1] = temp;
        }
    }
}
console.log("array ordenado:", array16);