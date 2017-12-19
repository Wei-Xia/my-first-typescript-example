console.log("Hello World!");

let myName = "Wei Xia"

function returnMyName(): string {
    return myName;
}

console.log(returnMyName());

//void
function sayHello(): void {
    console.log("Hello World!");
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1*value2
}

console.log(multiply(3, 10));

//function type
let myFunctionType: (val1: number, val2: number) => number;
myFunctionType = multiply;
console.log(myFunctionType(2,12));

//object
let userData: {name: string, age: number} = {
    name: "wei",
    age: 10
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [99, 100, 777.84],

    output: function (all: boolean) : number[] {
        if(all) {
            return this.data;
        }
    }
}; 

// type alias
type complexAlias = {data: number[], output: (all: boolean) => number[]};

let complex2: complexAlias = {
    data: [5, 53, 4],

    output: function (all: boolean) : number[] {
        if(all) {
            return this.data;
        }
    }
}; 

// union type
let myRealAge: number | string;
myRealAge = 10;
myRealAge = "11";


// check types
let checkTypes = "I am a string";

if (typeof checkTypes == "string") {
    console.log("that's a string");
};


// never type  --- feel confused, need more research
function neverReturn(): never {
    throw new Error("this is an Error");
};

// Nullable type
let nullValue1 : null | number = 12;
nullValue1 = null;

let nullValue2;
nullValue2 = null;

function checkTrue(isTrue: boolean) {
    let result: number;
    if (isTrue) {
        result = 10;
    }
    return result;
}

console.log("let & const ----------------------------");

// let & const
let nameTest = "wei-xia";
console.log(nameTest);
nameTest = "james-hsia"
console.log(nameTest);

const cannotChange = 122222;
console.log(cannotChange);

// block scope
function reset() {
    let nameTest = null;
    console.log("block scope");
    console.log(nameTest);
}

reset();
console.log("block scope");
console.log(nameTest);

console.log("Arrow function ----------------------------");
const addNumbers = function(num1: number, num2: number): number {
  return num1 + num2;  
};
console.log(addNumbers(99, 189));

const multiplyNumbers = (num1: number, num2: number) => num1 * num2;
console.log(multiplyNumbers(10, 11));
