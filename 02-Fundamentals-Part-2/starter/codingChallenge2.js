"use strict"

// const bills = [125,155,44];
// const tips = [];
// const total = [];
// const calcTip = function(bills){
//     let i = 0;
//     for(i=0;i < bills.length;i++){
//         if(bills[i] < 300 && bills[i] > 50){
//             let tip = 0.15 * bills[i];
//             tips.push(tip);
//             total.push(tip+bills[i]);
//         }else{
//             let tip = 0.20 * bills[i];
//             tips.push(tip);
//             total.push(tip+bills[i]);
//         }
//     }
// }

// calcTip(bills);
// console.log(bills);
// console.log(tips);
// console.log(total);

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125,155,44];
const tips  = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`bills =` + bills + ` tips = ` + tips + ` total = ` +total);