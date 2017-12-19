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
        if (all) {
            return this.data;
        }
    }
};
var complex2 = {
    data: [5, 53, 4],
    output: function (all) {
        if (all) {
            return this.data;
        }
    }
};
// union type
var myRealAge;
myRealAge = 10;
myRealAge = "11";
// check types
var checkTypes = "I am a string";
if (typeof checkTypes == "string") {
    console.log("that's a string");
}
;
// never type  --- feel confused, need more research
function neverReturn() {
    throw new Error("this is an Error");
}
;
// Nullable type
var nullValue1 = 12;
nullValue1 = null;
var nullValue2;
nullValue2 = null;
function checkTrue(isTrue) {
    var result;
    if (isTrue) {
        result = 10;
    }
    return result;
}
console.log("let & const ----------------------------");
// let & const
var nameTest = "wei-xia";
console.log(nameTest);
nameTest = "james-hsia";
console.log(nameTest);
var cannotChange = 122222;
console.log(cannotChange);
// block scope
function reset() {
    var nameTest = null;
    console.log("block scope");
    console.log(nameTest);
}
reset();
console.log("block scope");
console.log(nameTest);
console.log("Arrow function ----------------------------");
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(99, 189));
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
console.log(multiplyNumbers(10, 11));
