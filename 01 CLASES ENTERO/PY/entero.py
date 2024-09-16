class Entero:
    def __init__(self, Numero):
        self.Num = Numero
        
    def setNum(self):
        input_value = input("Enter a number: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num
    
    def showNum(self):
        print(self.getNum())

    def showResultado(self, respuesta):
        print(respuesta)

    def incrementar(self):
        self.Num += 1 

    def decrementar(self):
        self.Num -= 1 

    def esParImpar(self):
        return (self.getNum() % 2 == 0)

    def esPerfecto(self):
        n = self.getNum()
        suma_divisores = sum(i for i in range(1, n) if n % i == 0)
        return suma_divisores == n

    def esPrimo(self):
        n = self.getNum()
        if n <= 1:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True

    def calcularFibonacci(self):
        n = self.getNum()
        if n < 0:
            return "El índice debe ser un número entero no negativo."
        elif n == 0:
            return 0
        elif n == 1:
            return 1
        else:
            a, b = 0, 1
            for _ in range(n - 1):
                a, b = b, a + b
            return b

    def menu(self):
        while True:
            print("\nMenu:")
            print("1. Establecer un nuevo numero.")
            print("2. Mostrar el numero actual.")
            print("3. Incrementar el numero")
            print("4. Decrementar el numero")
            print("5. Verificar si es Par o Impar")
            print("6. Verificar si el numero es Perfecto")
            print("7. Verificar si el numero es Primo")
            print("8. Calcular el numero en la posicion de Fibonacci")
            print("9. Salir")

            opcion = input("Ingrese una opción: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incrementar()
            elif opcion == '4':
                self.decrementar()
            elif opcion == '5':
                if self.esParImpar():
                    print("El numero es par.")
                else: 
                    print("El numero es impar")
            elif opcion == '6':
                if self.esPerfecto():
                    print("El numero es perfecto.")
                else:
                    print("El numero no es perfecto.")
            elif opcion == '7':
                if self.esPrimo():
                    print("El numero es primo.")
                else:
                    print("El numero no es primo.")
            elif opcion == '8':
                print(f"El número en la posición {self.getNum()} de la serie de Fibonacci es {self.calcularFibonacci()}.")
            elif opcion == '9':
                print("Chau chau")
                break
            else:
                print("Opción inválida. Intente de nuevo")

# Ejemplo de uso
numero = Entero(10)
numero.menu()
