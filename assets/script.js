/*unction validateForm() {
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
}*/


class ValidadorFormulario {
  constructor(name, email, password, confirmPassword) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  validateName() {
    if(this.name.trim() === "") {
      alert("Porfavor, insira seu nome")
      return false;
    }

    return true
  }

  validateEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmail.test(this.email)) {
      alert("Por favor, insira um email válido")
      return false;
    }
    return true;
  }

  validatePassword() {
    if(this.password.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return false
    }
    return true
  }

  validateConfirmPassword() {
    if(this.password !== this.confirmPassword){
      alert("As senhas não coincidem")
      return false;
    }
    return true
  }

  validateForm(){
    return this.validateName() && this.validateEmail() && this.validatePassword() && this.validateConfirmPassword()  
  }
}

function validateForm(){
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById("confirm-password").value

  const validador = new ValidadorFormulario(name,email,password,confirmPassword)
  return validador.validateForm()
}