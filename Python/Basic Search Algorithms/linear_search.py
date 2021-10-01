def linear_search(l,t):
    for i in range(len(l)):
        if l[i]==t:
            return i
    return None

def verify(i):
    if i is not None:
        print("Target found at: ",i)
    else:
        print("Target not found in list")


arr=[i for i in range(1,10)]
res=linear_search(arr,5)
verify(res)