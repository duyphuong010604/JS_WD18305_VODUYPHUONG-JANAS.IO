"use strict";

// const infor = (name, age) =>
//   console.log(`Toi ten la ${name} nam nay toi ${age}`);

// infor("Vo Duy Phuong", 19);

//135
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(113, "Vo Duy Phuong");

const book = lufthansa.book;

book.call(lufthansa, 232, "Anh Thu");
console.log(lufthansa);
const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 232, "Anh Thu");

//Apply

const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// The bind Method
const bookLU = book.bind(lufthansa);
const bookLU12 = book.bind(lufthansa, 12);

bookLU(123, "Hao");
bookLU12("Dat 12 trc r");
