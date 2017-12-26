function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class PersonDecorator {
    constructor() {
        console.log("Hey decorator!");
    }
}

// Factory
function logging(valueDecorator: boolean) {
    return valueDecorator ? logged : null;
}
@logging(true)
class carDecorator {

}

// Advanced Decorator
function printable (constructorFn: Function) {
    constructorFn.prototype.printable = function() {
        console.log(this);
    }
}

console.log("-------------------------------");

@logging(true)
@printable
class Plant {
    name = "Green Plant";
}
const plantAgin = new Plant();
(<any>plantAgin).printable();

// Method Decorator
// Property Decorator
function stopEditable(value: boolean) {
    return function(target: any, propName: any, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overEditable(value: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class decoratorProject {
    @overEditable(true)
    projectName: string;

    constructor (name: string) {
        this.projectName = name;
    }

    @stopEditable(false)
    calcBudget() {
        console.log("1000");
    }
}

const decoratorProjectExample = new decoratorProject("Cool Project");
decoratorProjectExample.calcBudget();
decoratorProjectExample.calcBudget = function() {
    console.log("2000");
}
decoratorProjectExample.calcBudget();
console.log(decoratorProjectExample);