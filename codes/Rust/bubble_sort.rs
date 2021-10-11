fn main() {

    let mut unsorted_vector = vec![10,5,1,9,201,8,43,2,67];

    println!("{:?}", unsorted_vector);

    let sorted_vector = sort_vector(&mut unsorted_vector);
    
    println!("{:?}", sorted_vector);

}

fn sort_vector(vector: &mut Vec<i32>) -> &mut Vec<i32> {
    
    for i in 0..vector.len() {
        for j in 0..vector.len() - i - 1 {
            if vector[j+1] < vector[j] {
                vector.swap(j, j+1);
            }
        }
    }

    vector

}