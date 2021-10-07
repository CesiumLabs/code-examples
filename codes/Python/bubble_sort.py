"""
A simple bubble sort algorithm.
Requires Python 3.
"""


def bubble_sort(list_: list, /) -> None:
    """
    Since this takes an object of type list which is mutable,
    we don't necessarily need to return it.
    """
    n = len(list_)
    while n > 1:
        temp_n = 0
        for i in range(1, n):
            if list_[i - 1] > list_[i]:
                list_[i - 1], list_[i] = list_[i], list_[i - 1]
                temp_n = i
        n = temp_n


arr = [1, 3, 2, 3, 4, 5, 62, 3, 12, 55, 7, 8, 32, 12, 38, 43, 62, 23]

bubble_sort(arr)  # Sort the array.

print(arr)  # Print the sorted array.
