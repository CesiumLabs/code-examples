#return if element is present or not as true or false

def recursive_binary_search(l,t):
    if len(l)==0:
        return False
    else:
        mid=(len(l))//2

        if l[mid]==t:
            return True
        else:
            if l[mid]<t:
                return recursive_binary_search(l[mid+1:],t)
            else:
                return recursive_binary_search(l[:mid],t)


def verify(i):
    print("Target found: ",i)
   
arr=[i for i in range(1,10)]
res=recursive_binary_search(arr,6) #True
verify(res)