// Seleção das seções de login, cadastro e alteração de senha
const loginSection = document.getElementById("login-section");
const cadastroSection = document.getElementById("cadastro-section");
const alterarSenhaSection = document.getElementById("alterar-senha-section");

const mensagemErro = document.getElementById("mensagemErro");
const mensagemCadastro = document.getElementById("mensagemCadastro");
const mensagemAlterarSenha = document.getElementById("mensagemAlterarSenha");


function mostrarSecao(secao) {
  loginSection.style.display = "none";
  cadastroSection.style.display = "none";
  alterarSenhaSection.style.display = "none";

  secao.style.display = "block";


  mensagemErro.textContent = "";
  mensagemCadastro.textContent = "";
  mensagemAlterarSenha.textContent = "";
}


document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!usuario || !senha) {
    mensagemErro.textContent = "Por favor, preencha todos os campos.";
    return;
  }


  if (usuario === "admin" && senha === "1234") {
    window.location.href = "lobby.html";
  } else {
    mensagemErro.textContent = "Usuário ou senha incorretos.";
  }
});


document.getElementById("cadastro").onclick = () => {
  mostrarSecao(cadastroSection);
};

document.getElementById("cadastroForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const novoUsuario = document.getElementById("novoUsuario").value.trim();
  const novaSenha = document.getElementById("novaSenha").value.trim();
  const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

  if (!novoUsuario || !novaSenha || !confirmarSenha) {
    mensagemCadastro.style.color = "red";
    mensagemCadastro.textContent = "Preencha todos os campos.";
    return;
  }

  if (novaSenha !== confirmarSenha) {
    mensagemCadastro.style.color = "red";
    mensagemCadastro.textContent = "As senhas não coincidem.";
    return;
  }


  mensagemCadastro.style.color = "green";
  mensagemCadastro.textContent = "Cadastro realizado com sucesso!";
  this.reset();
});

document.getElementById("voltarLogin").onclick = () => {
  mostrarSecao(loginSection);
};

document.getElementById("alterarSenha").onclick = () => {
  mostrarSecao(alterarSenhaSection);
};

document.getElementById("voltarLoginDaAlterar").onclick = () => {
  mostrarSecao(loginSection);
};

document.getElementById("alterarSenhaForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const usuarioAlterar = document.getElementById("usuarioAlterar").value.trim();
  const senhaAtual = document.getElementById("senhaAtual").value.trim();
  const novaSenhaAlterar = document.getElementById("novaSenhaAlterar").value.trim();
  const confirmarNovaSenhaAlterar = document.getElementById("confirmarNovaSenhaAlterar").value.trim();

  if (!usuarioAlterar || !senhaAtual || !novaSenhaAlterar || !confirmarNovaSenhaAlterar) {
    mensagemAlterarSenha.style.color = "red";
    mensagemAlterarSenha.textContent = "Preencha todos os campos.";
    return;
  }

  if (novaSenhaAlterar !== confirmarNovaSenhaAlterar) {
    mensagemAlterarSenha.style.color = "red";
    mensagemAlterarSenha.textContent = "As novas senhas não coincidem.";
    return;
  }

  mensagemAlterarSenha.style.color = "green";
  mensagemAlterarSenha.textContent = "Senha alterada com sucesso!";
  this.reset();
});

document.getElementById("esqueciSenha").onclick = () => {
  alert("Um link de recuperação será enviado ao seu e-mail (funcionalidade futura).");
};

document.getElementById("ajuda").onclick = () => {
  alert("Para suporte, entre em contato com a secretaria.");
};

document.getElementById("sair").onclick = () => {
  window.location.href = "../index.html";
};

document.getElementById("voltar").onclick = () => {
  window.location.href = "../index.html";
};

function voltarParaLobby() {
window.location.href = "../index.html";

}
