def merge_sort(list):
    '''
    Sorts a list in ascending order
    Returns a new sorted list
    Runs in O(n log n) time
    Divide : Find the midpoint of list and divide into sublists
    Conquer : Recursively sort the sublists created from previous step
    Combine : Merge the sorted sublists created in previous step
    '''

    if len(list)<=1:
        return list

    left_half,right_half=split(list)
    left=merge_sort(left_half)
    right=merge_sort(right_half)
    return merge(left,right)

def split(list):
    '''
    Divides the unsorted list at midpoint into sublists
    Returns two sublists - left and right
    Runs in O(log n) time
    '''

    mid = len(list)//2
    left = list[:mid]
    right = list[mid:]

    return left,right

def merge(left,right):
    '''
    Merges two lists (arrays), sorting them in the process
    Returns a new merged list
    Runs in O(n) time
    Just append the smaller value from the left and right lists.
    '''

    l=[]
    i=0
    j=0
    #Below condition works for equal left and right lists
    while i<len(left) and j<len(right):
        if left[i]<right[j]:
            l.append(left[i])
            i+=1
        else:
            l.append(right[j])
            j+=1

    #Below will work if right list ends first and elements are left in left list
    while i < len(left):
        l.append(left[i])
        i+=1

    #Below will work if left list ends first and elements are left in right list
    while j < len(right):
        l.append(right[j])
        j+=1
    
    return l


def verify_sorted(list):
    n=len(list)
    if n==0 or n==1:
        return True
    return list[0]<list[1] and verify_sorted(list[1:])

alist=[45,67,25,8,9,22]
l=merge_sort(alist)
print(l) # [8 9 22 25 45 67]
print(verify_sorted(l)) #True
print(verify_sorted(alist)) #False