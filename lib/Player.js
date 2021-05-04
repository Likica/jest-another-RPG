const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    //returns an object with various player properties
    // this.getStats = function () {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    //returns the inventory array or false if empty
    // this.getInventory = function () {
    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }
    //     return false;
    // };
    //replace two methods getStats and getInventory with following another methods(using prototype syntax)

    Player.prototype.getStats = function () {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    Player.prototype.getInventory = function () {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    // add getHealth method to Player.prototype
    Player.prototype.getHealth = function () {
        return `${this.name}'s health is now ${this.health}!`;
    };

    //add isAlive method to PLayer constructor
    Player.prototype.isAlive = function () {
        if (this.health === 0) {
            return false;
        }
        return true;
    };

    // add reduceHealth methiod to Player object
    Player.prototype.reduceHealth = function (health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };
};

module.exports = Player;