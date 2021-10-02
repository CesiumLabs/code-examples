class OrdArray {



    private long[] a; // ref to array a
    private int nElements; //number of data items
    public OrdArray(int max) {

        this.a=new long[max];
        this.nElements=0;

        //Fill the body
    }
    public int size() {
        return   this.a.length;// return max size of the array
        //Fill the body
    }
    public int find(long searchKey) {
        for(int i=0;i<nElements;i++){
            if(searchKey==this.a[i]){

                return i;
            }
        }
        //Fill the body
        return -1;
    }
    public void insert(long value) {

        if(this.nElements==size()){
            System.out.println("array full");
            return;
        }

        for(int i=0;i<this.nElements;i++){
            if(value<this.a[i]){


                for(int j=nElements-1;j>=i;j--){

                    this.a[j+1]=this.a[j];

                }
                this.a[i]=value;
                this.nElements++;
                return;
            }



        }
        this.a[this.nElements]=value;
        this.nElements++;

    }
    public boolean delete(long value) {
        if(find(value)!= -1){
            for(int i=find(value);i<this.nElements-1;i++){
                this.a[i]=this.a[i+1];

            }
            this.nElements--;
            return true;

        }else{
            System.out.println("vlue not found");
        }
        return false;
        //Fill the body
    }
    void display() { // display array contents
        //Fill the body
        System.out.println("values in the array-----------");
        for(int i=0;i<this.nElements;i++){
            System.out.print(this.a[i]+" ");
        }
        System.out.println();
    } //end display()
}



class MyClass {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        OrdArray a1=new  OrdArray(7);
        a1.insert(0);
        a1.insert(5);
        a1.insert(4);
        a1.insert(8);
        a1.insert(1);
        a1.delete(4);


        a1.display();

    }

}
