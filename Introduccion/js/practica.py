def Hola_Mundo():
    print("hola mundo")

def obtener_edad():
    edad =input("ingrese tu edad:")
    print("tu edad es:", edad)

print(obtener_edad)

def calcular_edad():
    nacimiento = int(input("ingrese tu año"))
    print ("ingrese el año", nacimiento)
    edad = 2024 - nacimiento
    print("año calculado es:", edad)

Hola_Mundo()
obtener_edad()
calcular_edad()    