"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a class ----------------------------
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.name = name;
    }
    Person.prototype.printAge = function (age) {
        console.log(this.age = age);
        this.setType("call from printAge");
    };
    Person.prototype.setType = function (type) {
        console.log(this.type = type);
    };
    return Person;
}());
var personExample = new Person("Wei Xia", "wei");
console.log(personExample);
console.log(personExample.name);
personExample.printAge(18);
personExample.setType("lol");
// Inheritance
var newPerson = /** @class */ (function (_super) {
    __extends(newPerson, _super);
    // name = "this is a new name";
    function newPerson(userName) {
        var _this = _super.call(this, "this is a new name ssss", userName) || this;
        _this.age = 31;
        return _this;
    }
    ;
    return newPerson;
}(Person));
var newPersonExample = new newPerson("wei xia new name");
console.log(newPersonExample);
// Getters and Setters
var Plants = /** @class */ (function () {
    function Plants() {
        this._species = "Default";
    }
    Object.defineProperty(Plants.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plants;
}());
var plant = new Plants();
console.log(1, plant.species);
plant.species = "ta";
console.log(2, plant.species);
plant.species = "this is a new specy";
console.log(3, plant.species);
// Static Properties and Methods
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helper.PI = 3.1415;
    return Helper;
}());
console.log("PI is " + Helper.PI);
console.log(Helper.calcCircumference(10));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default Name";
        this.budget = 100;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var TechProject = /** @class */ (function (_super) {
    __extends(TechProject, _super);
    function TechProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return TechProject;
}(Project));
var newProject = new TechProject;
console.log(newProject);
newProject.changeName("A new name");
console.log(newProject);
// Private constructors
var onlyOne = /** @class */ (function () {
    function onlyOne(name) {
        this.name = name;
    }
    ;
    onlyOne.getInstace = function () {
        if (!onlyOne.instance) {
            onlyOne.instance = new onlyOne("The only one");
        }
        return onlyOne.instance;
    };
    return onlyOne;
}());
// let wrong = new onlyOne("this is wrong");
var correct = onlyOne.getInstace();
console.log(correct.name);
// correct.name = "test";
console.log(correct.name);
