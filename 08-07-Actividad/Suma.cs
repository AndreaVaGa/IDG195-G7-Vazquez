using System;

namespace Agosto2018
{
    class MainClass
    {
        public static void Main(string[] args)
        {
			int[] arreglo = new int[] { 4, 5, 6, 9, 7 };
			int suma= Sumar(arreglo);
			int Min= Minimo(arreglo);
            int Max= Maximo(arreglo);
            Console.WriteLine("La suma del arreglo es: " + suma);
            Console.WriteLine("Mínimo: " + Min);
            Console.WriteLine("Máximo: " + Max);

		}


		private static int Sumar(int[] arreglo)
		{
			int suma = 0;

			for (int i = 0; i < arreglo.Length; i++)
			{
				suma += arreglo[i];
			}
            return suma;
		}

		private static int Minimo(int[] arreglo)
		{
			int Min = arreglo[0];

			for (int i = 0; i < arreglo.Length; i++)
			{
				if (arreglo[i] < Min)
				{
					Min = arreglo[i];
				}
			}
            return Min;

		}

		private static int Maximo(int[] arreglo)
		{
			int Max = arreglo[0];

			for (int i = 0; i < arreglo.Length; i++)
			{
				if (arreglo[i] > Max)
				{
					Max = arreglo[i];
				}

			}
            return Max;

			
		}
	}
}
