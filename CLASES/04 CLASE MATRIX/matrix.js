class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

    // Ejemplo 1: Patrón Aleatorio
    llenarMatrizAleatorio() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                var numeroRandom = Math.random();
                this.matriz[i][j] = Math.floor(numeroRandom * 3); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }


    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
    

    //HACER EJERCICIOS AQUI

    //Primera fila con 2, el resto con 0
    llenarmatrizPrimeraFila(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                
                if (i == 0) {
                    this.matriz[i][j] = 2;
                }else{
                    this.matriz[i][j] = 0;
                }
                
            }
        }
        this.dibujarMatriz();
    }

    //Segundo columna con 2, el resto con 0
    llenarmatrizSegundaColumna(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                    
                if (j == 1) {
                        this.matriz[i][j] = 2;
                 }else{
                        this.matriz[i][j] = 0;
                 }
                    
            }
        }
        this.dibujarMatriz();
    }

    //Llenar otro diagonal
    llenarOtraMatrizDiagonal() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la suma de la posición de la fila (i) y la posición de la columna (j)
                // es igual al número de columnas - 1, estamos en la diagonal inversa.
                if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal inversa, la dibujamos
        this.dibujarMatriz();
    }
    
    //Borde mas chico
    llenarOtroMatrizBordes() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if ((i === 1 || i === this.filas - 2) && (j >= 1 && j <= this.columnas - 2) || (j === 1 || j === this.columnas - 2) && (i >= 1 && i <= this.filas - 2)) {
                     this.matriz[i][j] = 2;
                    } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                    }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
    
    //Piramides
    llenarMatrizPiramide() {
        this.vaciarMatriz();
        // Calcular el centro de la matriz
        const centro = Math.floor(this.columnas / 2);
        // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
        // Rellenar la pirámide
        for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
            const inicio = centro - i;
            const fin = centro + i;
            for (let j = 0; j < this.columnas; j++) {
                if (j >= inicio && j <= fin) {
                this.matriz[i][j] = 2; // Dibujar la pirámide en la parte superior
                } else {
                this.matriz[i][j] = 0; // Resto en 0
                }
             }
         }
        this.dibujarMatriz();
    }

    //Cuatro bordes
    llenarMatrizCuatroBordes() {
        this.vaciarMatriz();

        const mitadCol = Math.floor(this.columnas / 2); 
        const mitadFil = Math.floor(this.filas / 2);

        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
                if (j == mitadCol){
                    this.matriz[i][j] = 2;
                }
                if (j == mitadCol-1){
                    this.matriz[i][j] = 2;   
                }
                if (i == mitadFil){
                    this.matriz[i][j] = 2;
                }
                if (i == mitadFil-1){
                    this.matriz[i][j] = 2;
                }
            }
        }
        this.dibujarMatriz();
    }

    //Primera secuencia
    llenarmatrizSecuencia1(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 3
            }
        }
        this.dibujarMatriz();
    }

        //Segunda secuencia
        llenarmatrizSecuencia2(){
            this.vaciarMatriz();
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    this.matriz[i][j] = j % 3
                }
            }
            this.dibujarMatriz();
        }
        
        //Tercerra secuencia
        llenarmatrizSecuencia3(){
            this.vaciarMatriz();
            var intercambio = "disminuir";
            var puntero = 7;
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    this.matriz[i][j] = puntero;

                    if (intercambio == "disminuir"){
                        if(puntero == 0){
                            intercambio = "incrementar"
                        }
    
                        puntero = puntero - 1;
                    }

                    if (intercambio == "incrementar"){
                        if(puntero == 7){
                            puntero = puntero -1;
                            intercambio = "disminuir"
                        }
                        puntero = puntero +1;
                    }
                }
                
            }
            this.dibujarMatriz();
        }

        llenarMatrizSecuencia_0_al_7() {
            this.vaciarMatriz();
            var puntero = 0;
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    this.matriz[i][j] = puntero;
                    if(puntero == 7){
                        puntero = -1;
                    }

                    puntero = puntero + 1;
                }
            }
            this.dibujarMatriz();
        }

        llenarMatrizSecuencia_0_al_7_vertical() {
            this.vaciarMatriz();
            var puntero = 0;
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    this.matriz[j][i] = puntero;
                    if(puntero == 7){
                        puntero = -1;
                    }

                    puntero = puntero + 1;
                }
            }
            this.dibujarMatriz();
        }

        llenarMatrizSecuencia_7_al_0() {
            this.vaciarMatriz();
            var puntero = 7;
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    this.matriz[i][j] = puntero;
                    if(puntero == 0){
                        puntero = 8;
                    }

                    puntero = puntero - 1;
                }
            }
            this.dibujarMatriz();
        }

//EJERCICIOS DEL PRACTICO DE MATRICES PARA EL 15//11//24
    // Ejercicio 1:
Ejercicio1() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = 1;
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 2:
Ejercicio2() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 0;
            } else {
                this.matriz[i][j] = 1;
            }
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 3:
Ejercicio3(){
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i === 4 || j === 4 ) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 4: 
Ejercicio4(){
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
            } else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                this.matriz[i][j] = 0;
            } else if (i === j || i + j === this.columnas - 1) {
                this.matriz[i][j] = 2;
            }
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 5:
Ejercicio5() {
    this.vaciarMatriz();
    let terceraParte = Math.floor(this.filas / 3);
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i < terceraParte) {
                this.matriz[i][j] = 1;
            } else if (i < 2 * terceraParte) {
                this.matriz[i][j] = 2;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 6: 
Ejercicio6() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        let valor = i % 2 === 0 ? 1 : 0;
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = valor;
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 7: 
Ejercicio7() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        this.matriz[i][i] = 1;
    }
    this.dibujarMatriz();
}

