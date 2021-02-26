["use strict"]

let users = [
   { id: 1, name: "Вася" },
   { id: 2, name: "Петя" },
   { id: 3, name: "Маша" }
];

let user = users.find((item) => item.id == 1);

console.log(user.name);

let sayName = function () {
   console.log(this.name);
}

let obj = {
   name: "вася",
   z: { name: "Катя", },
}

obj.z.f = sayName;
obj.f = sayName;


obj.z.f();
obj.f();


["use strict"]
let arr = [1, 3, 543];


let qwe = arr.find(function (item) {
   item == 543;
});

console.log(qwe);





let users = [
   { id: 1, name: "Вася" },
   { id: 2, name: "Петя" },
   { id: 3, name: "Маша" }
];
function ewe(item, index, areey) {
   return item.id === 2;
};

let user = users.find(ewe);

console.log(user.name);








function isPrime(element, index, array) {
   var start = 2;
   while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
         return false;
      }
   }
   return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
console.log([4, 5, 8, 12].find(isPrime)); // 5






function foo(callback) { callback(); };

foo(function () { console.log("Hello!"); });


let aee = {
   red: [3, 5, 21, 214, 226, 231, 3412, 5235, 452, 325, 213]
};

aee.red.forEach(function (element) {
   console.log(++element);
})






