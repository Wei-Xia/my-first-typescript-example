interface NamePerson {
    firstName: string;   //required
    age?: number;          // optional
    [propName: string] : any;   // additional

    greetingsInterface(lastName: string) : void;  // required function
}

function greetings(person: NamePerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamePerson) {
    person.firstName = "Wei";
}

const personExampleAgain = {
    firstName: "Max",
    age: 19,
    hobbiesAgain: ["one", "two"],

    greetingsInterface(lastName: string) {
        console.log("Hey, my name is " + this.firstName + " " + lastName);
    }
}

// greetings({firstName: "weixia", age: 27});

greetings(personExampleAgain);
changeName(personExampleAgain);
greetings(personExampleAgain);
personExampleAgain.greetingsInterface("Xia");


class PersonAgain implements NamePerson {
    firstName: string;

    greetingsInterface(lastName: string){
        console.log("In calss, Hey, my name is " + this.firstName + " " + lastName);
    };
}

const newPersonAgain = new PersonAgain();
newPersonAgain.firstName = "James";
greetings(newPersonAgain);
newPersonAgain.greetingsInterface("Hsia");


// Function Types
interface DoubleNumberFunc {
    (number1: number, number2: number) : number;
}

let myDoubleNumberFunc : DoubleNumberFunc;
myDoubleNumberFunc = function(num1: number, num2: number) {
    return 2 * (num1 + num2);
}

console.log(myDoubleNumberFunc(10, 21));


// Interace Inheritance
interface personInheritance extends NamePerson {
    age: number;
}

const personInheritanceExample: personInheritance = {
    age: 18,
    firstName: "personInheritanceExample",
    greetingsInterface(lastName: string) {
        console.log("This is the personInheritanceExample");
        console.log(lastName);
    }
}

console.log(personInheritanceExample);