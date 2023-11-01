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
var drinking = /** @class */ (function () {
    function drinking() {
    }
    drinking.prototype.Urination = function () {
        this.storingDrinkInAbdomen();
        this.passingToKidneys();
        this.storingToGallBladder();
    };
    return drinking;
}());
var purifying = /** @class */ (function (_super) {
    __extends(purifying, _super);
    function purifying() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    purifying.prototype.storingDrinkInAbdomen = function () {
        console.log("drink is getting stored in abdomen...........");
    };
    purifying.prototype.passingToKidneys = function () {
        setTimeout(function () {
            console.log("drink is getting absorbed and passing to kidneys through blood vessels.....");
        }, 5000);
    };
    purifying.prototype.storingToGallBladder = function () {
        setTimeout(function () {
            console.log("drink is getting stored in gallbladder.....");
        }, 10000);
    };
    return purifying;
}(drinking));
var purifyingObj = new purifying();
purifyingObj.Urination();
