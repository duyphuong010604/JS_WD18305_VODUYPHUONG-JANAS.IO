// GET request for remote image in node.js
axios({
  method: "get",
  url: "http://localhost:3000/posts/1",
  data: {
    title: "a title",
    views: 100,
  },
}).then(function (response) {
  console.log(response);
});
