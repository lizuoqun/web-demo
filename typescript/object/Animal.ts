class Animal {
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

// 继承
class Pig extends Animal {
  bark() {
    console.log("this is pig");
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

const pig = new Pig("皮特兰猪", 7);
console.log(pig);
pig.bark();
pig.run();
