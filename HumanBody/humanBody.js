"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// import maleBody from './maleBody';
// import femaleBody from './femaleBody';
var humanBody = /** @class */ (function () {
    function humanBody() {
    }
    humanBody.prototype.Digestion = function () {
        this.chewingFood();
        this.swallowingFoood();
        this.storingIntoStomach();
        this.goingThroughLargeIntestine();
        this.goingThroughSmallIntestine();
        this.absorbingMinerals();
        this.passingWasteThroughRectum();
    };
    return humanBody;
}());
var femaleBody = /** @class */ (function (_super) {
    __extends(femaleBody, _super);
    function femaleBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    femaleBody.prototype.chewingFood = function () {
        console.log("Chewing food usally 28 times.... ");
    };
    femaleBody.prototype.swallowingFoood = function () {
        console.log("swallow Food through easophageous....");
    };
    femaleBody.prototype.storingIntoStomach = function () {
        console.log(" Stores the food in stomach.....");
    };
    femaleBody.prototype.goingThroughLargeIntestine = function () {
        console.log("passing through large intestine....");
    };
    femaleBody.prototype.goingThroughSmallIntestine = function () {
        console.log("passing through small intestine......");
    };
    femaleBody.prototype.absorbingMinerals = function () {
        console.log("while passing from intestine it has been absorbed quicker than man....");
    };
    femaleBody.prototype.passingWasteThroughRectum = function () {
        console.log(" passing through rectum 💩....");
    };
    return femaleBody;
}(humanBody));
var maleBody = /** @class */ (function (_super) {
    __extends(maleBody, _super);
    function maleBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    maleBody.prototype.chewingFood = function () {
        console.log("Chewing food usally 24 times.... ");
    };
    maleBody.prototype.swallowingFoood = function () {
        console.log("swallow Food through easophageous....");
    };
    maleBody.prototype.storingIntoStomach = function () {
        console.log(" Stores the food in stomach.....");
    };
    maleBody.prototype.goingThroughLargeIntestine = function () {
        console.log("passing through large intestine....");
    };
    maleBody.prototype.goingThroughSmallIntestine = function () {
        console.log("passing through small intestine......");
    };
    maleBody.prototype.absorbingMinerals = function () {
        console.log("while passing from intestine it has been absorbed....");
    };
    maleBody.prototype.passingWasteThroughRectum = function () {
        console.log(" passing through rectum 💩....");
    };
    return maleBody;
}(humanBody));
var gender = readlineSync.question("Please enter the input as Male for Female of which you want to see the digestion ");
if (gender === "Male" || gender === "male") {
    var malebody = new maleBody();
    malebody.Digestion();
}
else if (gender === "Female" || gender === "female") {
    var femalebody = new femaleBody();
    femalebody.Digestion();
}
else {
    console.log("wrong Input");
}
exports.default = humanBody;
