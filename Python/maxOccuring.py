def maxOccuring(string):
    frequency_count={}
    stringset=set(string)
    for i in stringset:
        frequency_count[i]=string.count(i)
    print(frequency_count)
    max_value,max_keys=-1,-1
    frequency_keys=list(frequency_count.keys())
    
    for x in frequency_keys:
        if frequency_count[x]> max_value:
            max_value=frequency_count[x]
            max_keys=x
    print(max_keys,max_value)

ip=input("Enter String")
print(maxOccuring(ip))
