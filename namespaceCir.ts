// Namespace
namespace MyMath {
    const PI = 3.1415;

    // use export to make it be accessed globally
    export function calcCircumference(diameter: number) {
        return diameter * PI;
    }
}