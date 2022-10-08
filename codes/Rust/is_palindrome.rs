use std::io::{self, Write};

fn main() {
    print!("Input your string: ");
    std::io::stdout().flush().expect("Failed to flush the console.");
    let line = input();
    let mut string = line.trim().to_string();
    print!("Do you want the check to be case sensitive (Y for yes, anything else for no): ");
    std::io::stdout().flush().expect("Failed to flush the console.");
    let line = input();
    let case_sensitive = line.trim().to_lowercase() == "y";
    if !case_sensitive {
        string = string.to_lowercase();
    }
    let characters = string.chars().collect::<Vec<char>>();
    let characters_length = characters.len();
    for i in 0..(characters_length + 1) / 2 {
        if characters[i] != characters[characters_length - i - 1] {
            println!("It is NOT a palindrome");
            return;
        }
    }
    println!("It is a palindrome");
}

fn input() -> String {
    let mut line = String::new();
    io::stdin().read_line(&mut line).expect("Failed to read input line");
    line
}