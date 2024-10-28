class Persona:
    def __init__(self, nombre, edad, carrera, universidad):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad = universidad


    # Método para mostrar la información de la persona
    def mostrar_informacion(self):
        print(f"Nombre: {self.nombre}")
        print(f"Edad: {self.edad}")
        print(f"Carrera: {self.carrera}")
        print(f"Universidad: {self.universidad}")


    # Métodos para modificar los atributos
    def modificar_nombre(self, nuevo_nombre):
        if not nuevo_nombre.strip() or not all(char.isalpha() for char in nuevo_nombre):
         print("Error: El nombre no debe estar vacío ni contener digitos o signos.")
        else:
         self.nombre = nuevo_nombre
        print(f"Nombre ha sido modificado a: {self.nombre}")


    def modificar_edad(self, nueva_edad):
        if not nueva_edad.isdigit() or int(nueva_edad) <= 0 or int(nueva_edad) > 110:
         print("Error: La edad debe ser un número positivo menor a 110 y solo se aceptan digitos.")
        else:
         self.edad = int(nueva_edad)
        print(f"Edad ha sido modificada a: {self.edad}")


    def modificar_carrera(self, nueva_carrera):
        if not nueva_carrera.strip() or not all(char.isalpha() for char in nueva_carrera):
            print("Error: La carrera no debe estar vacio ni contener digitos o signos.")
        else:
            self.carrera = nueva_carrera
            print(f"Carrera ha sido modificado a: {self.carrera}")


    def modificar_universidad(self, nueva_universidad):
        if not nueva_universidad.strip() or not all(char.isalpha() for char in nueva_universidad):
            print("Error. Universidad no debe estar vacio ni contener digitos o signos. ")
        else:
            self.universidad = nueva_universidad
            print(f"Universida ha sido modificado a: {self.universidad}")


    # Métodos para "eliminar" los atributos (asignar None)

    def eliminar_nombre(self):
        self.nombre = None
        print("Nombre ha sido eliminado.")

    def eliminar_edad(self):
        self.edad = None
        print("Edad ha sido eliminada.")

    def eliminar_carrera(self):
        self.carrera = None
        print("Carrera ha sido eliminada.")

    def eliminar_universidad(self):
        self.universidad = None
        print("Universidad ha sido eliminada.")


# Interfaz de usuario en la consola

def menu():
    print("\nMenú de opciones:")
    print("1. Mostrar información")
    print("2. Modificar nombre")
    print("3. Modificar edad")
    print("4. Modificar carrera")
    print("5. Modificar universidad")
    print("6. Eliminar nombre")
    print("7. Eliminar edad")
    print("8. Eliminar carrera")
    print("9. Eliminar universidad")
    print("0. Salir")


# Crear una instancia de la clase Persona

persona = Persona('Miguel', 18, 'Ing. Industrial', 'UCB')

# Ciclo principal de la aplicación

while True:
    menu()
    opcion = input("Seleccione una opción: ")

    if opcion == '1':
        persona.mostrar_informacion()
    elif opcion == '2':
        nuevo_nombre = input("Ingrese el nuevo nombre : ")
        persona.modificar_nombre(nuevo_nombre)
    elif opcion == '3':
        nueva_edad = input("Ingrese la nueva edad : ")
        persona.modificar_edad(nueva_edad)
    elif opcion == '4':
        nueva_carrera = input("Ingrese la nueva carrera : ")
        persona.modificar_carrera(nueva_carrera)
    elif opcion == '5':
        nueva_universidad = input("Ingrese la nueva universidad : ")
        persona.modificar_universidad(nueva_universidad)
    elif opcion == '6':
        persona.eliminar_nombre()
    elif opcion == '7':
        persona.eliminar_edad()
    elif opcion == '8':
        persona.eliminar_carrera()
    elif opcion == '9':
        persona.eliminar_universidad()
    elif opcion == '0':
        print("Saliste del programa")
        break
    else:
        print("Opción no válida. Ingrese una opción del menú")
