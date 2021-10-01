
'''
Randomly suffle till sorting done
'''
import random
import sys 
from load import load_numbers

numbers=load_numbers(sys.argv[1])

print(numbers) #[5, 4, 6, 89, 23]


def is_sorted(values):
    for index in range(len(values)-1):
      if values[index]>values[index+1]:
          return False
    return True  

def bogo_sort(values):
    while not is_sorted(values):
        random.shuffle(values)
    return values

print(bogo_sort(numbers)) #[4, 5, 6, 23, 89], can take any random number of attemps due to randomized shuffle
