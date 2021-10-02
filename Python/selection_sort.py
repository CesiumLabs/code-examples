A=[]
#getting user inputs for the size array
n=int(input("Enter the size of the array :"))

#getting user inputs for the array & saving user inputs in the array
for i in range(n):
    v=int(input("Enter the values :"))
    A.append(v)

#function for selection sort in ascending order
def selectionsort(A):
    n=len(A)
    for j in range(0,n-1):
        smallest=j
        for i in range(j+1,n):
            if A[i]<A[smallest]:
                smallest=i
        A[j],A[smallest]=A[smallest],A[j]

#function for selection sort in descending order
def dselectionsort(A):
    n=len(A)
    for j in range(0,n-1):
        largest=j
        for i in range(j+1,n):
            if A[i]>A[largest]:
                largest=i
        A[j],A[largest]=A[largest],A[j]

#----main----
print(A)
selectionsort(A)
print("sorted array in ascending order")
print(A)
dselectionsort(A)
print("sorted array in descending order")
print(A)
