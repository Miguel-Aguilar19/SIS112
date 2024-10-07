class ListaCadena {
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
        this.lista.sort(); // Orden ascendente alfabético
    }
}


// Instancia de la clase ListaCadena
const listaCadenas = new ListaCadena();
listaCadenas.agregar('Hola'); //4
listaCadenas.agregar('Mundo'); //5
listaCadenas.agregar('UCB'); //3
/*
//---------------------------------------------Hola
var a = listaCadenas.lista[0]
console.log[a];
var aCant = a.length;
console.log(aCant);//4
//----------------------------------------------Mundo
var b = listaCadenas.lista[1]
console.log[b];
var bCant = b.length;
console.log(bCant);//5
//------------------------------------------------UCB
var c = listaCadenas.lista[2]
console.log[c];
var cCant = c.length;
console.log(cCant); //3


//------------------------------------------------Buscar el mayor
var mayor = 0;
var posicion = -1;
if (aCant > mayor) {
    mayor = a;
    posicion = 0;
}
//------


var mayor = 0;
if (bCant > mayor) {
    mayor = b;
    posicion = 1;
}
//-------
var mayor = 0;
if (cCant > mayor) {
    mayor = c;
    posicion = 2;
}






console.log( 'La mayor cantidad de caracteres tiene:' + mayor);
console.log('La cadena con mayor cantidad de caracteres es:' + listaCadenas.lista[posicion]);
*/


//Ejercicio en FOR
// Lista de cadenas


let mayor = 0;
let posicion = -1;


for (let i = 0; i < listaCadenas.lista.length; i++) {
    const cadena = listaCadenas.lista[i];
    const longitud = cadena.length;
   
    console.log(cadena);
    console.log(longitud);
    if (longitud > mayor) {
        mayor = longitud;
        posicion = i;
    }
}


// Resultado final
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La cadena con mayor cantidad de caracteres es: ' + listaCadenas.lista[posicion]);
console.log(listaCadenas.lista);












console.log(listaCadenas.lista);


// Referencias a los elementos HTML
const input = document.getElementById('cadenaInput');  
const agregarBtn = document.getElementById('agregarBtn');
const eliminarBtn = document.getElementById('eliminarBtn');
const buscarBtn = document.getElementById('buscarBtn');
const ordenarBtn = document.getElementById('ordenarBtn');
const listaNumeros = document.getElementById('listaNumeros');  
const resultadoBusqueda = document.getElementById('resultadoBusqueda');


// Evento para agregar una cadena
agregarBtn.addEventListener('click', () => {
    const valor = input.value.trim();
    if (valor) {
        listaCadenas.agregar(valor);
        mostrarCadenas();
        input.value = '';
    } else {
        alert('Por favor, ingresa una cadena válida.');
    }
});


// Evento para eliminar una cadena
eliminarBtn.addEventListener('click', () => {
    const valor = input.value.trim();
    if (valor) {
        listaCadenas.eliminar(valor);
        mostrarCadenas();
        input.value = '';
    } else {
        alert('Por favor, ingresa una cadena válida.');
    }
});


// Evento para buscar una cadena
buscarBtn.addEventListener('click', () => {
    const valor = input.value.trim();
    if (valor) {
        const index = listaCadenas.buscar(valor);
        if (index !== -1) {
            resultadoBusqueda.textContent = `Cadena "${valor}" encontrada en la posición ${index}.`;
        } else {
            resultadoBusqueda.textContent = `Cadena "${valor}" no encontrada en la lista.`;
        }
        input.value = '';
    } else {
        alert('Por favor, ingresa una cadena válida.');
    }
});


// Evento para ordenar la lista
ordenarBtn.addEventListener('click', () => {
    listaCadenas.ordenar();
    mostrarCadenas();
});


// Función para mostrar la lista en pantalla
function mostrarCadenas() {
    listaNumeros.innerHTML = '';  
    listaCadenas.lista.forEach(cadena => {
        const li = document.createElement('li');
        li.textContent = cadena;
        listaNumeros.appendChild(li);  
    });
}








