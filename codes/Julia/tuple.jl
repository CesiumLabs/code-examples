"""Returns the tuple (F(n), F(n+1))."""
fib_bk(x::Int) = fib_bk(BigInt(x))

function fib_bk(n::BigInt)
	if n == 0
		return (BigInt(0), BigInt(1))
	else
		a, b = fib_bk(div(n,2))
		c = a * (b * BigInt(2) - a)
		d = a * a + b * b
		if iseven(n)
			return (c, d)
		else
			return (d, c + d)
        end
    end
end
print(fib_bk(50))