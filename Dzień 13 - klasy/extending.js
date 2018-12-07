class Car {
    constructor(age, color) {
        this.age = age;
        this.color = color;
    }
    rides() {
        console.log("Auto rusza");
    }
}

const xsara = new Car(10, "black");


class Citroen extends Car {
    constructor(age, color, engine, passangers) {
        super(age, color); // super przejmuje po rodzicu
        this.engine = engine;
        this.passangers = passangers;
    }
    citroenRides() {
        console.log("Citroen rusza");
    }
}

const xsaraPicasso = new Citroen(2, 'yellow', '1.4', 5);
xsaraPicasso.rides();
xsaraPicasso.citroenRides();

class Gasoline extends Citroen {
    constructor(age, color, engine, passangers, combustion) {
        super(age, color, engine, passangers);
        this.combustion = combustion; // l / 100 km
    }
    gasolining() {
        console.log('Tankowanie!');
    }
}

const xsaraPicasso15 = new Gasoline(1, 'blue', '1.4', 5, 10);
xsaraPicasso15.rides();
xsaraPicasso15.citroenRides();
xsaraPicasso15.gasolining();