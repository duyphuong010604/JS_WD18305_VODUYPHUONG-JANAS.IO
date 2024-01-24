const arr = ["a", "b", "c", "d", "e"];
const arr1 = ["mot", "hai", "ba"];
const arr2 = [...arr, ...arr1];
console.log(arr.toString());

console.log(arr.at(3));

console.log(arr.join("|"));

console.log(arr.pop());

console.log(arr.push("f"));

console.log(arr.shift());

console.log(arr.unshift("Bang chu cai: "));

delete arr.pop();

console.log(arr.concat(arr1).concat(arr2));

console.log(...arr);

console.log(arr.copyWithin(2, 0));

console.log(...arr);

console.log(arr.flat());

const arr4 = ["a", "b", "c", "d", "e"];

// for each
arr4.forEach((e, i) => {
  console.log(`${i + 1}: ${e}`);
});

//for of
for (const [index, value] of arr4.entries()) {
  console.log(`${index + 1}-${value}`);
}
