// 'use strict';
let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
// проверяем поле money
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}

start();


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  // получаем поля доп. расходов и проверяем их на заполнение
  choseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let quest = prompt('Введите обязательную статью расходов в этом месяце', ''),
          answer = +prompt('Во сколько обойдется?', '');

      if ((typeof (quest)) === 'string' && (typeof (quest)) != null && (typeof (answer)) != null
          && quest != '' && answer != '' && quest.length < 50) {
        appData.expenses[quest] = answer;
      } else {
        console.log('проходим заново цикл ');
        i = i - 1;
      }
    }
  },
  // получаем ежедневный доход
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay <= 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Ошибка вичисления');
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накопления', ''),
          percent = +prompt('Под какой процент', '');

      appData.monthIncome = save / 100 / 12 * percent;

      alert('Ваш доход в месяц с депозита ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let opt = prompt('Статья необязательных расходов?', '');
      appData.optionalExpenses[i] = opt;
    }
  },
  // получаем данные и записываем в массив income
  chooseIncome: function () {
    let items = prompt('Что принесет доп.доход? (через запятую)');
    if (items!= '' && typeof(items) === 'string' && typeof(items) != null){
      appData.income = items.split(', ');
      appData.income.push(prompt('может еще что-то?'));
      appData.income.sort();
      console.log('дополнительные способы заработка: ')
      appData.income.forEach(function (item, i) {
        console.log((i + 1) + '. ' + item);
      });
    }else{
      console.log('что-то не так!');
    }
  }
};
console.log('Наша программа включает в себя данные:');
for (let appDataKey in appData) {
  console.log(appDataKey);
}


