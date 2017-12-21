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