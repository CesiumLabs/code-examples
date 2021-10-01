public class Sort
{
    public static void Main()
    {
        int[] myArr= new int[5] {1,5,3,8,21};
        Array.Sort(myArr);

        foreach (int val in myArr)
            {
              Console.WriteLine(val);
            }
    }
}
