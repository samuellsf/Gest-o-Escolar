document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('matriculaForm');
    const lista = document.getElementById('listaMatriculados');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        const turma = document.getElementById('turma').value;

        if (nome === '') return alert('Preencha o nome do aluno.');

        const aluno = { nome, turma };
        let matriculados = JSON.parse(localStorage.getItem('matriculados')) || [];
        matriculados.push(aluno);
        localStorage.setItem('matriculados', JSON.stringify(matriculados));

        alert('Aluno cadastrado com sucesso!');
        form.reset();
    });

    document.getElementById('listarMatriculados').addEventListener('click', () => {
        lista.innerHTML = '';
        const matriculados = JSON.parse(localStorage.getItem('matriculados')) || [];
        if (matriculados.length === 0) {
            lista.innerHTML = '<li>Nenhum aluno matriculado.</li>';
            return;
        }
        matriculados.forEach(aluno => {
            const li = document.createElement('li');
            li.textContent = `${aluno.nome} - ${aluno.turma}`;
            lista.appendChild(li);
        });
    });

    document.getElementById('buscarMatriculado').addEventListener('click', () => {
        const nomeBusca = prompt('Digite o nome do aluno para buscar:').trim();
        if (!nomeBusca) return;

        const matriculados = JSON.parse(localStorage.getItem('matriculados')) || [];
        const encontrados = matriculados.filter(a => a.nome.toLowerCase().includes(nomeBusca.toLowerCase()));

        lista.innerHTML = '';
        if (encontrados.length === 0) {
            lista.innerHTML = `<li>Nenhum aluno encontrado com o nome "${nomeBusca}".</li>`;
        } else {
            encontrados.forEach(aluno => {
                const li = document.createElement('li');
                li.textContent = `${aluno.nome} - ${aluno.turma}`;
                lista.appendChild(li);
            });
        }
    });

    document.getElementById('removerMatriculado').addEventListener('click', () => {
        const nomeRemove = prompt('Digite o nome do aluno a remover:').trim();
        if (!nomeRemove) return;

        let matriculados = JSON.parse(localStorage.getItem('matriculados')) || [];
        const filtrados = matriculados.filter(a => a.nome.toLowerCase() !== nomeRemove.toLowerCase());

        if (filtrados.length === matriculados.length) {
            alert(`Nenhum aluno com o nome "${nomeRemove}" foi encontrado.`);
        } else {
            localStorage.setItem('matriculados', JSON.stringify(filtrados));
            alert(`Aluno "${nomeRemove}" removido com sucesso.`);
        }
    });

    document.getElementById('voltar').addEventListener('click', () => {
        window.history.back();
    });
});
