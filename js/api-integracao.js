// api-integracao.js

document.addEventListener('DOMContentLoaded', () => {
    const btnBuscarAlunos = document.getElementById('buscarAlunos');
    const listaAlunos = document.getElementById('listaAlunos');
    const formEmail = document.getElementById('formEmail');

    // === CONFIGURAÇÃO ===
    const API_BASE_URL = 'http://localhost:3000'; // Altere para sua API real 

    // === BUSCAR ALUNOS ===
    btnBuscarAlunos.addEventListener('click', async () => {
        listaAlunos.innerHTML = '<li>Carregando alunos...</li>';

        try {
            const response = await fetch(`${API_BASE_URL}/alunos`);
            if (!response.ok) throw new Error('Erro ao buscar alunos');

            const alunos = await response.json();
            listaAlunos.innerHTML = ''; // Limpa a lista

            if (alunos.length === 0) {
                listaAlunos.innerHTML = '<li>Nenhum aluno encontrado.</li>';
                return;
            }

            alunos.forEach(aluno => {
                const li = document.createElement('li');
                li.textContent = `${aluno.nome} - ${aluno.matricula}`;
                listaAlunos.appendChild(li);
            });

        } catch (error) {
            console.error('Erro ao carregar alunos:', error);
            listaAlunos.innerHTML = '<li>Erro ao carregar alunos. Tente novamente mais tarde.</li>';
        }
    });

    // === ENVIAR E-MAIL ===
    formEmail.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('assunto').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!email || !assunto || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/enviar-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, assunto, mensagem })
            });

            if (!response.ok) throw new Error('Erro ao enviar e-mail.');

            const resultado = await response.json();
            alert('E-mail enviado com sucesso!');
            formEmail.reset();

        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            alert('Falha ao enviar o e-mail. Tente novamente mais tarde.');
        }
    });
});
// Botão "Voltar" simples
const btnVoltar = document.getElementById('voltar');
if (btnVoltar) {
    btnVoltar.addEventListener('click', () => {
        window.location.href = "../index.html";
    });
}
