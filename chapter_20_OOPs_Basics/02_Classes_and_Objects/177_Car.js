class Car {
    //CAB
    //constructor
    constructor(name_given_during_object_creation) {
        this.name = name_given_during_object_creation;
    }
    //attribute
    //behaviour
    drive() {
        console.log("I am driving", this.name);
    }
}

const tesla = new Car("Model S");
tesla.drive();

const bmw = new Car("M5 Coupe");
bmw.drive();
