"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ time, address, starIndex, menuIndex }) {
    console.log(
      `
        Đạt món vào ${this.starterMenu[starIndex]} Voi mon chinh ${this.mainMenu[menuIndex]} vao luc ${time} tai ${address}
        `
    );
  },

  oderPasta: function (ing1, ing2, ing3) {
    console.log(`Cac topping di kem: ${ing1}, ${ing2}, ${ing3}`);
  },
  oderPizza: function (mainPizza, ...topping) {
    console.log(mainPizza);
    console.log(topping);
  },
};

//Sets
const oderSets = new Set(["Pizza", "Valo", "Nudel", "Pizza", "Milk", "milk"]);
console.log(oderSets);

console.log(oderSets.size);
console.log(oderSets.has("Pizza"));
console.log(oderSets.has("Mif"));

oderSets.add("Mi Tom");
oderSets.add("Mi Tom");

oderSets.delete("Pizza");
oderSets.delete("Hahahaha");
oderSets.clear();
console.log(oderSets);

//118
console.log(`-----118-------`);
const newMap = new Map();
newMap.set("name", "Vo duy phuong");
newMap.set("Tuoi", 19);
newMap.set("Dia chi", "Chau phu AN gIANG");

console.log(newMap);

newMap
  .set("categries", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 24)
  .set(true, "Mo cua luon luon :)))")
  .set(false, "Rat tiec mat co hoi :(((((");

console.log(newMap.get("categries"));
const time = 21;
console.log(
  newMap.get(time > newMap.get("open") && time < newMap.get("close"))
);

console.log(newMap.has("categries"));
console.log(newMap.delete("open"));
const arr = [1, 2];
newMap.set(arr, ["alooooo", "nooo"]);

console.log(newMap);
console.log(newMap.size);
console.log(newMap.get(arr));

//119
console.log(`-----119-------`);
const question = new Map([
  ["question", "Ngôn ngữ lập trình thông dụng nhất hiện nay là?"],
  [1, "C"],
  [2, "Javascript"],
  [3, "Java"],
  ["conrect", 2],
  [true, "Chính xác!"],
  [false, "Chọn lại!"],
]);

console.log(question);
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Đáp án ${key}: ${value}`);
}
const dapan = 2;
console.log(question.get(question.get("conrect")) == question.get(dapan));

console.log([...question]);
console.log(...question.entries());
console.log(...question.keys());
console.log(...question.values());
