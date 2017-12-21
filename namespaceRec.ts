// Namespace
namespace MyMath {
    // use export to make it be accessed globally
    export namespace Rectangle {
        export function calcRectangle(width: number, length: number) {
            return width * length;
        }
    }
}