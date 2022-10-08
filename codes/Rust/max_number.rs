use std::io::{self, Write};

fn main() {
    let mut numbers = vec![];
    while numbers.is_empty() {
        print!("Enter your numbers separated with spaces: ");
        io::stdout().flush().expect("Failed to flush console.");
        let line = input();
        numbers = line.trim().split(' ').filter_map(|x| x.parse::<i32>().ok()).collect::<Vec<i32>>();        
    }
    let max_number = numbers.iter().max().expect("Failed to get the maximum number.");
    println!("Maximum number from {:?} is {}", numbers, max_number);
}

fn input() -> String {
    let mut line = String::new();
    io::stdin().read_line(&mut line).expect("Failed to read input line");
    line
}