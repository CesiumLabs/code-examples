def tribonacci(n: int) -> int:
    if n==1: 
        return 1
    elif n==2:
        return 1
    elif n==0:
        return 0
    memo=[0]*(n+1)
    memo[0]=0
    memo[1]=1
    memo[2]=1
    for ele in range(3,n+1):
        memo[ele]=memo[ele-1]+memo[ele-2]+memo[ele-3]
    return memo[n]

#take user input
inp=int(input("Upto how many numbers should I calculate tribonacci? "))

if inp<=0:
    print("Enter a positive number")
else:
    print("The required tribonacci sequence is: ")
    for ele in range(inp):
        print(tribonacci(ele),end=" ")
    print()
