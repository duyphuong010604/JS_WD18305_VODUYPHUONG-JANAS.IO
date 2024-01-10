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
};

restaurant.orderDelivery({
  time: "22:30",
  starIndex: 1,
  menuIndex: 1,
  address: "An giang",
});

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

//Biến biến đổi

let a = 1000;
let b = 800;
const obj = {
  a: 23,
  b: 66,
};
({ a, b } = obj);
console.log(a, b);

//Doi tuong long nhau

let {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);
