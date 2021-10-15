class Dog {
  private _name: string;
  private _age: number;
  // 构造函数
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  getName() {
    return this._name;
  }
  setName(name: string) {
    this._name = name;
  }
  get age() {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }
  bark() {
    console.log(this._name);
  }
}

const dog = new Dog("中华田园犬", 3);
dog.setName("柴犬");
console.log(dog.getName());
dog.age = 4;
console.log(dog.age);
dog.bark();

class Cat {
  name: string;
  age: number;
  // 构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log(this.name);
  }
}

const cat = new Cat("英短", 5);
console.log(cat);
cat.bark();
