class Persona {
    constructor(nombre, edad, carrera,universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;
    }
  
    //CREAR
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
      return 'Estudio en la' + this.universidad;
    }
  
  
    //MODIFICAR
    modificar_saludo() {
      this.nombre = prompt('Ingrese un nuevo nombre');
        while (/\d/.test(this.nombre) || this.nombre.trim() === '') {
          alert('El nombre no debe contener digitos o estar vacio la entrada. Inténtelo de nuevo.');
          this.nombre = prompt('Ingrese un nuevo nombre');
      }
      return '¡Hola, mi nombre es ' + this.nombre;
  }

    modificar_cumpleanios() {
      this.edad = prompt('Ingrese su edad nuevamente');
    while (!/^\d+$/.test(this.edad) || parseInt(this.nombre)<= 0) {
        alert("La edad no puede ser un número negativo y estar vacio la entrada. Intentalo de nuevo.");
        this.edad = prompt('Ingrese su edad');
      }
      return 'Tengo ' + this.edad + ' años.';
    }

    modificar_estudiar() {
      this.carrera = prompt('Ingrese tu carrera');
      while (/\d/.test(this.carrera) || this.carrera.trim() === '') {
        alert('No debe estar vacio la entrada, ni contener digitos. Intentalo de nuevo.');
        this.carrera = prompt('Ingrese tu carrera');
      }
      return 'Estoy estudiando '  + this.carrera;
    }

    modificar_universidad() {
      this.universidad = prompt("Ingrese el nombre de tu universidad")
      while (/\d/.test(this.universidad) || this.universidad.trim() === '') {
        alert('No debe estar vacio la entrada, ni contener digitos. Intentalo de nuevo.');
        this.universidad = prompt('Ingrese el nombre de tu universidad ');
      }
      return'En la  ' +  this.universidad;
    }

  
    //ELIMINAR

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



