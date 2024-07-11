// ES6 Class for Car
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Accelerate method
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Brake method
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
   
    get speedUS() {
      return this.speed / 1.6;
    }
  
   
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }
  
  // Create a new car
  const car1 = new CarCl('Ford', 120);
  

  car1.accelerate(); // Ford is going at 130 km/h
  car1.brake();      // Ford is going at 125 km/h
  

  console.log(`${car1.make} is going at ${car1.speedUS.toFixed(2)} mi/h`); // Ford is going at 78.13 mi/h
  
  car1.speedUS = 50;  
  console.log(`${car1.make} is going at ${car1.speed} km/h`); // Ford is going at 80 km/h
  console.log(`${car1.make} is going at ${car1.speedUS.toFixed(2)} mi/h`); // Ford is going at 50.00 mi/h
  