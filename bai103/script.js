const arr = [0, 1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

const [x, y, z, e] = arr;

console.log(x, y, z, e);
console.log(arr);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, , second] = restaurant.categories;
console.log(first, second);
// nhan 2 gia tri tu 1 mang
const [khaivi, monchinh] = restaurant.order(0, 0);
console.log(khaivi, monchinh);
// tach mang long nhau

const long = [2, 3, [4, 5]];
const [i, , j] = long;
console.log(i, j);
const [ik, , [jk, kk]] = long;
console.log(ik, jk, kk);
