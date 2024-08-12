using System;

class Program2
{
    static void Permutar(char[] lista, int inicio, int fin)
    {
        if (inicio == fin)
        {
            Console.WriteLine(new string(lista));
        }
        else
        {
            for (int i = inicio; i <= fin; i++)
            {
                Intercambiar(ref lista[inicio], ref lista[i]);
                Permutar(lista, inicio + 1, fin);
                Intercambiar(ref lista[inicio], ref lista[i]); // Deshacer el intercambio
            }
        }
    }

    static void Intercambiar(ref char a, ref char b)
    {
        char temp = a;
        a = b;
        b = temp;
    }

    static void Main(string[] args)
    {
        char[] lista = { 'A', 'B', 'C' };
        int n = lista.Length;
        Permutar(lista, 0, n - 1);
    }
}