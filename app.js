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
var greeting = function () {
    console.log("ni hao!");
};
var greetingToFriend = function (friend) { return console.log(friend); };
greetingToFriend("ni hao xia wei!");
// Default Parameters
console.log("Default parameters ------------------------------------");
var countDown = function (start) {
    if (start === void 0) { start = 99; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown();
// Rest & Spread operator
console.log("Rest and Spread operator -------------------------");
var numberInArray = [1, 10, 294, 999];
console.log(Math.max(1, 2, 3, 17));
console.log(Math.max.apply(Math, numberInArray)); // spread function
function newArray(arg1, arg2) {
    return [arg1, arg2];
}
console.log(newArray(88, 99));
function newArrayWithArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(newArrayWithArgs(77, 88, 99));
// Destructuring
console.log("Destructuring ----------------------");
var myHobbies = ["Hobby ONE", "Hobby TWO", "Hobby THREE"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var myData = { userName: "WeiXia", userAge: 19 };
var userName2 = myData.userName;
var userAge2 = myData.userAge;
console.log(userName2, userAge2);
var userName1 = myData.userName, userAge1 = myData.userAge;
console.log(userAge1, userName1);
// Template Literals
var hisName = "John";
var greetingAgain = "Hello,\nHis is " + hisName + ".\nHe is a developer";
console.log(greetingAgain);
