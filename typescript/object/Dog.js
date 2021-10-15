var Dog = /** @class */ (function () {
    // 构造函数
    function Dog(name, age) {
        this._name = name;
        this._age = age;
    }
    Dog.prototype.getName = function () {
        return this._name;
    };
    Dog.prototype.setName = function (name) {
        this._name = name;
    };
    Object.defineProperty(Dog.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.bark = function () {
        console.log(this._name);
    };
    return Dog;
}());
var dog = new Dog("中华田园犬", 3);
dog.setName("柴犬");
console.log(dog.getName());
dog.age = 4;
console.log(dog.age);
dog.bark();
var Cat = /** @class */ (function () {
    // 构造函数
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.bark = function () {
        console.log(this.name);
    };
    return Cat;
}());
var cat = new Cat("英短", 5);
console.log(cat);
cat.bark();
