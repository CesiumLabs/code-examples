def binary_search(l,t):
    first=0
    last=len(l)-1

    while first <= last:
        mid=(first+last)//2
        if l[mid]==t:
            return mid
        elif l[mid]<t:
            first=mid+1
        else:
            last=mid-1

    return None

def verify(i):
    if i is not None:
        print("Target found at: ",i)
    else:
        print("Target not found in list")

arr=[i for i in range(1,10)]
res=binary_search(arr,8)
verify(res)



    
