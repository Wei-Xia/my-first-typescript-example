"use strict";
// Namespace
var MyMath;
(function (MyMath) {
    // use export to make it be accessed globally
    var Rectangle;
    (function (Rectangle) {
        function calcRectangle(width, length) {
            return width * length;
        }
        Rectangle.calcRectangle = calcRectangle;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
