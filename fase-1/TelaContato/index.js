const sendEmailButton = document.getElementById("send-email");
sendEmailButton.addEventListener("click", sendEmail);

function sendEmail() {
  const areFieldsValid = validateFields();

  if (!areFieldsValid) {
    alert("Campos inválidos, verifique nome, email e mensagem.");
    return;
  }

  alert("Email enviado com sucesso!");

  setTimeout(() => {
    window.location.reload();
  }, 3000);
  // send the email properly
}

function validateFields() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  return isNameValid && isEmailValid && isMessageValid;
}

function validateName() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  let isNamevalid = true;

  if (name.length <= 0 || name.length > 180) {
    isNamevalid = false;
    alertUserThatFieldIsInvalid(nameInput);
  } else {
    setDefaultBorderColor(nameInput);
  }

  return isNamevalid;
}

function validateEmail() {
  const emailRegexValidation =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  let isEmailValid = true;

  if (email.length <= 0 || !email.match(emailRegexValidation)) {
    isEmailValid = false;
    alertUserThatFieldIsInvalid(emailInput);
  } else {
    setDefaultBorderColor(emailInput);
  }

  return isEmailValid;
}

function validateMessage() {
  const messageInput = document.getElementById("message");
  const message = messageInput.value;

  let isMessageValid = true;

  if (message.length <= 0 || message.length > 3000) {
    isMessageValid = false;
    alertUserThatFieldIsInvalid(messageInput);
  } else {
    setDefaultBorderColor(messageInput);
  }

  return isMessageValid;
}

function alertUserThatFieldIsInvalid(element) {
  element.style.borderColor = "red";
}

function setDefaultBorderColor(element) {
  element.style.borderColor = "grey";
}
