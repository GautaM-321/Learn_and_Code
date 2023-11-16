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
var humanBody_1 = require("./humanBody");
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
}(humanBody_1.default));
exports.default = maleBody;
