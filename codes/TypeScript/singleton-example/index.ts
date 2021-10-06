import { singleton } from "./singleton";

@singleton()
class Person {
  constructor(public name: string) {}

  public getName() {
    return this.name;
  }

  public sayHello() {
    console.log(`${this.name}: Hello`);
  }
}

const person = new Person("Bob");
person.sayHello(); // -> Bob: Hello

const person2 = new Person("Mark");
person2.sayHello(); // -> Bob: Hello
