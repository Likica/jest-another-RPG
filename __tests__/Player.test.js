// const { test, expect, jest } = require('@jest/globals');
// const { test, expect } = require('@jest/globals');
const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion.js');
// console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );

});

// add player stats test
test("gets player's stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

//add second test for get inventory
test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

// test to get info about player's health
test("gets player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

//test to check if player's alive
test('checks if player is alive or not', () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

// test to handle the readuceHealth to check whther the correct amount of jealth is being subtracted from the Plyaer health property
test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});
