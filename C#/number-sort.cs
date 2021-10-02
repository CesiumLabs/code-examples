using System;

public class Sort
{
    public static void Main()
    {
        int[] myArr= new int[7] {1,9,728,320,123,845,21};
        Array.Sort(myArr);

        foreach (int val in myArr)
            {
              Console.WriteLine(val);
            }
    }
}
