let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),


    expensesItemBtn = document.querySelector('button.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('button.optionalexpenses-btn'),
    countBtn = document.querySelector('button.count-budget-btn'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    optionalExpensesItems = document.querySelectorAll('input.optionalexpenses-item'),
    expensesItems = document.querySelectorAll('input.expenses-item');


let money, time;

startBtn.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Ваш бюджет на месяц?", '');

// проверяем поле money
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function () {
  if (appData.budget != undefined){
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
      let quest = expensesItems[i].value,
          answer = expensesItems[++i].value;

      if ((typeof (quest)) === 'string' && (typeof (quest)) != null && (typeof (answer)) != null
          && quest != '' && answer != '' && quest.length < 50) {
        appData.expenses[quest] = answer;
        // добавляем в каждом цикле значение ответа
        sum += +answer;
      } else {
        i = i - 1;
      }
    }
    expensesValue.textContent = sum;
    appData.expensesSum = sum;
  }

});
optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItems.length; i++) {
    let opt = optionalExpensesItems[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay <= 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Ошибка вычисления';
    }
  } else {
    levelValue.textContent = 'Ошибка! Установите Ваш бюджет';
  }

});

chooseIncome.addEventListener('input', function () {
  let items = chooseIncome.value;
  if (items != '' && typeof (items) === 'string' && typeof (items) != null) {
    appData.income = items.split(', ');
    appData.income.sort();
  } else {
    console.log('что-то не так!');
  }
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
    console.log(appData.monthIncome);
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
    console.log(appData.monthIncome);
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,

};
