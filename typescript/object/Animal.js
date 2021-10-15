var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    // 构造函数
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.bark = function () {
        console.log(this.name);
    };
    return Animal;
}());
// 继承
var Pig = /** @class */ (function (_super) {
    __extends(Pig, _super);
    function Pig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pig.prototype.bark = function () {
        console.log("this is pig");
    };
    Pig.prototype.run = function () {
        console.log(this.name + " is running");
    };
    return Pig;
}(Animal));
var pig = new Pig("皮特兰猪", 7);
console.log(pig);
pig.bark();
pig.run();
