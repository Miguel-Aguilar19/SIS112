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

    def incrementar(self):
        self.Num += 1

    def decrementar(self):
        self.Num -= 1

    def esParImpar(self):
        return self.getNum() % 2 == 0

    def esPerfecto(self):
        n = self.getNum()
        suma_divisores = sum(i for i in range(1, n) if n % i == 0)
        return suma_divisores == n

    def esPrimo(self, n=None):
        if n is None:
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

    def esArmstrong(self):
        n = self.getNum()
        suma = sum(int(digito) ** 3 for digito in str(n))
        return suma == n

    def esPerfectoGeneralizado(self, k):
        if k <= 0:
            return False
        n = self.getNum()
        suma_divisores = sum(i ** k for i in range(1, n) if n % i == 0)
        return suma_divisores == n

    def calcularFilaPascal(self):
        n = self.getNum()
        fila = [1]
        for i in range(1, n + 1):
            fila.append(fila[i - 1] * (n - i + 1) // i)
        return fila

    def cifrarCesar(self, desplazamiento):
        n = self.getNum()
        resultado = ''
        for caracter in str(n):
            if caracter.isdigit():
                nueva_letra = chr(((ord(caracter) - ord('0') + desplazamiento) % 10) + ord('0'))
                resultado += nueva_letra
            else:
                resultado += caracter
        return resultado

    def tienePrimoGemelo(self):
        n = self.getNum()
        if self.esPrimo(n) and (self.esPrimo(n - 2) or self.esPrimo(n + 2)):
            return True
        return False

    def descomponerEnFactoresPrimos(self):
        n = self.getNum()
        factores = {}
        divisor = 2
        while n > 1:
            potencia = 0
            while n % divisor == 0:
                n //= divisor
                potencia += 1
            if potencia > 0:
                factores[divisor] = potencia
            divisor += 1
        return factores

    def calcularCatalan(self):
        n = self.getNum()
        catalan = 1
        for i in range(n):
            catalan = catalan * 2 * (2 * i + 1) // (i + 2)
        return catalan

    def esMersenne(self):
        n = self.getNum()
        p = 1
        while (2**p - 1) < n:
            p += 1
        return (2**p - 1) == n and self.esPrimo(p)

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
            print("9. Verificar si el número es Armstrong")
            print("10. Verificar si el número es Perfecto Generalizado")
            print("11. Calcular la fila del Triángulo de Pascal")
            print("12. Cifrar el número con el cifrado César")
            print("13. Verificar si el número tiene primo gemelo")
            print("14. Descomponer en factores primos")
            print("15. Calcular el número de Catalan")
            print("16. Verificar si es un número de Mersenne")
            print("17. Salir")

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
                    print("El numero es impar.")
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
                if self.esArmstrong():
                    print("El número es un número de Armstrong.")
                else:
                    print("El número no es un número de Armstrong.")
            elif opcion == '10':
                k = int(input("Ingrese el valor de k: "))
                if self.esPerfectoGeneralizado(k):
                    print(f"El número es perfecto generalizado con respecto a {k}.")
                else:
                    print(f"El número no es perfecto generalizado con respecto a {k}.")
            elif opcion == '11':
                print(f"La fila {self.getNum()} del Triángulo de Pascal es: {self.calcularFilaPascal()}.")
            elif opcion == '12':
                desplazamiento = int(input("Ingrese el desplazamiento para el cifrado César: "))
                print(f"El cifrado César del número es: {self.cifrarCesar(desplazamiento)}.")
            elif opcion == '13':
                if self.tienePrimoGemelo():
                    print("El número tiene un primo gemelo.")
                else:
                    print("El número no tiene un primo gemelo.")
            elif opcion == '14':
                print(f"Los factores primos de {self.getNum()} son: {self.descomponerEnFactoresPrimos()}.")
            elif opcion == '15':
                print(f"El número de Catalan para {self.getNum()} es: {self.calcularCatalan()}.")
            elif opcion == '16':
                if self.esMersenne():
                    print("El número es un número de Mersenne.")
                else:
                    print("El número no es un número de Mersenne.")
            elif opcion == '17':
                print("Chau chau")
                break
            else:
                print("Opción inválida. Intente de nuevo.")

# Ejemplo de uso
numero = Entero(10)
numero.menu()
