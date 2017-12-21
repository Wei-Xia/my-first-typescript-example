// Namespace
namespace MyMath {
    const PI = 3.1415;

    export function calcCircumference(diameter: number) {
        return diameter * PI;
    }

    export function calcRectangle(width: number, length: number) {
        return width * length;
    }
}

console.log(MyMath.calcCircumference(83));