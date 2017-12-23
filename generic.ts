// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Wei"));
console.log(echo("Wei").length);
console.log(echo(19));
console.log(echo({name: "weixia", age: 28}));

// Better Generic
function betterEcho<T>(data: T){
    return data;
}

console.log(betterEcho("Wei"));
console.log(betterEcho("Wei").length);
console.log(betterEcho(<number>(27)));
console.log(betterEcho({name: "weixia", age: 28}));


// Build-in Generic by default
const arrayGeneric: Array<number> = [1, 2, 3];
arrayGeneric.push(4);
console.log(arrayGeneric);

// Generic Array
function printArray<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printArray<string>(['one', 'two', 'three']);

// Generic Types
const echoGeneric: <T>(data: T) => T = betterEcho;
console.log(echoGeneric<string>("this must be a string"));

// Generic Class
class simplyMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multipValue: U;

    calculate() : number {
        return +this.baseValue * +this.multipValue;
    }
}

const simplyMathExample = new simplyMath<string, number>();
simplyMathExample.baseValue = "982";
simplyMathExample.multipValue = 123;
console.log(simplyMathExample.calculate());