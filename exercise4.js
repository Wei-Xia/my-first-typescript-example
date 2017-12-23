"use strict";
console.log("---------- This is Exercise 4 -------------");
// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
// Let's keep it simple and only add the following methods to the Map:
// setItem(key: string, item: T) // should create a new key-value pair
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:
// const numberMap = new MyMap<number>();
// numberMap.setItem('apples', 5);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// stringMap.setItem('age', "27");
// stringMap.printMap();
var myMap = /** @class */ (function () {
    function myMap() {
        this.map = {};
    }
    myMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    myMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    myMap.prototype.clear = function () {
        this.map = {};
    };
    myMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return myMap;
}());
var numberMap = new myMap();
numberMap.setItem("apple", 5);
numberMap.setItem("bananas", 10);
console.log(numberMap.getItem("apple"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new myMap();
stringMap.setItem("apple", "120");
stringMap.setItem("bananas", "212");
console.log(stringMap.getItem("apple"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
