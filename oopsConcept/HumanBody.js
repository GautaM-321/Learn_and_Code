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
var HumanBody = /** @class */ (function () {
    function HumanBody(name, age) {
        this.name = name;
        this.age = age;
    }
    HumanBody.prototype.getAge = function () {
        return this.age;
    };
    HumanBody.prototype.getName = function () {
        return this.name;
    };
    return HumanBody;
}());
var Heart = /** @class */ (function (_super) {
    __extends(Heart, _super);
    function Heart(name, age, beatsPerMinute) {
        var _this = _super.call(this, name, age) || this;
        _this.beatsPerMinute = beatsPerMinute;
        return _this;
    }
    Heart.prototype.greet = function () {
        console.log("Hi, I'm ".concat(_super.prototype.getName.call(this), ".My age is ").concat(_super.prototype.getAge.call(this), " My heart beats at ").concat(this.beatsPerMinute, " bpm."));
    };
    Heart.prototype.getBeatsPerMinute = function () {
        return this.beatsPerMinute;
    };
    return Heart;
}(HumanBody));
var Brain = /** @class */ (function (_super) {
    __extends(Brain, _super);
    function Brain(name, age, IQ) {
        var _this = _super.call(this, name, age) || this;
        _this.IQ = IQ;
        return _this;
    }
    Brain.prototype.greet = function () {
        console.log("Hi, I'm ".concat(_super.prototype.getName.call(this), ".My age is ").concat(_super.prototype.getAge.call(this), ". My IQ is ").concat(this.IQ, "."));
    };
    // Encapsulated method to get IQ
    Brain.prototype.getIQ = function () {
        return this.IQ;
    };
    return Brain;
}(HumanBody));
var heart = new Heart("Gautam", 30, 70);
var brain = new Brain("Harsh", 25, 120);
// Demonstrate abstraction and encapsulation
heart.greet();
console.log("Age: ".concat(heart.getAge()));
console.log("Beats per Minute: ".concat(heart.getBeatsPerMinute()));
brain.greet();
console.log("Age: ".concat(brain.getAge()));
console.log("IQ: ".concat(brain.getIQ()));
