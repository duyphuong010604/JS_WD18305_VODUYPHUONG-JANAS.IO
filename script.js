const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//2.1.1
const sukien = new Set(gameEvents.values());
console.log(sukien);

//2.1.2
const xoathe = gameEvents.delete(64);
console.log(gameEvents);

//2.1.3

console.log(
  `Trung bình 1 sự kiện sảy ra trung bình ${90 / gameEvents.size} phút.`
);

//2.1.4

for (const [phut, sukien] of gameEvents) {
  const hiep = phut <= 45 ? "Hiệp 1" : "Hiệp 2";
  console.log(`${hiep} phút thứ: ${phut}-${sukien}`);
}

//2.2.
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const xuongdong = text.split("\n");
  console.log(xuongdong);
  for (const [i, value] of xuongdong.entries()) {
    const [first, second] = value.toLocaleLowerCase().trim().split("_");
    const kq = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${kq.padEnd(20)}${"*".repeat(i + 1)}`);
  }
});

//2.3
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao937661
09;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis
2323639855;12:30`;

// � Delayed Departure from FAO to TXL (11h25)
// Arrival from BRU to FAO (11h45)
// � Delayed Arrival from HEL to FAO (12h05)
// Departure from FAO to LIS (12h30)
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "�" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

//2.4

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
