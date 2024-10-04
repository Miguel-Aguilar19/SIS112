class ListaEnteros {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    ordenar() {
        this.lista.sort((a, b) => a - b); // Orden ascendente
    }
}

// Instancia de la clase ListaEnteros
const listaEnteros = new ListaEnteros();
listaEnteros.agregar(21);
listaEnteros.agregar(12);
listaEnteros.agregar(15);
listaEnteros.agregar(30);
console.log(listaEnteros.lista); //imprime: [21,12,15,30]

var a = listaEnteros.lista[0];
console.log(a);

var b = listaEnteros.lista[1];
console.log(b);

var c = listaEnteros.lista[2];
console.log(c);

var d = listaEnteros.lista[3];
console.log(d);

//RETORNAR EL ELEMENTO MENOR DE LA LISTA, DADO QUE LA LISTA SOLO ALMACENA VALORES POSTIVOS
/*

var datoMenor = -1;

//-----------------------------------------------------
var a = listaEnteros.lista[0];
if(a > datoMenor){
    datoMenor = a;
}
console.log("Dato Menor: " + datoMenor);
//----------------------------------------------------
var b = listaEnteros.lista[1];
if(a > b){
    datoMenor = b;
}
console.log("Dato Menor:" + datoMenor);
//----------------------------------------------------
var c = listaEnteros.lista[2];
if(b > c){
    datoMenor = c;
}
console.log("dato Menor:" + datoMenor);
//---------------------------------------------------
var d = listaEnteros.lista[3];
if(c > d){
    datoMenor = d;
}
console.log("dato Menor;" + datoMenor);
//--------------------------------------------------
*/

var datoMenor = -1; 

for (var i = 0; i < listaEnteros.lista.length; i++) {
    var valorActual = listaEnteros.lista[i];

    if (i === 0 || valorActual < datoMenor) {
        datoMenor = valorActual;
    }

    console.log("dato menor:" + datoMenor);

}


// Referencias a los elementos HTML
const input = document.getElementById('numeroInput');
const agregarBtn = document.getElementById('agregarBtn');
const eliminarBtn = document.getElementById('eliminarBtn');
const buscarBtn = document.getElementById('buscarBtn');
const ordenarBtn = document.getElementById('ordenarBtn');
const listaNumeros = document.getElementById('listaNumeros');
const resultadoBusqueda = document.getElementById('resultadoBusqueda');

// Evento para agregar un número
agregarBtn.addEventListener('click', () => {
    const valor = parseInt(input.value);
    if (!isNaN(valor)) {
        listaEnteros.agregar(valor);
        mostrarLista();
        input.value = '';
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});

// Evento para eliminar un número
eliminarBtn.addEventListener('click', () => {
    const valor = parseInt(input.value);
    if (!isNaN(valor)) {
        listaEnteros.eliminar(valor);
        mostrarLista();
        input.value = '';
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});

// Evento para buscar un número
buscarBtn.addEventListener('click', () => {
    const valor = parseInt(input.value);
    if (!isNaN(valor)) {
        const index = listaEnteros.buscar(valor);
        if (index !== -1) {
            resultadoBusqueda.textContent = `Número ${valor} encontrado en la posición ${index}.`;
        } else {
            resultadoBusqueda.textContent = `Número ${valor} no encontrado en la lista.`;
        }
        input.value = '';
    } else {
        alert('Por favor, ingresa un número válido.');
    }
});

// Evento para ordenar la lista
ordenarBtn.addEventListener('click', () => {
    listaEnteros.ordenar();
    mostrarLista();
});

// Función para mostrar la lista en pantalla
function mostrarLista() {
    listaNumeros.innerHTML = '';
    listaEnteros.lista.forEach(num => {
        const li = document.createElement('li');
        li.textContent = num;
        listaNumeros.appendChild(li);
    });
}
