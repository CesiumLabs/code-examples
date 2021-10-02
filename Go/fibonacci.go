package main

import "fmt"

// A simple function to get fibonacci output.
func fibonacci(n uint64) uint64 {
	if n <= 1 {
		return 1
	} else {
		return fibonacci(n-1) + fibonacci(n-2)
	}
}

func main() {
	// It would print "fib(10) = 55".
	fmt.Println("fib(10) = {}", fibonacci(10))
}
