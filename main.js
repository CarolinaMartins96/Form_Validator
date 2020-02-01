const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confPass = document.getElementById("confPass");
const submit = document.getElementById("button");

submit.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  checkUsername();
  checkEmail();
  checkFirstPassword();
  checkPassword();
  checkBlank();
}

function checkUsername() {
  regex = /[0-9a-zA-Z]{5,}/;

  if (!regex.test(username.value)) {
    // console.log("failed");
    document.querySelector(".invalid").style.display = "block";
    username.style.borderColor = "red";
  } else {
    // console.log("pass");
    username.style.borderColor = "green";
    document.querySelector(".invalid").style.display = "none";
  }
}

function checkEmail() {
  regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(email.value)) {
    // console.log(email.value);
    document.querySelector(".invalid-email").style.display = "block";
    email.style.borderColor = "red";
  } else {
    email.style.borderColor = "green";
    document.querySelector(".invalid-email").style.display = "none";
  }
}

function checkFirstPassword() {
  regex = /^.{6,}$/;
  if (!regex.test(password.value)) {
    document.querySelector(".invalid-passwordLenght").style.display = "block";
    password.style.borderColor = "red";
  } else {
    document.querySelector(".invalid-passwordLenght").style.display = "none";
    password.style.borderColor = "green";
  }
}

function checkPassword() {
  regex = /[0-9a-zA-Z]{6,}/;
  if (password.value === "" || confPass.value === "") {
    document.querySelector(".invalid-password2").style.display = "block";
    confPass.style.borderColor = "red";
  } else if (password.value !== confPass.value) {
    document.querySelector(".invalid-password").style.display = "block";
    password.style.borderColor = "red";
    confPass.style.borderColor = "red";
  } else {
    document.querySelector(".invalid-password").style.display = "none";
    document.querySelector(".invalid-password2").style.display = "none";
    password.style.borderColor = "green";
    confPass.style.borderColor = "green";
  }
}

function checkBlank() {
  if (email.value == "" || username.value == "") {
    alert("Please fill the form");
  }
}
