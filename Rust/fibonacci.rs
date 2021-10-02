/**
compile with
rustc fibonacci.rs
./fibonacci
**/

// A simple function to get fibonacci output.
fn fibonacci(n: u64) -> u64 {
    match n {
        0 | 1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

fn main() {
    // It would print "fib(10) = 55".
    println!("fib(10) = {}", fibonacci(10));
}