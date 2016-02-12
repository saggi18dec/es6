class Parent
{
  printName() {
    console.log("hello "+this.name);
  }
}

class Child extends Parent
{
  constructor(name) {
    super();
    this.name = name;
  }
  printName() {
    super();
    console.log("hi "+this.name);
  }
}

let child = new Child("abc");
child.printName();