// Ejercicio 8: 
Ejercicio8(){
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 9: 
Ejercicio9() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j <= i; j++) {
            this.matriz[i][j] = 1;
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 10: 
Ejercicio10() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = this.columnas - i - 1; j < this.columnas; j++) {
            this.matriz[i][j] = 1;
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 11: 
Ejercicio11(){
    this.vaciarMatriz();

    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i % 2 === 0 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 12: 
Ejercicio12() {
    this.vaciarMatriz();
    const centro = Math.floor(this.columnas / 2);
    for (let i = 0; i <= centro; i++) {
        for (let j = centro - i; j <= centro + i; j++) {
            this.matriz[i][j] = 1;
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 13: 
Ejercicio13(){
    this.vaciarMatriz();

    const centro = Math.floor(this.columnas / 2);
    const alturaPiramide = Math.floor(this.filas / 2);

    for (let i = 0; i < alturaPiramide; i++) {
        const inicio = centro - i;
        const fin = centro + i;

        for (let j = inicio; j <= fin; j++) {
            this.matriz[i][j] = 1; 
        }
    }

    for (let i = 0; i < alturaPiramide; i++) {
        const inicio = centro - i;
        const fin = centro + i;

        for (let j = inicio; j <= fin; j++) {
            this.matriz[this.filas - 1 - i][j] = 1; 
        }
    }

    this.dibujarMatriz();
}
// Ejercicio 14: 
Ejercicio14(){
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
        }
    }
    this.dibujarMatriz();
}


// Ejercicio 15: 
Ejercicio15() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j <= i; j++) {
            this.matriz[i][j] = 1;
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 16: 
Ejercicio16() {
    this.vaciarMatriz();
    
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
            }
        }
    }
    for (let i = 2; i < this.filas - 2; i++) {
        for (let j = 2; j < this.columnas - 2; j++) {
            if (i === 2 || i === this.filas - 3 || j === 2 || j === this.columnas - 3) {
                this.matriz[i][j] = 2;
            }
        }
    }

    this.dibujarMatriz();
}


// Ejercicio 17: 
Ejercicio17() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
            } else if (i > 2 && i < this.filas - 3 && j > 2 && j < this.columnas - 3) {
                this.matriz[i][j] = 2;
            }
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 18: 
Ejercicio18(){
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i % 2 === 0 || j === 0 || j === this.columnas - 1) {
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 19: 
Ejercicio19() {
    this.vaciarMatriz();
    
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (
                (i % 3 === 0 && j % 3 === 0) ||  (i % 3 === 1 && j % 3 === 1) ||  (i % 3 === 2 && j % 3 === 2)) {  //No pillaba otra forma de hacerlo inge :(
                this.matriz[i][j] = 1;
            } else {
                this.matriz[i][j] = 0;
            }
        }
    }

    this.dibujarMatriz();
}

// Ejercicio 20: 
Ejercicio20(){
    this.vaciarMatriz();

    const tamanoRombo = 4 

    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            if (i < tamanoRombo && j < tamanoRombo - i) {
                this.matriz[i][j] = 1;
            }
            else if (i < tamanoRombo && j >= this.columnas - tamanoRombo + i) {
                this.matriz[i][j] = 1;
            }
            else if (i >= this.filas - tamanoRombo && j < tamanoRombo - (this.filas - 1 - i)) {
                this.matriz[i][j] = 1;
            }
            else if (i >= this.filas - tamanoRombo && j >= this.columnas - tamanoRombo + (this.filas - 1 - i)) {
                this.matriz[i][j] = 1;
            }
            else {
                this.matriz[i][j] = 0;
            }
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 21: 
Ejercicio21() {
    this.vaciarMatriz();
    for (let i = 0; i < this.filas; i++) {
        for (let j = 0; j < this.columnas; j++) {
            this.matriz[i][j] = (i + j) % 2;
        }
    }
    this.dibujarMatriz();
}

// Ejercicio 22: 
Ejercicio22() {
    this.vaciarMatriz();
    const centro = Math.floor(this.filas / 2);
    for (let i = 0; i <= centro; i++) {
        for (let j = i; j < this.columnas - i; j++) {
            this.matriz[i][j] = 1;
            this.matriz[this.filas - i - 1][j] = 1;
        }
    }
    this.dibujarMatriz();
}

    

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
             
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#8e44ad"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e74c3c"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "#50aa69"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("3", x + ancho / 2, y + alto / 2);
    }

    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("4", x + ancho / 2, y + alto / 2);
    }

    
    DibujarCinco(x, y, ancho, alto) {
        this.ctx.fillStyle = "#1d3235"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("5", x + ancho / 2, y + alto / 2);
    }

    DibujarSeis(x, y, ancho, alto) {
        this.ctx.fillStyle = "#5c9da6"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("6", x + ancho / 2, y + alto / 2);
    }

    DibujarSiete(x, y, ancho, alto) {
        this.ctx.fillStyle = "#a65c78"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("7", x + ancho / 2, y + alto / 2);
    }



}