void main(){
  List<int> arr = [5, 10, 15, 20, 25, 30];
  int x = 15;
  int result = linearSearch(arr, x);
  print(result);
}

linearSearch(List<int> array, int x){
  for(int i = 0; i< array.length; i++){
    if(array[i] == x){
      return i; //returns the position in the array.
    }
  }
}
