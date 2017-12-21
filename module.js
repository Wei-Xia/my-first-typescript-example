"use strict";
// Namespace
var MyMath;
(function (MyMath) {
    var PI = 3.1415;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
    function calcRectangle(width, length) {
        return width * length;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calcCircumference(83));
