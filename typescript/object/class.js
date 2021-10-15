var Person = /** @class */ (function () {
    function Person() {
        // 属性定义
        // 实例属性
        this.name = "yueyue";
        // 只读属性
        this.sex = "男";
    }
    // 方法定义
    Person.prototype.say = function () {
        console.log("say");
    };
    Person.sayhello = function () {
        console.log("say hello");
    };
    // 静态属性
    Person.age = 18;
    return Person;
}());
var p = new Person();
console.log(p);
console.log(Person.age);
p.sex = "女";
console.log(p);
p.say();
Person.sayhello();
