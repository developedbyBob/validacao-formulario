function validateForm() {
  let fields = ["name", "email", "password", "confirm-password"];
  let errorMessage = document.getElementById("error-message");
  errorMessage.innerHTML = "";

  for (let i = 0; i < fields.length; i++) {
    let fieldValue = document.getElementById(fields[i]).value;
    if (fieldValue === "") {
      errorMessage.innerHTML = "Por favor, preencha todos os campos.";
      return false;
    }
  }

  let email = document.getElementById("email").value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMessage.innerHTML = "Por favor, insira um e-mail válido.";
    return false;
  }

  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;
  if (password !== confirmPassword) {
    errorMessage.innerHTML = 'As senhas não coincidem.'
    return false
  }

  return true;
}
