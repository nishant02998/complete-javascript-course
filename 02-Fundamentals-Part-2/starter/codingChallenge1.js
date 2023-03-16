"use strict"

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;
const avgDolphin = calcAverage(44,23,71);
const avgKoala = calcAverage(65,54,49);

function checkWinner(avgDolphin,avgKoala){
  if(avgDolphin > avgKoala) return `dolphin wins ${avgDolphin} v/s ${avgKoala}`
  else return `koalas wins ${avgKoala} v/s ${avgDolphin}`
}

const winner = checkWinner(avgDolphin,avgKoala);
console.log(winner);

