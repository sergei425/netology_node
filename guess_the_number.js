#!/usr/bin/env node
const readlineSync = require ('readline-sync') ; 

const getRandomNumber = (min = 0, max = 100) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};

let number = getRandomNumber();
console.log("Загадано число в диапазоне от 0 до 100");

let num = readlineSync.question("Enter the number ")

while (true) {
  if (number > num) {
    console.log("Больше");
    console.log(num);
    num = readlineSync.question("Enter the number ")
  } else if (number < num) {
    console.log("Меньше");
    console.log(num);
    num = readlineSync.question("Enter the number ")
  } else {
    console.log(`Отгадано число ${num}`);
    break
  }
}
