class ListaEnteros:
    def __init__(self):
        self.lista = []

    def agregar(self, valor):
        self.lista.append(valor)

    def eliminar_por_indice(self, indice):
        if 0 <= indice < len(self.lista):
            del self.lista[indice]

    def buscar(self, valor):
        try:
            return self.lista.index(valor)
        except ValueError:
            return -1

    def ordenar(self):
        self.lista.sort()                    