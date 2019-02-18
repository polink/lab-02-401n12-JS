'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

const FlyingVehicle = function(name, type) {
  this.name = name;
  this.type = type;
};

FlyingVehicle.prototype.takeoff = () => {
  return 'Takeoff!';
};

FlyingVehicle.prototype.cruise = () => {
  return 'Reaching cruising altitude.';
};

FlyingVehicle.prototype.land = () => {
  return 'Landing...';
};

const Airplane = function(name) {
  FlyingVehicle.call(this, name, 'Winged');
};

Airplane.prototype = new FlyingVehicle();

const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 'Rotorcraft');
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.hover = () => {
  return 'Maintaining hover position.';
};

const SeaCreature = function(name, type) {
  this.name = name;
  this.type = type;
};

SeaCreature.prototype.delicious = () => {
  return true;
};

const Fish = function(name) {
  SeaCreature.call(this, name, 'swimmer');
}

Fish.prototype = new SeaCreature();

Fish.prototype.swim = () => {
  return 'Just keep swimming.'
}

const Lobster = function(name) {
  SeaCreature.call(this, name, 'crawler');
}

Lobster.prototype = new SeaCreature();


module.exports = {Car, Motorcycle, Airplane, Helicopter, Fish, Lobster};
