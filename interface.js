"use strict";
function greetings(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Wei";
}
var personExampleAgain = {
    firstName: "Max",
    age: 19,
    hobbiesAgain: ["one", "two"],
    greetingsInterface: function (lastName) {
        console.log("Hey, my name is " + this.firstName + " " + lastName);
    }
};
// greetings({firstName: "weixia", age: 27});
greetings(personExampleAgain);
changeName(personExampleAgain);
greetings(personExampleAgain);
personExampleAgain.greetingsInterface("Xia");
var PersonAgain = /** @class */ (function () {
    function PersonAgain() {
    }
    PersonAgain.prototype.greetingsInterface = function (lastName) {
        console.log("In calss, Hey, my name is " + this.firstName + " " + lastName);
    };
    ;
    return PersonAgain;
}());
var newPersonAgain = new PersonAgain();
newPersonAgain.firstName = "James";
greetings(newPersonAgain);
newPersonAgain.greetingsInterface("Hsia");
var myDoubleNumberFunc;
myDoubleNumberFunc = function (num1, num2) {
    return 2 * (num1 + num2);
};
console.log(myDoubleNumberFunc(10, 21));
var personInheritanceExample = {
    age: 18,
    firstName: "personInheritanceExample",
    greetingsInterface: function (lastName) {
        console.log("This is the personInheritanceExample");
        console.log(lastName);
    }
};
console.log(personInheritanceExample);
