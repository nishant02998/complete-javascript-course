"use strict"

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("Let's celebrate 🍻");

function foodProcessor(apples, oranges){
    const juice = `Juice contains ${apples} apples 🍎 and ${oranges} oranges 🍊.`
    return juice;
}

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);
const orangeJuice = foodProcessor(0, 5);
console.log(orangeJuice);