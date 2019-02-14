'use strict';

const Vehicle = function (name, wheels) {
    this.name = name;
    this.wheels = wheels;
    function drive() {
        return 'Moving Forward';
    };
    function stop() {
        return 'Stopping';
    }
};

function CarFactory(name) {
    const newCar = Object.assign(
        {},
        new Vehicle(name, 4)
    );
    return Object.freeze(newCar);
}

function MotorcycleFactory(name){

}

module.exports = CarFactory;


