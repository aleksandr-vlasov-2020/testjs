let money = +prompt("Ваш бюджет на месяц", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
  b = prompt("Во сколько обойдется?", ""),
  c = prompt("Введите обязательную статью расходов в этом месяце", ""),
  d = prompt("Во сколько обойдется?", "");

appData.expenses.a = b;
appData.expenses.c = d;
alert(appData.budget / 30);
// //5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)