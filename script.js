//Mẫu

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Lab1.1.1

const [player1, player2] = game.players;
console.log(player1, player2);

//Lab1.1.2
const [gk1, ...fieldPlayers1] = [...player1];
const [gk2, ...fieldPlayers2] = [...player2];

console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

//Lab1.1.3

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//Lab1.1.4
const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//Lab1.1.5

const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

//Lab1.1.6

function printGoals(...PlayersScored) {
  console.log(PlayersScored);
}

printGoals(...game.scored);

//Lab1.1.7

game.odds.team1 < game.odds.team2 && console.log("Team 1 dành chiến thắng!");
