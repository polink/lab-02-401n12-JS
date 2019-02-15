'use strict';

const seaCreatures = require('../constructor');
// const seaCreatures = require('../class');
// const seaCreatures = require('../factory');

describe('Sea Creatures',() => {
// tests - can swim, is delicious

    describe('Fish', () => {

        let fish = new SeaCreature.Fish('foo');

        it('swims', () => {
            expect(fish.swim()).toBeTruthy();
        });
        it('has at least 2 fins', () => {
            expect(fish.fins).toBeGreaterThanOrEqual(2);
        });
        it('is delicious', () => {
            expect(fish.delicious).toBeTruthy();
        });
    });
    describe('Lobster', () => {
       // armored, is a crustacean, does not swim, has 6 claw arms, and 4 walking legs
        let lobster = New SeaCreature.Lobster('foo');

        it('is armored', () => {
            expect(lobster.armor).toBeTruthy();
        });
        it('is a crustacean', () => {
            expect(lobster.crustacean).toBeTruthy();
        });
        it('does not swim', () => {
            expect(lobster.swim).toBeUndefined();
        })
        it('has 6 claw arms', () => {
            expect(lobster.claws).toEqual(6);
        })
        it('has 4 walking legs', () => {
            expect(lobster.legs).toequal(4);
        });
    });
});