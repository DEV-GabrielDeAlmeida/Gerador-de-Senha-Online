// DEFINE O TAMANHO PADRÃO DA SENHA
let passwordLength = 16;

// GERA A SENHA
function generatePassword() {
  let chars = "abcdefghjkmnpqrstuvwxyz";

  const upperCaseChars = "ABCDEFGHJKMNPQRSTUVWXYZ";
  const numberChars = "123456789";
  const symbolChars = "!@#$%^&*()[]";

  if (upperCaseCheckEl.checked) {
    chars += upperCaseChars;
  }

  if (numberCheckEl.checked) {
    chars += numberChars;
  }

  if (symbolCheckEl.checked) {
    chars += symbolChars;
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }

  inputPasswordEl.value = password;
}

// ALTERA O TAMANHO DA SENHA
function changePassword() {
  passwordLength = inputPasswordLengthEl.value;
  document.querySelector("#password-length").innerText = passwordLength;
  generatePassword();
}

// COPIA A SENHA PARA A ÁREA DE TRANSFERÊNCIA
function copyPassword() {
  navigator.clipboard.writeText(inputPasswordEl.value);
}

// RECUPERA OS ELEMENTOS DO DOM E ADICIONA EVENTOS
const inputPasswordEl = document.querySelector("#input-password");

const upperCaseCheckEl = document.querySelector("#uppercase-check");
const numberCheckEl = document.querySelector("#number-check");
const symbolCheckEl = document.querySelector("#symbol-check");
upperCaseCheckEl.addEventListener("click", generatePassword);
numberCheckEl.addEventListener("click", generatePassword);
symbolCheckEl.addEventListener("click", generatePassword);

const inputPasswordLengthEl = document.querySelector("#input-password-length");
inputPasswordLengthEl.addEventListener("input", changePassword);

document.querySelector("#button-copy").addEventListener("click", copyPassword);
document.querySelector("#img-copy").addEventListener("click", copyPassword);

// CHAMA A FUNÇÃO
generatePassword();
