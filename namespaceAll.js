"use strict";
/// <reference path="namespaceCir.ts" />
/// <reference path="namespaceRec.ts" />
// namespace MyMath {
//     const PI = 3.1415;
//     // use export to make it be accessed globally
//     export function calcCircumference(diameter: number) {
//         return diameter * PI;
//     }
//     export function calcRectangle(width: number, length: number) {
//         return width * length;
//     }
// }
var RectangleMath = MyMath.Rectangle;
console.log(MyMath.calcCircumference(83));
console.log(MyMath.Rectangle.calcRectangle(10, 11));
console.log(RectangleMath.calcRectangle(1, 2));
