class Materia {
  constructor(nombremateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadinscrito) {
      this.nombremateria = nombremateria;
      this.sigla = sigla;
      this.docente = docente;
      this.horarios = horarios;
      this.aula = aula;
      this.prerequisito = prerequisito;
      this.carrera = carrera;
      this.universidad = universidad;
      this.cantidadinscrito = cantidadinscrito;
  }

  //CREAR
  NombreMateria() { return "El nombre de la materia es " + this.nombremateria; }
  Sigla() { return 'Su sigla es ' + this.sigla; }
  Docente() { return 'El docente de la materia es ' + this.docente; }
  Horarios() { return 'Los días de clases son ' + this.horarios; }
  Aula() { return 'El aula de la materia es ' + this.aula; }
  Prerequisito() { return 'Los requisitos para ingresar a esa materia son ' + this.prerequisito; }
  Carrera() { return 'La carrera es ' + this.carrera; }
  Universidad() { return 'La universidad es ' + this.universidad; }
  CantidadInscrito() { return 'El número de inscritos son ' + this.cantidadinscrito; }

  //MODIFICAR
  modificar_NombreMateria() {
    const nuevoNombre = prompt('Ingrese un nuevo nombre de la materia:', this.nombremateria);
    const nombreValido = /^[A-Za-z0-9]+$/.test(nuevoNombre); 
  
    if (nuevoNombre && nombreValido) {
      this.nombremateria = nuevoNombre;
    } else {
      alert('El nombre no debe contener signos, espacios vacíos.');
    }
  }
  
  modificar_Sigla() {
    let nuevaSigla = prompt('Ingrese las nuevas siglas):', this.sigla);
    if (nuevaSigla && nuevaSigla.trim() !== '') {
      this.sigla = nuevaSigla;
    } else {
      alert('Error: Las Siglas no deben estar vacíos.');
    }
  }

  modificar_Docente() {
    let nuevoDocente = prompt('Ingrese el nombre del Docente:', this.docente);
    const nombreValido = /^[A-Za-z]+$/.test(nuevoDocente.trim());
  
    if (nuevoDocente && nombreValido) {
      this.docente = nuevoDocente;
    } else {
      alert('Error: El nombre del Docente no debe contener números, signos ni estar vacío.');
    }
  }
  
  modificar_Horarios() {
    let nuevosHorarios = prompt('Ingrese los nuevos horarios):', this.horarios);
    if (nuevosHorarios && nuevosHorarios.trim() !== '') {
      this.horarios = nuevosHorarios;
    } else {
      alert('Error: Los horarios no deben estar vacíos.');
    }
  }
  
  modificar_Aula() {
    let nuevaAula = prompt('Ingrese las nuevas siglas):', this.aula);
    if (nuevaAula && nuevaAula.trim() !== '') {
      this.aula = nuevaAula;
    } else {
      alert('Error: Las Aulas no deben estar vacíos.');
    }
  }

  modificar_Prerequisito() {
    let nuevoPrerequisito = prompt('Ingrese los prerequisitos):', this.prerequisito);
    if (nuevoPrerequisito && nuevoPrerequisito.trim() !== '') {
      this.prerequisito = nuevoPrerequisito;
    } else {
      alert('Error: Los prerequisitos no deben estar vacíos.');
    }
  }

  modificar_Carrera() {
    let nuevaCarrera = prompt('Ingrese carrera:', this.carrera);
    const nombreValido = /^[A-Za-z]+$/.test(nuevaCarrera.trim());
  
    if (nuevaCarrera && nombreValido) {
      this.carrera = nuevaCarrera;
    } else {
      alert('Error: La carrera no debe contener números, signos ni estar vacío.');
    }
  }

  modificar_Universidad() {
    let nuevaUniversidad = prompt('Ingrese la universidad:', this.universidad);
    const nombreValido = /^[A-Za-z]+$/.test(nuevaUniversidad.trim());
  
    if (nuevaUniversidad && nombreValido) {
      this.universidad = nuevaUniversidad;
    } else {
      alert('Error: La Universidad no debe contener números, signos ni estar vacío.');
    }
  }

  modificar_CantidadInscrito() {
    let nuevaCantidad = prompt('Ingrese la nueva cantidad de inscritos (solo números):', this.cantidadinscrito);
    const cantidadValida = /^[0-9]+$/.test(nuevaCantidad.trim());
  
    if (nuevaCantidad && cantidadValida) {
      this.cantidadinscrito = nuevaCantidad;
    } else {
      alert('Error: Solo se permite ingresar digitos, no letras, no signos ni valores vacíos.');
    }
  }
  

