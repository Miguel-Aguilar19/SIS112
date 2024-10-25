class Entero {
    //atributos
    Num;

    //constructor = inicializa el objeto
    constructor(Num) {
        this.Num = Num;  
    }

    //CLASS / cargar el valor de Num
    setNum() {
        const input = document.getElementById('numeroInput');
        const valor = parseInt(input.value, 10);
        if (isNaN(valor)) {
            this.Num = 0; // valor predeterminado si la entrada no es válida
        } else {
            this.Num = valor;
        }
    }

    //CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }

    //CLASS - Mostrar el valor de Num en el DOM
    showNum() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();  
    }

    showResultado(respuesta) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;  
    }

    incrementarNum() {
        this.Num = this.Num + 1;
    }

    decrementarNum() {
        this.Num = this.Num - 1;
    }

    // Es par o impar
    esParImpar() {
        return this.Num % 2 === 0;
    }

    // Positivo o negativo
    Posi_Nega() {
        return (this.Num >= 0);
    }

    // Factorial de Num
    factorial() {
        if (this.Num < 0) {
            return "El factorial no está definido para números negativos";
        }
        let fact = 1;
        for (let i = 2; i <= this.Num; i++) {
            fact *= i;
        }
        return fact;
    }

    // Determina si Num es un número perfecto
    esPerfecto() {
        let sumaDivisores = 0;
        for (let i = 1; i <= Math.floor(this.Num / 2); i++) {
            if (this.Num % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === this.Num;
    }
}

// Crear una instancia de Entero
var ClaseEntero = new Entero(0);

// Función para cargar un número en el objeto
function cargarNum() {
    ClaseEntero.setNum();
}

// Función para mostrar el número actual en la página
function mostrarNum() {
    ClaseEntero.showNum();
}

// Función para incrementar el valor
function incrementarValor() {
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

// Función para decrementar el valor
function decrementarValor() {
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

// Función para determinar si es par o impar
function esParImparNum() {
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es número par" : "Es número impar";
    ClaseEntero.showResultado(resp);
}

// Función para determinar si es positivo o negativo
function Posi_NegaNum() {
    var respuesta = ClaseEntero.Posi_Nega();
    var resp = respuesta ? "Es positivo" : "Es negativo";
    ClaseEntero.showResultado(resp);
}

// Función para mostrar el factorial
function mostrarFactorial() {
    var resultado = ClaseEntero.factorial();
    ClaseEntero.showResultado("El factorial es: " + resultado);
}

// Función para determinar si es un número perfecto
function esPerfectoNum() {
    var respuesta = ClaseEntero.esPerfecto();
    var resp = respuesta ? "Es un número perfecto" : "No es un número perfecto";
    ClaseEntero.showResultado(resp);
}
