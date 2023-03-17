 "use strict"

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("Let's celebrate 🍻");

// function foodProcessor(apples, oranges){
//     const juice = `Juice contains ${apples} apples 🍎 and ${oranges} oranges 🍊.`
//     return juice;
// }

// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);
// const orangeJuice = foodProcessor(0, 5);
// console.log(orangeJuice);

//Function declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1996);
// console.log(age1);

//Function Expression
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age2);

// console.log(age1, age2);


//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1991));

// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age3 = 2023 - birthYear;
//     const retirement = 60 - age3;
//     return `${firstName} will retire in next ${retirement} years.`;
// };

// const retirement = yearsUntilRetirement(1965,"Ajay Kumar Srivastava");
// console.log(retirement);

//Calling function from another function
// function cutIntoPieces(fruit){
//     return fruit * 4;
// }

// function foodProcessor(apples, oranges){
//     const applePieces = cutIntoPieces(apples);
//     const orangePieces = cutIntoPieces(oranges);
//     const juice = `Juice contains ${applePieces} pieces apples 🍎 and ${orangePieces} pieces oranges 🍊.`
//   return juice;
// }

// const juice = foodProcessor(4, 6);
// console.log(juice);

// function age(birthYear){
//    return 2023 - birthYear;
// }

// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age3 = age(birthYear);
//     const retirement = 60 - age3;
//     if(retirement > 0){
//         return `${firstName} will retire in next ${retirement} years.`; 
//     }else{
//         return -1;
//     }
// };

// const retire = yearsUntilRetirement(1965,'John');
// console.log(retire);

// const friends = [`Manish`,`Akshay`,`Pritam`];
// console.log(friends.length);
// console.log(friends);
// const years = new Array('2000','2001','2002','2003');
// console.log(years);

//Adding elements
// const newlength = friends.push(`Abhijeet`);
// const x = friends.unshift(`Chandan`);
// console.log(x, friends, newlength);

//Removing elements
// const popped = friends.pop();
// const rem = friends.shift();
// console.log(popped,friends,rem);

//ES6 features
// console.log(friends.includes(`Manish`));
// console.log(friends.includes(`Akshay`));

// if(friends.includes(`Manish`)){
//     console.log(`You have a friend Manish`);
// }

//Object
 const nishant = {
    firstName : 'Nishant',
    lastName  : 'Srivastava',
    age       : 2023-1996,
    job       : 'Software Engineer',
    friends   : ['Manish','Prayank','Ankit']
 }

//  const nameKey = 'Name';
//  console.log(nishant.firstName);
//  console.log(nishant['firstName']);
//  console.log(nishant['first' + nameKey]);

//  const interestedIn = prompt(`What do you want to know anout nishant? firstname, lastname, age, job, friends?`);
//  nishant[interestedIn] ? console.log(nishant[interestedIn]) : console.log(`Wrong choice!! choose in between firstName, lastName, age, job, friends`);

nishant.location = 'Pune';
nishant["Instagram"] = 'nishant02998'; 

console.log(nishant);

//Challenge
console.log(nishant.firstName + ` has ` + nishant.friends.length + ` friends , and his best friend is called ` + nishant.friends[0]);


