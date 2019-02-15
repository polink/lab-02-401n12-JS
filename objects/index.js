'use strict';


// const Vehicle = require('./vehicle-constructor.js');
// const FlyingVehicle = require('./vehicle-constructor.js');
// const Vehicle = require('./vehicle-class.js');
// const FlyingVehicle = require('./vehicle-class.js');
const Vehicle = require('./vehicle-factory.js');
const FlyingVehicle = require('./vehicle-factory.js');


// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// implement airplane and helicopter
const boeing747 = new FlyingVehicle.Airplane('747');
console.log(boeing747.name, boeing747.takeoff(), boeing747.cruise(), boeing747.land());

const blackhawk = new FlyingVehicle.Helicopter('Black Hawk');
console.log(blackhawk.name, blackhawk.takeoff(), blackhawk.cruise(), blackhawk.hover(), blackhawk.land());