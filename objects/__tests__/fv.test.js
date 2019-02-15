'use strict';

// const FlyingVehicle = require('../vehicle-constructor');
// const FlyingVehicle = require('../vehicle-class');
const FlyingVehicle = require('../vehicle-factory');

describe('Flying Vehicles', () => {

    describe('Airplane', () => {
        let airplane = new FlyingVehicle.Airplane('foo');

        it('is Winged', () => {
            expect(airplane.type).toEqual('Winged');
        });

        it('can takeoff', () => {
            expect(airplane.takeoff()).toBeTruthy();
        });

        it('can cruise', () => {
            expect(airplane.cruise()).toBeTruthy();
        });

        it('can land', () => {
            expect(airplane.land()).toBeTruthy();
        });

        it('cannot hover', () => {
            expect(airplane.hover).toBeUndefined();
        });
    });

    describe('Helicopter', () => {

        let helicopter = new FlyingVehicle.Helicopter('foo');

        it('is a rotorcraft', () => {
            expect(helicopter.type).toEqual('Rotorcraft');
        });

        it('can takeoff', () => {
            expect(helicopter.takeoff()).toBeTruthy();
        });

        it('can cruise', () => {
            expect(helicopter.cruise()).toBeTruthy();
        });

        it('can land', () => {
            expect(helicopter.land()).toBeTruthy();
        });

        it('can hover', () => {
            expect(helicopter.hover).toBeTruthy();
        });
    });
});