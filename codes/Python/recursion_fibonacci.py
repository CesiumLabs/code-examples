from functools import reduce
recursion = 5
fibo = reduce(lambda x, _: x + [x[-2] + x[-1]], [0] * (recursion-2), [0, 1])
print(fibo)
