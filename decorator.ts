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