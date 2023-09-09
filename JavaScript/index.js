console.log("JS extenal");

//data types numbers , string , boolean.. objects and arrays
// variable type let , var , const

const age = 18;
const name = "Prasad";
const boolean = true;

console.log(age);



// Let.. 
// 1.newatha declare karanna baa....re asign karanna puluwan
// 2.scope eken pita use karanna ba 

let a = 12;
a = 15;


// var....
// 1.newatha declare karanna puluwan....re asign karanna puluwan
// 2.scope eken pita use karanna puluwan

var b = 10;
var b = 20;
var b = "Prasad";


// const...
// 1. cant  redecclear ...reasign baa
// 2. scope pita baa

const c = 100;

//Arithmatic op + - * / % 

//Increcment decrement


//Comparisonn op ==  , != , < , > <=  >= 


// functions...2 ways to write function 

function myFunc() {
    console.log("My name is Prasad");
}

// arrow function

const myFunc1 = () => {
    console.log("My name is Indika");
}


// function with parameters

function numberAdd(num1,num2) {
    const tot = num1+num2;
    console.log(tot);
}

// return function

function numberMulti(num1,num2) {
    const tot = num1*num2;
    return tot;
}


const numDev = (num1,num2) =>{
    return num1*num2;
}

const res = numDev(20,2);
console.log(res);

myFunc();
myFunc1();
numberAdd(10,20);


//Flow controllers  if , if else ,  nested if ....

// switch......

const val = "Prasad";

switch (val) {
    case "Prasad":
        console.log("found");
        break;

    case "Kasun" :
        console.log("Ela");
        break;

    default:
        break;
}



