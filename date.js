#!/usr/bin/env node

const argv = process.argv.slice(2);

let year = argv[1] === "--year" || argv[1] === "-y";
let month = argv[1] === "--month" || argv[1] === "-m"
let data = argv[1] === "--date" || argv[1] === "-d"

if (argv[0] === "current") {
  if (argv.length === 1) {
    console.log(new Date().toISOString());
  } else if (year) {
    console.log(new Date().getFullYear());
  } else if (month) {
    console.log(new Date().toLocaleString("default", { month: "long" }));
  } else if (data) {
    console.log(new Date().getDate());
  }
} else if (argv[0] === "add" || argv[0] === "sub") {
  if (year) {
    let date = new Date()
    var newDate = argv[0] === "add" ? new Date(date.setFullYear(date.getFullYear() + +argv[2])) : new Date(date.setFullYear(date.getFullYear() - +argv[2]));
    console.log(newDate);
  } else if (month) {
    let date = new Date()
    var newDate = argv[0] === "add" ? new Date(date.setMonth(date.getMonth() + +argv[2])) : new Date(date.setMonth(date.getMonth() - +argv[2]));
    console.log(newDate);
  } else if (data) {
    let date = new Date()
    var newDate = argv[0] === "add" ? new Date(date.setDate(date.getDate() + +argv[2])) : new Date(date.setDate(date.getDate() - +argv[2]));
    console.log(newDate);
  }
} else {
  console.log(
    'Введите корректное значение, "current" для получения даты полностью, "current --year или -y" для получения года, "current --month или -m" для получения месяца, "current --date или -d" для получения даты'
  );
}
// изменил название команды с cmd на cdm так как у меня вызывается терминал windows