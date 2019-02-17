'use strict';

const Vehicle = function (name, wheels) {
    this.name = name;
    this.wheels = wheels;
    this.drive = () => {
        return 'Moving Forward';
    };
    this.stop = () => {
        return 'Stopping';
    };
};

function Car (name) {
    const newCar = Object.assign(
        {},
        new Vehicle (name, 4)
    );
    return Object.freeze(newCar);
}

function Motorcycle(name){
    const newMotorcycle = Object.assign(
        {},
        {wheelie},
        new Vehicle(name, 2)
    );
    function wheelie() {
        return 'Wheee!';
    };
    return Object.freeze(newMotorcycle);
}

const FlyingVehicle = function (name, type) {
    this.name = name;
    this.type = type;
    this.takeoff = () => {
        return 'Takeoff!';
    };
    this.cruise = () => {
        return 'Reaching cruising altitude.';
    };
    this.land = () => {
        return 'Landing...';
    };
};

function Airplane (name) {
    const newAirplane = Object.assign(
        new FlyingVehicle(name, 'Winged')
    );
    return Object.freeze(newAirplane);
}

function Helicopter (name) {
    const newHelicopter = Object.assign(
        {hover},
        new FlyingVehicle(name, 'Rotorcraft')
    );
    function hover() {
        return 'Maintaining hover position';
    };
    return Object.freeze(newHelicopter);
}

const SeaCreature = function (name, type) {
    this.name = name;
    this.type = type;
    this.delicious = () => {
        return true;
    };
};

function Fish (name, fins) {
    const newFish = Object.assign(
    // const newFish(name, 2) = Object.assign( try passing fins here?) 
        {swim},

        // {let fins = 2},

        new SeaCreature(name, 'swimmer')
    );
    console.log(newFish)
    function swim() {
        return 'Just keep swimming.';
    }
    return Object.freeze(newFish);
}

function Lobster (name) {
    let claws = 4;
    let legs = 6;
    const newLobster = Object.assign(
        new SeaCreature(name, 'crawler')
    );
    return Object.freeze(newLobster);
}

module.exports = {Car, Motorcycle, Airplane, Helicopter, Fish, Lobster};
