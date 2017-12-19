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
        return this.data;
    }
}; 

// type alias
type complexAlias = {data: number[], output: (all: boolean) => number[]};

let complex2: complexAlias = {
    data: [5, 53, 4],

    output: function (all: boolean) : number[] {
        return this.data;
    }
}; 