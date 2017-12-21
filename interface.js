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
