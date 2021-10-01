newlist=[1,2,3]
result=newlist[0]
print(result) # 1 

newlist.append(4)
print(*newlist) # 1 2 3 4

seclist=[5,6,7,8]
newlist.extend(seclist)
print(*newlist) # 1 2 3 4 5 6 7 8