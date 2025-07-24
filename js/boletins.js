document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formBoletim");
  const lista = document.getElementById("listaBoletins");
  const voltarBtn = document.getElementById("voltar");
  const toggleBtn = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  const listarBtn = document.getElementById("listarBoletins");
  const buscarBtn = document.getElementById("buscarBoletim");
  const removerBtn = document.getElementById("removerBoletim");

  const boletins = [];

  function criarBoletimItem({ aluno, disciplina, nota }) {
    const item = document.createElement("li");
    item.classList.add("boletim-bolha");
    item.dataset.aluno = aluno.toLowerCase();
    item.innerHTML = `
      <strong>Aluno:</strong> ${aluno}<br>
      <strong>Disciplina:</strong> ${disciplina}<br>
      <strong>Nota:</strong> ${nota}
      <button class="remove-btn" title="Remover">×</button>
    `;
    return item;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const aluno = document.getElementById("aluno").value.trim();
    const disciplina = document.getElementById("disciplina").value;
    const nota = document.getElementById("nota").value.trim();

    if (!aluno || !nota) {
      alert("Preencha todos os campos!");
      return;
    }

    const novo = { aluno, disciplina, nota };
    boletins.push(novo);

    const item = criarBoletimItem(novo);
    lista.appendChild(item);
    form.reset();
  });

  lista.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
      const li = event.target.closest("li");
      const nomeAluno = li.dataset.aluno;
      const index = boletins.findIndex(b => b.aluno.toLowerCase() === nomeAluno);
      if (index !== -1) boletins.splice(index, 1);
      li.remove();
    }
  });

  
  listarBtn.addEventListener("click", function () {
    lista.innerHTML = "";
    boletins.forEach(b => {
      lista.appendChild(criarBoletimItem(b));
    });
  });


  buscarBtn.addEventListener("click", function () {
    const nome = prompt("Digite o nome do aluno para buscar:").toLowerCase();
    if (!nome) return;

    lista.innerHTML = "";
    boletins
      .filter(b => b.aluno.toLowerCase().includes(nome))
      .forEach(b => {
        lista.appendChild(criarBoletimItem(b));
      });

    if (lista.childNodes.length === 0) {
      lista.innerHTML = `<li class="boletim-bolha">Nenhum boletim encontrado.</li>`;
    }
  });

  removerBtn.addEventListener("click", function () {
    const nome = prompt("Digite o nome do aluno a remover:").toLowerCase();
    if (!nome) return;

    const removidos = boletins.filter(b => b.aluno.toLowerCase() === nome);
    if (removidos.length === 0) {
      alert("Nenhum boletim encontrado com esse nome.");
      return;
    }

    
    for (let i = boletins.length - 1; i >= 0; i--) {
      if (boletins[i].aluno.toLowerCase() === nome) {
        boletins.splice(i, 1);
      }
    }

    listarBtn.click(); 
  });

  
  if (voltarBtn) {
    voltarBtn.addEventListener("click", function () {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "../index.html";
      }
    });
  }

  
  if (toggleBtn && navbar) {
    toggleBtn.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });
  }
});

 document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("menu-aberto");
    navbar.classList.toggle("menu-fechado");
  });
});
