"use strict"
var money = prompt("Ваш бюджет на месяц?")
var time = prompt("Введите дату в формате YYYY-MM-D")
var appData = {
    budjet: money,
    timedata: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings:false
};

for (let i=0; i<2; i++) {
    let a=prompt("Введите обязательную статью расходов в этом месяце"),
        b=prompt("Во сколько обойдется?");

    appData.expenses[a] = b
}


alert(appData.budjet/30);

console.log(appData)
