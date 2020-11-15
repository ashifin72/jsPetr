'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD", ''),
  question1 = prompt('Введите обязательную статью расходов в этом месяце', ""),
  question2 = prompt('Во сколько обойдется?', "");

let appData = {
  budget: money,
  timeData: time,
  expenses: question1 + " " + question2
};
console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);
alert(appData.budget/30);