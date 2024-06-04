
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