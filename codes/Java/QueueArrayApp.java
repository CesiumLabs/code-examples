package queuearrayapp;

public class QueueArrayApp {

  public static void main(String[] args) {
    QueueArray x = new QueueArray(5);
    x.display();
    x.enqueue(2);
    x.enqueue(8);
    x.enqueue(3);
    x.display();
    try {
      x.dequeue();
      x.display();
      x.enqueue(23);
      x.enqueue(45);
      x.enqueue(59);
      x.display();
      x.dequeue();
      x.enqueue(89);
      x.display();
      System.out.println("peek is " + x.peek());
    } catch (Exception e) {
      System.out.println(e.toString());
    }
    x.display();
  }
}

class QueueArray {

  private int maxSize;
  private int[] queArray;
  private int front;
  private int rear;
  private int nItems;

  public QueueArray(int s) {
    this.queArray = new int[s];
    this.maxSize = s;
    this.front = 0;
    this.rear = -1;
    this.nItems = 0;
  }

  public boolean isEmpty() {
    return this.nItems == 0;
  }

  public boolean isFull() {
    return this.nItems == this.maxSize;
  }

  public int size() {
    return this.nItems;
  }

  public void enqueue(int value) {
    if (isFull()) {
      System.out.println("Queue is full");
      return;
    }

    rear = (rear + 1) % maxSize;
    this.queArray[rear] = value;
    this.nItems++;
  }

  public int dequeue() throws Exception {
    if (isEmpty()) {
      throw new Exception("Queue is empty cannot remove");
    }
    int removedItem = this.queArray[front];

    front = (front + 1) % maxSize;
    nItems--;
    return removedItem;
  }

  public int peek() throws Exception {
    if (isEmpty()) {
      throw new Exception("Queue is empty cannot get peek");
    }
    return this.queArray[this.front];
  }

  public void display() {
    if (isEmpty()) {
      System.out.println("Queue is empty no prtint");
      return;
    }
    int i = this.front;
    while (i != rear) {
      System.out.print(this.queArray[i] + " ");

      i = (i + 1) % maxSize;
    }
    System.out.println(this.queArray[rear]);
    System.out.println();
  }
}
