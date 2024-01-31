axios({
  method: "delete",
  url: "http://localhost:3000/data",
}).then(function (response) {
  console.log(response);
});
