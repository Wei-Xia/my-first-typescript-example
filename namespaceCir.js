"use strict";
// Namespace
var MyMath;
(function (MyMath) {
    var PI = 3.1415;
    // use export to make it be accessed globally
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
})(MyMath || (MyMath = {}));
