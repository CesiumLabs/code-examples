// Problem: Find the kth smallest element in a given array of n elements
// Approach:
// Using Quick Select Algorithm 
// Time Complexity:
// Average Case: O(N)
// Best Case: O(N)
// Worst Case: O(N^2)
// Solution:
#include <bits/stdc++.h>
using namespace std;

// Partition function used in Quick Select same as that used in Quick Sort
// Returns the index of pivot elemnt in sorted array
int partition(int arr[], int l, int r)
{
	int x = arr[r], j = l;
	for (int i = l; i <= r - 1; i++)
    {
		if (arr[i] <= x)
		{
			swap(arr[i], arr[j]);
			j++;
		}
	}
	swap(arr[j], arr[r]);
	return j;
}

// Compare the index returned from Partition function
// with the value of K and find Kth smallest element in array recursively
int kthSmallest(int arr[], int l, int r, int k)
{
	if (0<k && k<=r-l+1)
    {
		int index = partition(arr, l, r);
		if (k == index-l+1)
			return arr[index];
		if (k < index-l+1)
			return kthSmallest(arr, l, index - 1, k);
		return kthSmallest(arr, index + 1, r, k - (index - l + 1));
	}
	return INT_MAX;
}

// Execute Code
int main()
{
    int n;
    cin >> n;
	int a[n];
	for(int i=0;i<n;i++) cin >> a[i];
	int k;
	cin >> k;
	cout << "Kth Smallest: " << kthSmallest(a, 0, n-1, k);
	return 0;
}