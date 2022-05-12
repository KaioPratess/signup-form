const pwd = document.querySelector("#pwd");
const pwdContainer = document.querySelector(".input-container div:nth-child(6)");
const pwdConfirm = document.querySelector("#pwd-confirm");
const pwdConfirmContainer = document.querySelector(".input-container div:nth-child(7)");
const btnSubmit = document.querySelector(".btn");
const inputs = document.querySelectorAll("input:not([type='password'])");
const form = document.querySelector(".form");

function validatePwd(event) {
  if(pwd.value !== pwdConfirm.value) {
    event.preventDefault();
    pwdContainer.classList.add("error");
    pwdConfirmContainer.classList.add("error");
  } else {
    pwdContainer.classList.remove("error");
    pwdConfirmContainer.classList.remove("error");
  }
}

function checkValidity() {
  if(this.validity.valid === true) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid")
  }
}

function showMessage(event) {
  event.preventDefault;
  window.alert('Success');
  setTimeout(() => form.submit(), 2000);
}

btnSubmit.addEventListener('click', validatePwd);

inputs.forEach((input) => {
  input.addEventListener('change', checkValidity);
});

form.addEventListener('submit', showMessage);