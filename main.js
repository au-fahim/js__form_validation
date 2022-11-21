// Element Selector
const form = document.querySelector(".signup-form");
const usrName = document.querySelector(".usr-name");
const usrMail = document.querySelector(".usr-mail");
const pwd = document.querySelector(".pwd");
const confirmPwd = document.querySelector(".cnfm-pwd");

// Show Error Alert-Message
function showError(input, msg) {
  const inputControl = input.parentElement;
  inputControl.className = "form-element error";

  const alertMsgBox = inputControl.querySelector("small");
  alertMsgBox.innerText = msg;
}

// Show Success Alert-Message
function showSuccess(input) {
  input.parentElement.className = "form-element success";
}

function checkEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Email are not valid");
  }
}

// Check required fields
function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check Input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.lenght > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
  }
}

// Check two password are match or not
function checkPwd(pwd, confirmPwd) {
  if (pwd.value !== confirmPwd.value) {
    showError(confirmPwd, "Password do not match");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([usrName, usrMail, pwd, confirmPwd]);

  checkLength(usrName, 3, 30);
  checkLength(pwd, 4, 8);
  // checkLength(confirmPwd, 4, 8);

  checkEmail(usrMail);

  checkPwd(pwd, confirmPwd);
});
