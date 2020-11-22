'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};
let quest1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
  quest2 = prompt('Во сколько обойдется?', '');

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses.quest1 = quest2);
alert(appData.budget / 30);