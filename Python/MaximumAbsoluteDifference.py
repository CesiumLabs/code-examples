'''
You are given an array of N integers, A1, A2 ,…, AN. Return maximum value of f(i, j) for all 1 ≤ i, j ≤ N.
f(i, j) is defined as |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x.
'''

def maxArr(self, A):
        
        mx = -10000000000
        for i in range(len(A)):
            for j in range(len(A)):
                res = abs(A[i]-A[j])+abs(i-j)
                if res > mx:
                    mx = res
        return mx
