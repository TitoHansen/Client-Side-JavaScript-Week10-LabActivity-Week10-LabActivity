// Constructor function for Car
class Car {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  }
  
  // Constructor function for EV (Electric Car) as a child class of Car
  class EV extends Car {
    constructor(make, speed, charge) {
      super(make, speed); // Call the parent constructor
      this.charge = charge;
    }
  
    // chargeBattery method
    chargeBattery(chargeTo) {
      this.charge = chargeTo;
    }
  
    // Override accelerate method
    accelerate() {
      this.speed += 20;
      this.charge -= 1;
      console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
  }
  
  // Create an electric car object
  const car1 = new EV('Tesla', 120, 23);
 
  car1.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
  car1.brake();      // Tesla is going at 135 km/h
  car1.chargeBattery(90); // Charge battery to 90%
  console.log(`${car1.make} has a charge of ${car1.charge}%`); // Tesla has a charge of 90%
  car1.accelerate(); // Tesla going at 155 km/h, with a charge of 89%
  