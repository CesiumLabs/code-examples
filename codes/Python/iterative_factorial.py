def factorial(n):
    res=1
    if n<2:
      return res
    for i in range(2,n+1):
        res*=i
    return res

print(factorial(int(input("Enter the Number Whose Factorial You Need:"))))
