using System;

namespace agosto2018
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            int[] arreglo = new int[] { 6, 3, 9, 5, 2 };

            for (int i = 0; i < arreglo.Length; i++)
            {
                if (EsPrimo(arreglo[i]))
                {
                    Console.WriteLine(arreglo[i]+" es primo");
                }
                else
                {
                    Console.WriteLine(arreglo[i] + " no es primo");
                }
            }


        }

        public static bool EsPrimo(int number)
        {
            if (number < 2)
            {
                return false;
            }

            for (int i = 2; i < number; i++)
            {
                if (number % i == 0)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
