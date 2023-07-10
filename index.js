function formvalid() {
  var validpass = document.getElementById("pass").value;

  if (validpass.length <= 8 || validpass.length >= 20) {
    document.getElementById("valid-pass").innerHTML = "Minimum 8 characters";
    return false;
  } else {
    document.getElementById("valid-pass").innerHTML = "";
  }
}
function show() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("showing").src =
      "https://static.thenounproject.com/png/777494-200.png";
  } else {
    x.type = "password";
    document.getElementById("showing").src =
      "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
  }
}
