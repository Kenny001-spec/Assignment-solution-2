'use strict';


const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const bmw = new Car('BMW', 120)
console.log(bmw);

const SUV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

SUV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

SUV.prototype.accelerate = function () {
    this.speed = this.speed + 20;
    this.charge = this.charge - 2;

    console.log(`${this.make} is goint at ${this.speed} with the battery percentage at ${this.charge}%`)
}

const bmwSUV = new SUV('BMW SUV', 140, 46);
console.log(bmwSUV)
bmwSUV.accelerate()
bmwSUV.accelerate()
bmwSUV.accelerate()
bmwSUV.accelerate()

/**
 * ASSIGNMENT
 * 1. Convert the code above (Function Constructor) to ES6 Class
 * 2. Create another instance of volvoSUV with speed of 130 at charge of 58%
 * 3. Write *brake* method in ES6 👇
 *      a. Speed will reduce by 10
 *      b. Charge will increase by 1
 * 4. Chain these two methods together to see the battery charge percentages
 *
 * HINT: Don't forget to return *this* from each method...😏
 *
 * You are FREE to create as many additional instances to the two above as you wish.
 *
 * Goodluck 🍀
 */



// Assignment Solution


class Suv extends Car {
    constructor(make, speed, charge) {
        super(make, speed)
        this.charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.charge -= 2;

        console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)
    }

    break() {
        this.speed -= 10;
        this.charge += 1;

        console.log(`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`)
    }
}

const bmwSuv = new Suv('BMW', 140, 46);
console.log(bmwSuv);
bmwSuv.accelerate();
bmwSuv.accelerate();
bmwSuv.accelerate();
bmwSuv.break();
bmwSuv.break();
bmwSuv.break();

const volvoSuv = new Suv('volvo Suv', 130, 58);
console.log(volvoSuv);
volvoSuv.break();
volvoSuv.break();
volvoSuv.break();
volvoSuv.accelerate();
volvoSuv.accelerate();
volvoSuv.accelerate();
volvoSuv.accelerate();




class Carb extends Car {
    constructor(make, speed, charge) {
        super(make, speed)
        this.charge = charge;
    }

    // methods

    break() {
        this.speed -= 10;
        this.charge += 1
        console.log((`${this.make} is going at ${this.speed} with the battery percentage at ${this.charge}%`))
    }

}

const myCarb1 = new Carb('VOLVO SUV', 130, 58);
console.log(myCarb1);
myCarb1.break();
myCarb1.break();
myCarb1.break();
myCarb1.break();
myCarb1.break();

