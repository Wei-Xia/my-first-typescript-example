"use strict";
console.log("Hello World!");
var myName = "Wei Xia";
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello World!");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(3, 10));
//function type
var myFunctionType;
myFunctionType = multiply;
console.log(myFunctionType(2, 12));
//object
var userData = {
    name: "wei",
    age: 10
};
// complex object
var complex = {
    data: [99, 100, 777.84],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [5, 53, 4],
    output: function (all) {
        return this.data;
    }
};
