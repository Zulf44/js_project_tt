'use strict';


let money = +prompt("Ваш бюджет на месяц?", ""),
   time = prompt("Введите дату в формате YYYY-MM-DD", "");
ir = 1223;

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};


for (let i = 0; i < 2; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");

   if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

      console.log("done");

      appData.expenses[a] = b;
   } else {
      console.log("bad result");
      i--;
   }

};

// let i = 0;

// while (i < 2) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt("Во сколько обойдется?", "");
//       if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

//          console.log("done");

//          appData.expenses[a] = b;
//          i++
//       } else {
//          console.log("bad result");   
//       }
// }
// let i = 0;

// do {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//       b = prompt("Во сколько обойдется?", "");

//    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

//       console.log("done");

//       appData.expenses[a] = b;
//    } else {
//       console.log("bad result");
//       i--;
//    }
// }
// while (i < 2);





appData.moneyPerDay = appData.budget / 30;


alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
   console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
   console.log("Это высокий уровень достатка!");
} else {
   console.log("Произошла ошибка");
}
appData.moneyPerDay = i;

let irr = 1233;

if (irr > 100) {
   console.log("Минимальный уровень достатка!");
}


switch (irr) {
   case irr > 100:
      console.log("Минимальный уровень достатка!");
      break;
   case irr > 2000:
      console.log("Это средний уровень достатка!");
      break;
   default:
      console.log('Действие выполнилось?');
      break;
};


let zulf = 19;



switch (zulf) {
   case zulf < 18:
      console.log("1");
      break;
   case zulf > 15:
      console.log("2");
      break;

}