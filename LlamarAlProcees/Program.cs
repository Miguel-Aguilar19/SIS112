int [] arr = {1,2,3,8};
List<int[]> permutations = new List<int[]>();
permutations = GenerarPermutations(arr, 0, Array.MaxLength -1, permutations); //Envia arr.Length -1 , por ser "0" indizado

foreach (int[] permutation in permutations)
{
    Console.WriteLine(string.Join(", ", permutation));
}

static List<int[]>GenerarPermutations(int[] arr, int l, int r, List<int[]>permutationsList)
{
    if (l==r)
    {
        //Agregar arreglo actual a la lista de permutaciones 
        int [] permutation =new int[arr.Length];
        Array.Copy(arr, 0, permutation,0, arr.Length);
        permutationsList.Add(permutation);
        return permutationsList;
    }

    for (int i=l; i<=r; i++)
    {
        //Intercambia arr[1] with arr[i]
        Swap(arr,l, i);

        //Genera permutaciones para el subarray desde arr[l+1] hasta arr[r]
        permutationsList= GenerarPermutations(arr,l+1,r,permutationsList);

        //Intercambia arr[l] de nuevo con arr[i], para ir explorando las siguientes posibilidades
        Swap(arr,l,i);
    }
    return permutationsList;

}
static void Swap(int[] arr, int i, int j)
{
    int temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}