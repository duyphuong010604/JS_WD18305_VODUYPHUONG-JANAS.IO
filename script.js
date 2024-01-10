console.log("Buổi 2");

//Ôn tập mảng
let Cars = ["BMW", "Vonvol", "Vinfast"];

let Dog = {
  name: "Mina",
  sua: function () {
    console.log("Gau gau gau");
  },
};

console.log(Dog.sua());

let object_Student = {
  id: "PC06941",
  name: "Vo Duy Phuong",
  mon: {
    id: 12334,
    name: "Toan",
  },
};

console.log(object_Student.name, "", object_Student.id);

let {
  id: id_student,
  name: name_student,
  mon: { id: id_mon, name: mon },
} = object_Student;

console.log(mon);

let Student = {
  caterory: [
    {
      id: 1234,
      name: "Toan",
    },
    {
      id: 12345,
      name: "Toan1",
    },
    {
      id: 12346,
      name: "Toan2",
    },
    {
      id: 12347,
      name: "Toan3",
    },
    {
      id: 12348,
      name: "Toan4",
    },
  ],
};

Student.caterory.forEach((e, i) => {
  console.log(e);
  console.log(i);
});

for (const iterator of Student.caterory) {
  console.log(iterator);
}

// Set and Map
