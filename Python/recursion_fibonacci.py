def fibo_recursion(n):
   if n <= 1:
       return n
   else:
       return(fibo_recursion(n-1) + fibo_recursion(n-2))

n = int(input("Please enter an integer"))

if n <= 0:
   print("Enter a positive integer!")
else:
   print("Fibonacci sequence:")
   for i in range(n):
       print(fibo_recursion(i))