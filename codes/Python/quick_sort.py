#array declaration
arr=[]
n=int(input("Enter the array size: ")) #getting the array size

#function to get user inputs
def userinputs(arr):
    for i in range(n):
        v= int(input("Enter a number: "))#add the elements to the array
        arr.append(v)

#function for partition
def partition(arr,start,end):
    i=start-1#getting the index of the smallest element
    pivot=arr[end] #get an elemt to check

    for j in range(start,end):
        if arr[j]<=pivot: #if current element <=pivot
            i+=1 #increment the index of smallest element
            arr[i],arr[j]=arr[j],arr[i] #swap the elements
    #exchanging
    arr[i+1],arr[end]=arr[end],arr[i+1]
    return(i+1)

#function for quicksort
def quickSort(arr,start,end):
    if (start<end):
        #partition index q
        q=partition(arr,start,end)
        #sorting the elements left & right partition
        quickSort(arr,start,q-1) #left partition
        quickSort(arr,q+1,end)#right partition



#----main prog---

#calling quick sort

userinputs(arr)
print("entered arraylist\n", arr)

partition(arr,0,n-1)
quickSort(arr,0,n-1)

print("sorted arraylist\n", arr)