/*
let js = "Amazing";
//if (js === "Amazing") alert("Javascript is fun!");
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log('23')
let firstName = "Matila";
let firstNamePerson = "Jack";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
let _function = "function";
console.log(_function);
let $function = "function";
console.log($function);
let PI = 3.145;
console.log(PI);
let myFirstJob    = "Programmer";
let myCurrentJob = "Teacher";
console.log(myFirstJob);
console.log(myCurrentJob);
*/
/*
let javaScript = true;
console.log(javaScript);
console.log(typeof javaScript);
//console.log(typeof true);
//console.log(typeof 23);
//console.log(typeof Jonas);
//console.log(typeof 'Jonas');
javaScript = 'Yes!';
console.log(typeof javaScript);
let year;//When we declare empty variable it automatically hold the value of undefined.
console.log(year);//Undefined
console.log(typeof year);//Undefined
year = 1991;//Dynamic typing
console.log(year);//1991
console.log(typeof year);//number
//Bug of JS
console.log(typeof null);//undefined
*/
//_______________Let, Const & Var______________
let age = 30;
age = 31;//Reassigning value to variable or mutated a variable.
const birthYear = 1991;
//birthYear = 1990;variables declared with const cannot be changed and cannot be empty;

//const job;

//var is an old way to declaring variables before ES6
// var job = "programmer";
// job     = "teacher";

// lastName = "Srivastava";
// console.log(lastName);
// console.log(typeof lastName);


//Type Conversion and Type Coercion
//When type of variable is change manually by programmer then it is called type conversion otherwise if it is done implicitly it's called type coercion.
//Type Conversion
// const inputYear = '1996';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));//NAN (not a number)
// console.log(typeof NaN);// number

// console.log(String(23), 23);

//Type Coercion
// console.log('I am ' + 23 + ' years old');// 23 converted into strings

// console.log('25' - '10' - 5);
// console.log('23' / '2');

// let n = '1' + 1; //11
// n = n-1;
// console.log(n);//10

//5 falsy values : 0, '', undefined, null, NaN
//All these 5 values will convert to false when we try to convert it into boolean.

console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true

const money = 0;//const money:number, but 0 is falsy value means when js try to convert it into boolean it will become false.
if(money){
    console.log("Don't spend it all🤑");
}else{
    console.log('You should get a job😒');
}

let height;//let height:undefined, undefined is a falsy value when js try to convert it into boolean it will become false.
if(height){
    console.log("YAY! height is defined");
}else{
    console.log("Height is undefined");
}


