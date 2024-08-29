class Persona {
    constructor(nombre, edad, carrera,universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
    }
  
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre;
    }
  
    cumpleanios() {
      return ' Tengo ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera;
    }

    uni() {
      return 'Me encuentro en la' + this.universidad;
    }

    modificar_saludo() {
      this.nombre = prompt('Ingrese un nuevo nombre')
      return '¡hola, mi nombre es ' +  this.nombre;
    }

    modificar_cumpleanios() {
      this.edad = prompt('Ingrese tu edad nuevamente')
      return 'Tengo ' + this.edad + ' años.';
    }

    modificar_estudiar() {
      this.carrera = prompt('Ingrese tu carrera')
      return 'Estoy estudiando '  + this.carrera;
    }

    modificar_universidad() {
      this.universidad = prompt("Ingrese en nombre de la universidad que estas")
      return'En la  ' +  this.universidad;
    }

    //Eliminar funciones

    eliminar_nombre() {
      this.nombre = undefined;
      
    }

    eliminar_edad() {
      this.edad = undefined;
    }

    eliminar_carrera() {
      this.carrera = undefined;
    }

    eliminar_universidad() {
      this.universidad = undefined;
    }

  }



  // Crear una instancia de la clase Persona
  const persona = new Persona('Miguel', 18, 'Ing. Industrial', ' UCB');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const uni = document.getElementById('universidad');


  
  // Función para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }

  // Funcion para universidad
  function botonUni() {
    uni.textContent = persona.uni();
  }

  // funcion para modificar_saludo
  function botonModificar_Saludar() {
    saludar.textContent = persona.modificar_saludo();
  }

  //funcion para modificar_cumpleanos
  function botonModificar_Cumple() {
    edad.textContent = persona.modificar_cumpleanios();
  }

  //funcion para modificar_carrera
  function botonModificar_Carrera() {
    carrera.textContent = persona.modificar_estudiar();
  }

  //function para modificar_universidad
  function botonModificar_Universidad() {
    uni.textContent = persona.modificar_universidad();
  }

  //Eliminar
  function botonEliminar_Nombre() {
    saludar.textContent = persona.eliminar_nombre();
  }

  function botonEliminar_Edad() {
    edad.textContent = persona.eliminar_edad();
  }

  function botonEliminar_Carrera() {
    carrera.textContent = persona.eliminar_carrera();
  }

  function botonEliminar_Universidad() {
    uni.textContent = persona.eliminar_universidad();
  }



