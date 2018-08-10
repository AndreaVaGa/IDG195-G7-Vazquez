using System;

namespace agosto2018
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            int[] arreglo = new int[] { 6, 3, 9, 5, 2 };
            bool primo = false;

            if(arreglo[0]%arreglo[0]==1)
            {
                primo = true;
            }
            Console.WriteLine(primo);
        }
    }
}
