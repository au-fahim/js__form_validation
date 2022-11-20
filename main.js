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

function isValidEmail(emailAddr) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return re.test(String(emailAddr).toLowerCase());
}

// Check required fields
function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is Required`);
      console.log(input.id);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([usrName, usrMail, pwd, confirmPwd]);

  // Not a smart code --> --> --> --> -->
  // Checking User Name Empty or not
  // if (usrName.value === "") {
  //   showError(usrName, "User Name is Required");
  // } else {
  //   showSuccess(usrName);
  // }

  // // Checking User Mail Empty or not
  // if (usrMail.value === "") {
  //   showError(usrMail, "E-mail is Required");
  // } else if (!isValidEmail(usrMail.value)) {
  //   showError(usrMail, "Please Give a Valid E-mail");
  // } else {
  //   showSuccess(usrMail);
  // }

  // // Checking User Password Empty or not
  // if (pwd.value === "") {
  //   showError(pwd, "User Password is Required");
  // } else {
  //   showSuccess(pwd);
  // }

  // // Checking Confirm Password Empty or not
  // if (confirmPwd.value === "") {
  //   showError(confirmPwd, "Confirm Password is Required");
  // } else {
  //   showSuccess(confirmPwd);
  // }
});
