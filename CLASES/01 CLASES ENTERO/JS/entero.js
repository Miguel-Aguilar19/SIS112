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
        this.Num = parseInt(input.value, 10) ;  
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
        this.Num = this.Num +1;
    }

    decrementarNum() {
        this.Num = this.Num -1;
    }

    //es par o impar
    esParImpar() {
        if(this.Num % 2 == 0){
            return true;
        }else{
            return false;
        }
    }

    //positivo negativo
    Posi_Nega() {
        return(this.Num >= 0)
    }
    



}


//las funciones = button HTML
var ClaseEntero = new Entero(0);  // Inicializado en 0

// Cargar un número en el objeto
function cargarNum() {
    ClaseEntero.setNum();
}

// Mostrar el número actual en la página
function mostrarNum() {
    ClaseEntero.showNum();
}
//incremenatr num

function incrementarValor() {
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}
//decrementar num

function decrementarValor() {
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

//par o impar
function esParImparNum() {
    var respuesta = ClaseEntero.esParImpar();
    var resp = respuesta ? "Es num par": "Es num impar";
    ClaseEntero.showResultado(resp)
}


//par o impar
function Posi_NegaNum() {
    var respuesta = ClaseEntero.Posi_Nega();
    var resp = respuesta ? "Es positivo": "Es negativo";
    ClaseEntero = showResultado(resp)
}

