fn fibonacci(num:i32) -> i32 {

    match num {
        num if num <= 0 => 0,
        1 => 1,
        _ => fibonacci(num-1) + fibonacci(num-2)
    }

}

fn main() {

    let (num1, num2, num3, num4) = (-5, 0, 1, 32);

    println!("Fibonacci for {}: {}", num1, fibonacci(num1));
    println!("Fibonacci for {}: {}", num2, fibonacci(num2));
    println!("Fibonacci for {}: {}", num3, fibonacci(num3));
    println!("Fibonacci for {}: {}", num4, fibonacci(num4));

}