'''
It can be seen that first element is chosen as pivot and two lists are created 
based on values less than and greater than pivot.

Then same above thing is done for the two lists recursively by selecting new pivot.
When end is reached till single value or no value list, then recursively result is sent upwards.
Takes O(n^2) time in worst case.
Takes O(n log n) time in best and average case.

Select random pivot element to get mostly average case,not the first element.
'''
# Output at each step printed as 
#       [3, 3, 2] 4 [6, 7, 9, 5]
#          [3, 2] 3 []
#             [2] 3 []
#             [5] 6 [7, 9]
#              [] 7 [9]
# [2, 3, 3, 4, 5, 6, 7, 9]

import sys 
from load import load_numbers

numbers=load_numbers(sys.argv[1])

def quicksort(values):
    if len(values)<=1:
        return values
    less_than_pivot=[]
    greater_than_pivot=[]
    pivot=values[0]
    for value in values[1:]:
        if value<=pivot:
            less_than_pivot.append(value)
        else:
            greater_than_pivot.append(value)
    print("%15s %1s %-15s"% (less_than_pivot,pivot,greater_than_pivot))
    return quicksort(less_than_pivot) + [pivot]+quicksort(greater_than_pivot)


sorted_numbers = quicksort(numbers) 
print(sorted_numbers) #[4, 5, 6, 23, 89]

