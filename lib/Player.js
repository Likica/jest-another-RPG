const Potion = require('../lib/Potion');
const Character = require('./Character');

// rewrite functions to ES6 class
class Player extends Character {
    constructor(name = '') {
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

// function Player(name = '') {
//     this.name = name;

//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);

//     this.inventory = [new Potion('health'), new Potion()];
// }
// inherit prototype methods from Character here:
// Player.prototype = Object.create(Character.prototype);

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

// Player.prototype.getStats = function () {
//     return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//     };
// };

// Player.prototype.getInventory = function () {
//     if (this.inventory.length) {
//         return this.inventory;
//     }
//     return false;
// };


// add getHealth method to Player.prototype
// Player.prototype.getHealth = function () {
//     return `${this.name}'s health is now ${this.health}!`;
// };

// //add isAlive method to PLayer constructor
// Player.prototype.isAlive = function () {
//     if (this.health === 0) {
//         return false;
//     }
//     return true;
// };

// // add reduceHealth methiod to Player object
// Player.prototype.reduceHealth = function (health) {
//     this.health -= health;

//     if (this.health < 0) {
//         this.health = 0;
//     }
// };

// //getAttack value for hthe player
// Player.prototype.getAttackValue = function () {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// };

//addPotion method to PLayer prototype/object
// Player.prototype.addPotion = function (potion) {
//     this.inventory.push(potion);
// };

// usePotion method for the player object/prototype
// Player.prototype.usePotion = function (index) {
//     const potion = this.getInventory().splice(index, 1)[0];

//     switch (potion.name) {
//         case 'agility':
//             this.agility += potion.value;
//             break;
//         case 'health':
//             this.health += potion.value;
//             break;
//         case 'strength':
//             this.strength += potion.value;
//             break;
//     }
// };

module.exports = Player;