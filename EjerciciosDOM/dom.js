//Ejercicio 1
document.getElementById("calcForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

function calcular() {
  let altura = parseFloat(document.getElementById("altura").value);
  let peso = parseFloat(document.getElementById("peso").value);
  let resultado = peso / altura;
  document.getElementById("resultado").innerHTML = resultado.toFixed(2);
}

//Ejercicio2
let cambio = 1040;

let usd = document.getElementById("usd");
usd.addEventListener("input", () => {
  let dolar = usd.value * cambio;
  document.getElementById("ars").value = dolar;
  console.log(dolar);
})

let ars = document.getElementById("ars");
ars.addEventListener("input", () => {
  let peso = ars.value / cambio;
  document.getElementById("usd").value = peso;
  console.log(peso);
})

//Ejercicio 3
let notas = [
  {
    id: 1,
    titulo: "Sacar la basura",
    texto: "Mi mama me va retar si no lo hago",
    realizada: false,
  }
]

let idGlobal = 1;

let divPadre = document.getElementById("contenedorNotas");

pintarTarjetas(notas, divPadre);

function pintarTarjetas(tarjeta, divPadre) {
  divPadre.innerHTML = "";
  for (let i = 0; i < tarjeta.length; i++) {
    let notaNueva = document.createElement("div");
    notaNueva.className = "card m-2 d-flex flex-column";
    notaNueva.innerHTML = `
    <div class="card-header d-flex justify-content-arround">
        <input ${tarjeta[i].realizada ? "checked" : ""
      } type="checkbox" onClick="marcarRealizado(${i}, notas)">
        <h5 class="card-title m-3 text-wrap aling-self-end" style="width: 12rem;">${tarjeta[i].titulo}</h5>
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <p class="card-text ${tarjeta[i].realizada ? "text-decoration-line-through" : ""}" style="width: 12rem;">${tarjeta[i].texto}</p>
      <input class="btn btn-danger text-wrap" onClick="borrarNota(${i}, notas)" type="button" value="Borrar Nota">
    </div>
    `;
    divPadre.appendChild(notaNueva);
  }
}

let tituloNota = document.getElementById("tituloNota");
let textoNota = document.getElementById("textoNota");

let guardarNota = document.getElementById("guardarNota");
guardarNota.addEventListener("click", () => {
  crearNota(tituloNota, textoNota, notas);
});

let borrar = document.getElementById("borrarNotas");
borrar.addEventListener("click", () => {
  notas = [];
  divPadre.innerHTML = '';
});

function crearNota(titulo, texto, arregloNotas) {
  idGlobal++;
  let nota = {
    id: idGlobal,
    titulo: titulo.value,
    texto: texto.value,
    realizada: false
  };
  arregloNotas.push(nota)
  pintarTarjetas(arregloNotas, divPadre);
}

function borrarNota(indice, notas) {
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] === notas[indice]) {
      notas.splice(i, 1)
    }
  }
  pintarTarjetas(notas, divPadre);
}

function marcarRealizado(indice, notas) {
  notas[indice].realizada = !(notas[indice].realizada)
  pintarTarjetas(notas, divPadre);
}

let realizadas = document.getElementById("realizadas");