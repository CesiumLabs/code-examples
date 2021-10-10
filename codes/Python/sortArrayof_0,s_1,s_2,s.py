# Python program to sort an array with
# 0, 1 and 2 in a single pass

# Function to sort array
def sort012( a, arr_size):
	lo = 0
	hi = arr_size - 1
	mid = 0
	while mid <= hi:
		if a[mid] == 0:
			a[lo], a[mid] = a[mid], a[lo]
			lo = lo + 1
			mid = mid + 1
		elif a[mid] == 1:
			mid = mid + 1
		else:
			a[mid], a[hi] = a[hi], a[mid]
			hi = hi - 1
	return a
	
# Function to print array
def printArray( a):
	for k in a:
		print k

# Driver Program
arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
arr_size = len(arr)
arr = sort012( arr, arr_size)

printArray(arr)

