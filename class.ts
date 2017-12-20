// Create a class ----------------------------
class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public userName: string) {
        this.name = name;
    }

    printAge(age: number) {
        console.log(this.age = age);
        this.setType("call from printAge");
    }

    setType(type: string) {
        console.log(this.type = type);
    }
}

const personExample = new Person("Wei Xia", "wei");

console.log(personExample);
console.log(personExample.name);

personExample.printAge(18);
personExample.setType("lol");


// Inheritance
class newPerson extends Person {
    // name = "this is a new name";

    constructor(userName: string){
        super("this is a new name ssss", userName);
        this.age = 31;
    };
}

const newPersonExample = new newPerson("wei xia new name");
console.log(newPersonExample);

// Getters and Setters
class Plants {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length >3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plants();
console.log(1, plant.species);
plant.species = "ta";
console.log(2, plant.species);
plant.species = "this is a new specy";
console.log(3, plant.species);


// Static Properties and Methods
class Helper {
    static PI: number = 3.1415;
    static calcCircumference (diameter: number) : number {
        return this.PI*diameter;
    }
}

console.log("PI is " + Helper.PI);
console.log(Helper.calcCircumference(10));


// Abstract Classes
abstract class Project {
    projectName : string = "Default Name";
    budget: number = 100;

    abstract changeName (name: string) : void;

    calcBudget() {
        return this.budget * 2;
    }
}

class TechProject extends Project {
    changeName (name: string): void {
        this.projectName = name;
    }
}

let newProject = new TechProject;
console.log(newProject);
newProject.changeName("A new name");
console.log(newProject);


// Private constructors
class onlyOne {
    private static instance: onlyOne;

    private constructor(public readonly name: string) {};

    static getInstace() {
        if(!onlyOne.instance) {
            onlyOne.instance = new onlyOne("The only one");
        }

        return onlyOne.instance;
    }
}

// let wrong = new onlyOne("this is wrong");
let correct = onlyOne.getInstace();
console.log(correct.name);
// correct.name = "test";
console.log(correct.name);