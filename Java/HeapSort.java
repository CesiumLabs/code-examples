public class HeapSort {

	    public void heapSort(int arr[])
	    {
	        int temp;
	 
	        for (int i = arr.length / 2 - 1; i >= 0; i--)               
	        {
	            heapify(arr, arr.length, i);
	        }
	 
	        for (int i = arr.length - 1; i > 0; i--)                          
	        {
	            temp = arr[0];                                                 
	            arr[0] = arr[i];
	            arr[i] = temp;
	            heapify(arr, i, 0);                                            
	        }
	    }
	 
	    void heapify(int arr[], int n, int i)
	    {
	        int MAX = i; 
	        int left = 2 * i + 1; 
	        int right = 2 * i + 2; 
	        int temp;

	        if (left < n && arr[left] > arr[MAX])            
	        {
	            MAX = left;
	        }
	 
	        if (right < n && arr[right] > arr[MAX])           
	        {
	            MAX = right;
	        }
	 
	        if (MAX != i) 
	        {                                              
	            temp = arr[i];
	            arr[i] = arr[MAX];
	            arr[MAX] = temp;
	            heapify(arr, n, MAX);
	        }
	    }
	 
	    void display(int arr[])             //view array
	    {  
	        for (int i=0; i<arr.length; ++i) 
	        {
	            System.out.print(arr[i]+" ");
	        } 
	    } 
	 
	    public static void main(String args[])
	    {
	        int arr[] = { 4, 15, 6 , 2, 11, 25, 10 };
	 
	        HeapSort ob = new HeapSort();
	        ob.heapSort(arr);
	        ob.display(arr);
	    }
	

}
