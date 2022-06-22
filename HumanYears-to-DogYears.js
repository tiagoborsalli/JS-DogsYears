const myAge = 32; // This is my age.
let earlyYears = 2; // The first two dog years accounts differently from the rest.
earlyYears *= 10.5; // Dogs accounts around 10.5 years old in their first 2 human years.
let laterYears = myAge - 2;
laterYears *= 4;
let myAgeInDogYears = earlyYears + laterYears; // My age in dog years
let myName = 'Tiago Borsalli';
myName = 'Tiago Borsalli'.toLowerCase(); // returns my name in lower case letters;
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`)