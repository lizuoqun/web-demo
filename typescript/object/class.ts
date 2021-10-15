class Person {
  // 属性定义
  // 实例属性
  name: string = "yueyue";
  // 静态属性
  static age: number = 18;
  // 只读属性
  readonly sex: string = "男";

  // 方法定义
  say() {
    console.log("say");
  }
  static sayhello(){
      console.log("say hello")
  }
}

let p = new Person();

console.log(p);
console.log(Person.age);

// p.sex = "女";
console.log(p);
p.say();
Person.sayhello()
