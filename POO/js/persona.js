class persona {
    constructor(nombre, edad, carrera){
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }

    saludar() {
        console.log('Hola, mi nombre es' + this.nombre + 'y tengo' + this.edad + 'años.'); //console.log es lo mismo que Print
    }

    cumpleaños(){
        this.edad = this.edad + 1;
        console.log('¡Feliz Cumpleaños! Ahora tengo' + this.edad + 'años.');

    }

    estudiar(){
        console.log('Estoy estudiando' + this.carrera);
    }
}

function SaludoPersona1(){
    //crear una instancia de la clase Persona
    const personal = new persona("Miguel", 18, "Ingenieria Industrial"); //declara la variable

    //Llamar a los metodos
    personal.saludar();
}


