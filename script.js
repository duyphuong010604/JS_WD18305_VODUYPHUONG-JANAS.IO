document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log(this);
  var form = this;
  //   console.log(form);
  var formData = new FormData(this);
  //   console.log(formData.get("title"));
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "http://localhost:3000/posts", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onloadstart = function () {
    console.log(this);
    console.log("Truoc khi gui!");
    form.querySelector("button").innerHTML = "Dang gui.......";
  };

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      console.log("Du lieu da dc gui");
      form.querySelector("button").innerHTML = "luu lai";
    } else {
      console.error("loi xai ra r!");
    }
  };

  xhr.onloadend = function () {
    console.log(this);
    console.log("Thanh cong");
    form.querySelector("button").innerHTML = "oki";
  };

  let object = {
    email: formData.get("title"),
  };
  xhr.send(JSON.stringify(object));
});
