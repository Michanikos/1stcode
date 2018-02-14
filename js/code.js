/* Design the logic for a program for the River Falls Homes Construction
Company. Design a program that prompts the user for a lot number in the
River Falls subdivision, and data about the home to be built there including
number of bedrooms, number of bathrooms, and size of garage in number of
cars it holds. Output is the price of the home which is $50,000 base price plus
$17,000 for each bedroom, $12,500 for each bathroom, and $6,000 for each car
the garage holds. (Only needs to run once) */

"use strict";
const PROMPT = require('readline-sync');
let lot, bedroom, bed2, bathroom, bath2, garage, garage2, finalPrice;
const basePrice = 50000;
const bedThing = 17000;
const bathThing = 12500;
const carThing = 6000;

/**
 * @method
 * @desc
 * @returns {null}
 */

function main() {
    setLot();
    setBedroom();
    setBathroom();
    setGarage();
    printResults();
}

main();

/**
 * @method
 * @desc lot mutator
 * @returns {null}
 */
function setLot() {
    lot = PROMPT.question('\n Enter lot number: ');
}

/**
 * @method
 * @desc bedroom mutator
 * @returns {Number}
 */
function setBedroom() {
    bedroom = PROMPT.question('\n How many bedrooms?: ');
    bed2 = bedroom * bedThing;
}

/**
 * @method
 * @desc bathroom mutator
 * @returns {Number}
 */
function setBathroom() {
    bathroom = PROMPT.question('\n How many bathrooms?: ');
    bath2 = bathroom * bathThing;
}

/**
 * @method
 * @desc garage mutator
 * @returns {Number}
 */
function setGarage() {
    garage = PROMPT.question('\n How many cars can the garage hold?: ');
    garage2 = garage * carThing;
}

/**
 * @method
 * @desc printing results
 * @returns {null}
 */
function printResults() {
    finalPrice = bed2 + bath2 + garage2 + basePrice;
    console.log("\nYour lot number is " + lot + ". You had " + bedroom + " bedrooms, " + bathroom + " number of bathrooms, and your garage can fit " + garage + " car.");
    console.log("\nYour total is " + finalPrice + ".");
}