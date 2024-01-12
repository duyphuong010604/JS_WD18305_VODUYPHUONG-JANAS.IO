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

/*
//spread
let arr = [7, 8, 9];
let Newarr = [9, 2, ...arr];
console.log(Newarr);
console.log(...Newarr);

//copy mianMenu

let mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
let menu = [...restaurant.mainMenu, ...mainMenuCopy];
console.log(menu);

let ingter = [
  //   prompt("Topping 1: "),
  //   prompt("Topping 2: "),
  //   prompt("Topping 3: "),
];

restaurant.oderPasta(...ingter);

//107

const arr107 = [1, 2, 3, 4, 5, 6, 7];

const [a, b, c, ...d] = arr107;
console.log(a, b, c, d);

const [pizza, , robotas, ...conlai] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, robotas, conlai);

//Object

const { fri, ...weekday } = restaurant.openingHours;

console.log(fri, weekday);

//function
const add = function (...number) {
  let sum = 0;
  number.forEach((e, i) => {
    sum = sum + e;
  });
  console.log(sum);
};

add(1, 2, 3, 4, 5, 6, 7, 8, 9);
add(10, 11);

const x = [1, 200];
add(...x);

restaurant.oderPizza("Bate", "cha", "cay", "ot");

//108

console.log(`----OR------`);
console.log("Hello" || 12);
console.log(null || undefined);
console.log(12 || "hello");
console.log(12 || true);
console.log(true || 12);
console.log(null || undefined || 0 || 1 || "Hello" || true);
console.log(`------AND------`);
console.log("Hello" && 12);
console.log(null && undefined);
console.log(12 && "hello");
console.log(12 && true);
console.log(true && 12);
console.log(null && undefined && 0 && 1 && "Hello" && true);
*/
//109
//Nulish bao gom Null va undefined (!0 and "")

restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;
// console.log(guest);

//Nullish: Null and undefined
const guest = restaurant.numGuest ?? 10;
console.log(guest);

//110

const res1 = {
  name: "Hallonila",
  soluong: 0,
};

const res2 = {
  name: "Byebye",
  caigi: "Moot asasasa",
};

//Or
// res1.soluong ??= 10;
// res2.soluong ??= 10;

//And
res1.caigi &&= "An";
res2.caigi &&= "An";
console.log(res1, " ", res2);
