def maxSubArraySum(arr,N):

    maxm_sum=arr[0]
    curr_sum=0
        
    for ele in arr:
        curr_sum+=ele
        if curr_sum>0:
            if curr_sum>maxm_sum:
                maxm_sum=curr_sum
        else:
                
            if curr_sum>maxm_sum:
                maxm_sum=curr_sum
            curr_sum=0
    return maxm_sum

print("Enter array elements with space")
arr=list(map(int,input().split()))
maxm_sum=maxSubArraySum(arr,len(arr))
print("Maximum subarray sum :",maxm_sum)