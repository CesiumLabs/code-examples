
'''
We use an empty list to keep the minimum value 
that we get from each operation on the original given list
Hence, after all values are moved one by one, we get sorted list
Takes O(n^2) time.
'''

import sys 
from load import load_numbers

numbers=load_numbers(sys.argv[1])

def selection_sort(values):
    sorted_list=[]
    for i in range(0,len(values)):
        index_to_move=index_of_min(values)
        sorted_list.append(values.pop(index_to_move))
    return sorted_list

def index_of_min(values):
    min_index=0
    for i in range(1,len(values)):
        if values[i]<values[min_index]:
            min_index=i
    return min_index

print(selection_sort(numbers)) 
