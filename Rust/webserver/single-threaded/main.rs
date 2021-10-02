use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;
use std::fs;

const ADDRESS: &'static str = "127.0.0.1:7878";
const GET_REQUEST: &'static [u8] = b"GET / HTTP/1.1\r\n";

fn main() {
    let listener = TcpListener::bind(ADDRESS).unwrap();

    // Iterates over each request received.
    for stream in listener.incoming() {
        let stream = stream.unwrap();
        
        let mut buffer = [0; 1024];
        stream.read(&mut buffer).unwrap();

        if buffer.starts_with(GET_REQUEST) {
            // Basic response example
            let index_html = fs::read_to_string("index.html").unwrap();
            let response = format!(
                "HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n{}",
                index_html.len(),
                index_html
            );
    
            println!("Request: {}", String::from_utf8_lossy(&buffer[..]));
        } else {
            // 404 Request example
            let not_found_html = fs::read_to_string("404.html").unwrap();
            let response = format!(
                "{}\r\nContent-Length: {}\r\n\r\n{}",
                "HTTP/1.1 404 NOT FOUND",
                not_found_html.len(),
                not_found_html
            );

            stream.write(response.as_bytes()).unwrap();
            stream.flush().unwrap();
        }
    }
}