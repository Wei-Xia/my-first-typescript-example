"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Wei"));
console.log(echo("Wei").length);
console.log(echo(19));
console.log(echo({ name: "weixia", age: 28 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Wei"));
console.log(betterEcho("Wei").length);
console.log(betterEcho((27)));
console.log(betterEcho({ name: "weixia", age: 28 }));
// Build-in Generic by default
var arrayGeneric = [1, 2, 3];
arrayGeneric.push(4);
console.log(arrayGeneric);
// Generic Array
function printArray(args) {
    args.forEach(function (element) { return console.log(element); });
}
printArray(['one', 'two', 'three']);
// Generic Types 
