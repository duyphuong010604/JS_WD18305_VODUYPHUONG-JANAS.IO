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
