'use strict';

class Vehicle {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    };
    drive() {
        return 'Moving Forward';
    };
    stop() {
        return 'Stopping';
    };
}

class Car extends Vehicle {
    constructor(name, wheels) {
        super(name, 4);
    }
}

class Motorcycle extends Vehicle {
// could also define # of wheels here, but super works as well.
    constructor(name, wheels) {
        super(name, 2);
    }
    wheelie() {
        return 'Wheee!';
    }
}

class FlyingVehicle {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    };
    takeoff() {
        return 'Takeoff!';
    };
    cruise() {
        return 'Reaching cruising altitude.';
    };
    land() {
        return 'Landing...'
    };
}

class Airplane extends FlyingVehicle {
    constructor(name, type) {
        super(name, 'Winged');
    }
}

class Helicopter extends FlyingVehicle {
    constructor(name, type) {
        super(name, 'Rotorcraft');
    }
    hover() {
        return 'Maintaining hover position.';
    }
}

class SeaCreature {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.delicious = () => {
            return true;
        }
    };
}

class Fish extends SeaCreature {
    constructor(name, type) {
        super(name, 'swimmer');
    }
    swim() {
        return 'Just keep swimming.'
    }
}

class Lobster extends SeaCreature {
    constructor(name, type) {
        super(name, 'crawler');
    }
}

module.exports = {Car, Motorcycle, Airplane, Helicopter, Fish, Lobster};
