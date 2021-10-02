import math

def money(x,y):
    minNumCoins=[0]*(x+1)
    for m in range(1,x+1):
        minNumCoins[0]=0
        minNumCoins[m]=math.inf
        for i in range(1,len(y)+1):
            if m>=y[i-1]:
                coins=minNumCoins[m-y[i-1]]+1
                if coins<minNumCoins[m]:
                    minNumCoins[m]=coins
    return minNumCoins[m]
x=int(input(""))
c=[1,3,4]
print(money(x,c))

