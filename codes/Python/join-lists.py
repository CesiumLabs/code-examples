list1 = ["apple", "pear", "orange", "peach"]
list2 = ["pineapple", "watermelon", "grapefruit"]
list3 = ["strawberry", "banana", "lemon"]
range1 = range(5, 9)

joined1 = list1 + list2
joined2 = list1 + list2 + list3

print(joined1) #['apple', 'pear', 'orange', 'peach', 'pineapple', 'watermelon', 'grapefruit']
print(joined2) #['apple', 'pear', 'orange', 'peach', 'pineapple', 'watermelon', 'grapefruit', 'strawberry', 'banana', 'lemon']

#Python >= 3.5 alternative, can join range() and lists, but is a tiny bit slower:
joined3 = [*list1, *list2]
joined4 = [*list1, *list2, *list3]
joined5 = [*list1, *list2, *list3, *range1]

print(joined3) #['apple', 'pear', 'orange', 'peach', 'pineapple', 'watermelon', 'grapefruit']
print(joined4) #['apple', 'pear', 'orange', 'peach', 'pineapple', 'watermelon', 'grapefruit', 'strawberry', 'banana', 'lemon']
print(joined5) #['apple', 'pear', 'orange', 'peach', 'pineapple', 'watermelon', 'grapefruit', 'strawberry', 'banana', 'lemon', 5, 6, 7, 8]