function voltarParaLobby() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (!toggle || !menu) return;

  // Remove o atributo hidden para que o menu possa ser animado e mostrado
  menu.removeAttribute("hidden");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("menu-aberto");
  });
});
