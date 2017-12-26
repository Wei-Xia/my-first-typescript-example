"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var PersonDecorator = /** @class */ (function () {
    function PersonDecorator() {
        console.log("Hey decorator!");
    }
    PersonDecorator = __decorate([
        logged
    ], PersonDecorator);
    return PersonDecorator;
}());
// Factory
function logging(valueDecorator) {
    return valueDecorator ? logged : null;
}
var carDecorator = /** @class */ (function () {
    function carDecorator() {
    }
    carDecorator = __decorate([
        logging(true)
    ], carDecorator);
    return carDecorator;
}());
// Advanced Decorator
function printable(constructorFn) {
    constructorFn.prototype.printable = function () {
        console.log(this);
    };
}
console.log("-------------------------------");
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plantAgin = new Plant();
plantAgin.printable();
// Method Decorator
// Property Decorator
function stopEditable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overEditable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var decoratorProject = /** @class */ (function () {
    function decoratorProject(name) {
        this.projectName = name;
    }
    decoratorProject.prototype.calcBudget = function () {
        console.log("1000");
    };
    __decorate([
        overEditable(true)
    ], decoratorProject.prototype, "projectName", void 0);
    __decorate([
        stopEditable(false)
    ], decoratorProject.prototype, "calcBudget", null);
    return decoratorProject;
}());
var decoratorProjectExample = new decoratorProject("Cool Project");
decoratorProjectExample.calcBudget();
// decoratorProjectExample.calcBudget = function() {
//     console.log("2000");
// }
decoratorProjectExample.calcBudget();
console.log(decoratorProjectExample);
// Parameter Decorator
function printInfo(target, methodName, parameterIndex) {
    console.log("Target: " + target);
    console.log("MethodName: " + methodName);
    console.log("ParameterIndex: " + parameterIndex);
}
var courseDecorator = /** @class */ (function () {
    function courseDecorator() {
    }
    courseDecorator.prototype.printAllStudentName = function (mode, printAll) {
        if (printAll) {
            console.log("Print all");
        }
        else {
            console.log("Don't Print");
        }
    };
    __decorate([
        __param(1, printInfo)
    ], courseDecorator.prototype, "printAllStudentName", null);
    return courseDecorator;
}());
var courseDecoratorExample = new courseDecorator();
courseDecoratorExample.printAllStudentName("anything", true);
courseDecoratorExample.printAllStudentName("anything", false);
