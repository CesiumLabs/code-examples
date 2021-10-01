n = int(input("Enter value of n"))
list1 = list(map(int,input("\nEnter list:").strip().split()))[:n]
new_list = []
for i in range(0,n):
    mx = 0
    for j in range(len(list1)):
        if (list1[j] > mx):
            mx = list1[j]
    list1.remove(mx)
    new_list.append(mx)
print(new_list)