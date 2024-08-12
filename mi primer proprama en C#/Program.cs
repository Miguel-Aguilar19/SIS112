using System.Dynamic;
using System.Reflection.Emit;

namespace mi_primer_proprama_en_C_;

class Program
{
    static void Main(string[] args)
    {
        //Primer metodo, mostrar un Hola mundo
       HelloWorld();
       
       //segundo metodo,mostrar la edad por el usuario
       ObtainAge();

       CalculateAge();
       
    }

    public static void HelloWorld (){
        Console.WriteLine("Hello, world!");
    }
    public static void ObtainAge()
    {    
         Console.WriteLine("Put your age:");
       string? edadInput = Console.ReadLine();
       if (string.IsNullOrEmpty(edadInput))
       {
           Console.WriteLine("Put a value");
       }
       else
       {
        int edadInteger = Int32.Parse(edadInput);
         Console.WriteLine("Your age is: " + edadInteger);
       }
       
    }
        
    public static void CalculateAge(){
        Console.WriteLine("Put a year of birth:");
        string? anioNacimientoInput = Console.ReadLine();
        if (string.IsNullOrEmpty(anioNacimientoInput))
        {
            Console.WriteLine("Put a value true");
        }
        else
        {
            int anioNacimiento = Int32.Parse(anioNacimientoInput);
            Console.WriteLine("your age calculate is :" + (2024 - anioNacimiento));
        }
    }
}
