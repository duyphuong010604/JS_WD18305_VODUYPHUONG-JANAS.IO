"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const openingHours = {
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
};
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //Dua 1 doi tuong ben ngoai vao o ES6
  openingHours,
  orderDelivery({ time, address, starIndex, menuIndex }) {
    console.log(
      `
        Đạt món vào ${this.starterMenu[starIndex]} Voi mon chinh ${this.mainMenu[menuIndex]} vao luc ${time} tai ${address}
        `
    );
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  oderPasta(ing1, ing2, ing3) {
    console.log(`Cac topping di kem: ${ing1}, ${ing2}, ${ing3}`);
  },
  oderPizza(mainPizza, ...topping) {
    console.log(mainPizza);
    console.log(topping);
  },
};

console.log(restaurant);

//114

console.log("-----114-----");
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "dong";
  console.log(`Nha hang mo vao thu ${day} vao luc ${open} `);
}

//Ve phuong thuc
console.log(restaurant.order?.(1, 2) ?? "Khong co mon nay dau ny");

restaurant.oderPizza?.("hai", "ba") ?? console.log("Khong co mon nay dau ny");

//115
console.log("-----115-----");

//Object Key
const Properties = Object.keys(restaurant.openingHours);
console.log(Properties);

//Object Value

const valueObj = Object.values(openingHours);
console.log(valueObj);

//entries Object
const entries = Object.entries(openingHours);
console.log(entries);
