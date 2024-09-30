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

// Referencias a los elementos HTML
const input = document.getElementById('numeroInput');  // Cambiado a 'numeroInput' como en el HTML
const agregarBtn = document.getElementById('agregarBtn');
const eliminarBtn = document.getElementById('eliminarBtn');
const buscarBtn = document.getElementById('buscarBtn');
const ordenarBtn = document.getElementById('ordenarBtn');
const listaNumeros = document.getElementById('listaNumeros');  // Cambiado a 'listaNumeros' como en el HTML
const resultadoBusqueda = document.getElementById('resultadoBusqueda');

// Evento para agregar una cadena
agregarBtn.addEventListener('click', () => {
    const valor = input.value.trim();
    if (valor) {
        listaCadenas.agregar(valor);
        mostrarLista();
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
        mostrarLista();
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
    mostrarLista();
});

// Función para mostrar la lista en pantalla
function mostrarLista() {
    listaNumeros.innerHTML = '';  // Cambiado a 'listaNumeros' como en el HTML
    listaCadenas.lista.forEach(cadena => {
        const li = document.createElement('li');
        li.textContent = cadena;
        listaNumeros.appendChild(li);  // Cambiado a 'listaNumeros' como en el HTML
    });
}
