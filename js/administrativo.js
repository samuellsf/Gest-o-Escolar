document.addEventListener("DOMContentLoaded", function () {
  // ====== Estatísticas ======
  const botaoEstatisticas = document.getElementById("carregarEstatisticas");
  const estatisticas = document.getElementById("estatisticas");

  const totalTurmas = document.getElementById("totalTurmas");
  const totalAlunos = document.getElementById("totalAlunos");
  const totalProfessores = document.getElementById("totalProfessores");
  const totalEventos = document.getElementById("totalEventos");
  const dataAtualizacao = document.getElementById("dataAtualizacao");
  const horaAtualizacao = document.getElementById("horaAtualizacao");

  const mensagemCarregada = document.getElementById("estatisticasCarregadas");
  const mensagemErro = document.getElementById("estatisticasErro");

  async function carregarEstatisticas() {
    try {
      console.log("Buscando estatísticas...");
      const response = await fetch("https://api.exemplo.com/estatisticas"); // Substitua pela URL real da API
      if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

      const dados = await response.json();
      console.log("Dados recebidos:", dados);

      totalTurmas.textContent = dados.totalTurmas;
      totalAlunos.textContent = dados.totalAlunos;
      totalProfessores.textContent = dados.totalProfessores;
      totalEventos.textContent = dados.totalEventos;

      const dataAgora = new Date();
      dataAtualizacao.textContent = dataAgora.toLocaleDateString();
      horaAtualizacao.textContent = dataAgora.toLocaleTimeString();

      estatisticas.style.display = "block";
      mensagemCarregada.style.display = "block";
      mensagemErro.style.display = "none";
    } catch (error) {
      console.error("Erro ao carregar estatísticas:", error.message);
      mensagemErro.style.display = "block";
    }
  }

  botaoEstatisticas.addEventListener("click", carregarEstatisticas);

  // ====== Botões administrativos ======
  function exibirMensagem(mensagem) {
    alert(mensagem);
  }

  document.getElementById("gerenciarUsuarios").addEventListener("click", () => exibirMensagem("🔹 Função de gerenciamento de usuários ainda não implementada."));
  document.getElementById("configuracoesSistema").addEventListener("click", () => exibirMensagem("⚙ Configurações do sistema em desenvolvimento."));
  document.getElementById("gerarRelatorios").addEventListener("click", () => exibirMensagem("📊 Relatórios escolares em breve."));
  document.getElementById("suporteTecnico").addEventListener("click", () => exibirMensagem("📞 Contate o suporte técnico pelo email suporte@escola.com."));
  document.getElementById("feedbackUsuarios").addEventListener("click", () => exibirMensagem("📩 Visualizar feedback dos usuários ainda não disponível."));
  document.getElementById("historicoAcesso").addEventListener("click", () => exibirMensagem("🔎 Histórico de acesso em fase de implementação."));
  document.getElementById("gerenciarEventos").addEventListener("click", () => exibirMensagem("🎯 Gerenciamento de eventos em desenvolvimento."));

  // ====== Botão Voltar ======
  const botaoVoltar = document.getElementById("voltar");
  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", function () {
      if (document.referrer) {
        window.history.back();
      } else {
        window.location.href = "../index.html";
      }
    });
  }

  // ====== Menu suspenso (abre por cima) ======
  const menuToggle = document.getElementById('menu-toggle');
  const menuDropdown = document.querySelector('.menu-dropdown');

  // Cria overlay para clicar fora e fechar
  const overlay = document.createElement('div');
  overlay.classList.add('menu-overlay');
  document.body.appendChild(overlay);

  menuToggle.addEventListener('click', () => {
    const isOpen = menuDropdown.style.display === 'block';
    menuDropdown.style.display = isOpen ? 'none' : 'block';
    overlay.classList.toggle('ativo', !isOpen);
  });

  // Fecha o menu ao clicar fora
  overlay.addEventListener('click', () => {
    menuDropdown.style.display = 'none';
    overlay.classList.remove('ativo');
  });

  // Fecha ao clicar em qualquer link do menu
  menuDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuDropdown.style.display = 'none';
      overlay.classList.remove('ativo');
    });
  });
});