  //ELIMINAR
  Eliminar_NombreMateria() { this.nombremateria = undefined; }
  Eliminar_Sigla() { this.sigla = undefined; }
  Eliminar_Docente() { this.docente = undefined; }
  Eliminar_Horarios() { this.horarios = undefined; }
  Eliminar_Aula() { this.aula = undefined; }
  Eliminar_Prerequisito() { this.prerequisito = undefined; }
  Eliminar_Carrera() { this.carrera = undefined; }
  Eliminar_Universidad() { this.universidad = undefined; }
  Eliminar_CantidadInscrito() { this.cantidadinscrito = undefined; }
}

//Lista de materias
let materias = [
  new Materia('Calculo 1', 'MAT-132', 'Ing Victor Hugo Aspiazu', 
    'Lunes 7:30-9:00, Miercoles 7:30-9:00', '10 AULA A-N4',
    'MAT-030', 'Ingenieria Industrial', 'UCB', 33),
  new Materia('Fisica 1', 'FIS-111', 'Ing Victor Hugo Lobo', 
    'Lunes 9:30-10:50, Miercoles 9:30-10:50', 'AULA E 2-5',
    'Ninguno', 'Ingenieria Industrial', 'UCB', 45),
  new Materia('Probabilidad y Estadistica', 'MAT-143', 'Lic Silvia Vaca',
    'Martes 10:50-12:20, Jueves 10:50-12:20', 'AULA D 2-1',
    'Ninguno', 'Ingenieria Industrial', 'UCB', 27),
  new Materia( 'Antropologia', 'FHC-101', 'Lic Exalta De la Barra',
    'Martes 9:10-10:40, Jueves 9:10-10:40', 'AULA A-N3',
    'Ninguno', 'Ingenieria Industrial', 'UCB', 60),
  new Materia( 'Programacion 1', 'SIS-112', 'Ing Eddy Escalante',
    'Lunes 10:50-12:20, Viernes 9:10-11:30', 'C 2-2',
    'SIS-111', 'Ingenieria Industrial', 'UCB', 15),
  new Materia('Manufactura y Mecanizado', 'IND-112', 'Ing Jorge Salvatierra',
    'Martes 7:30-9:00, Jueves 7:30-9:00, Viernes 7:30-9:00', '12 AULA A-N4, AULA F 1-2',
    'IND-111', 'Ingenieria Industrial', 'UCB', 14),
  new Materia('Laboratorio ', 'FIS-111', 'Ing. Roberto Alvarez',
    'Miercoles 10:50-12:20', 'Lab.Procesos', 'Ingenieria Industrial', 'UCB', 16
  ),
];


const materiaSelect = document.getElementById('materiaSelect');
materias.forEach((materia, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = materia.nombremateria;
  materiaSelect.appendChild(option);
});


function mostrarMateria() {
  const selectedIndex = materiaSelect.value;
  const materia = materias[selectedIndex];

  document.getElementById('NombreMateria').textContent = materia.NombreMateria();
  document.getElementById('Sigla').textContent = materia.Sigla();
  document.getElementById('Docente').textContent = materia.Docente();
  document.getElementById('Horarios').textContent = materia.Horarios();
  document.getElementById('Aula').textContent = materia.Aula();
  document.getElementById('Prerequisito').textContent = materia.Prerequisito();
  document.getElementById('Carrera').textContent = materia.Carrera();
  document.getElementById('Universidad').textContent = materia.Universidad();
  document.getElementById('CantidadInscrito').textContent = materia.CantidadInscrito();
}


function modificarMateria() {
  const selectedIndex = materiaSelect.value;
  const materia = materias[selectedIndex];

  materia.modificar_NombreMateria();
  materia.modificar_Sigla();
  materia.modificar_Docente();
  materia.modificar_Horarios();
  materia.modificar_Aula();
  materia.modificar_Prerequisito();
  materia.modificar_Carrera();
  materia.modificar_Universidad();
  materia.modificar_CantidadInscrito();

  
  materiaSelect.options[selectedIndex].textContent = materia.nombremateria;
  mostrarMateria();
}

  
  function eliminarMateria() {
  const selectedIndex = materiaSelect.value;
  materias.splice(selectedIndex, 1);  

  
  materiaSelect.remove(selectedIndex);
  limpiarMostrar();
}

  
  function limpiarMostrar() {
    document.getElementById('NombreMateria').textContent = '';
    document.getElementById('Sigla').textContent = '';
    document.getElementById('Docente').textContent = '';
    document.getElementById('Horarios').textContent = '';
    document.getElementById('Aula').textContent = '';
    document.getElementById('Prerequisito').textContent = '';
    document.getElementById('Carrera').textContent = '';
    document.getElementById('Universidad').textContent = '';
    document.getElementById('CantidadInscrito').textContent = '';
}
