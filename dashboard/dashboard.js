import { listarCursos } from '../js/cursos.js';

const usuario = JSON.parse(sessionStorage.getItem('usuarioAtual'));
const saudacao = document.getElementById('usuarioAtual');
const botaoDashboard = document.getElementById('botaoDashboard');
const botaoCadastro = document.getElementById('botaoCadastro');
const botaoSair = document.getElementById('botaoSair');
const listaCursos = document.querySelector('.cursos');

if (usuario && saudacao) {
    saudacao.textContent = `Bem-vindo, ${usuario.nome}.`;
}

function formatarData(data) {
    return data.split('-').reverse().join('/'); //precisei de ajuda de IA para formatar as datas de início e fim dos cursos corretamente
}

if (usuario) {
    listarCursos(usuario)
        .then(cursos => {
            listaCursos.innerHTML = cursos.map(curso => `
                <div class="Cardcurso">
                    <h2 class="Cardtitulo">${curso.nomeCurso}</h2>
                    <p class="Carddata">Início: ${formatarData(curso.dataInicio)}<br>Fim: ${formatarData(curso.dataFim)}</p>
                </div>
            `).join('');
        })
        .catch(mensagem => {
            listaCursos.textContent = mensagem;
        });
} else {
    listaCursos.textContent = 'Faça login para visualizar seus cursos.';
}

botaoDashboard.addEventListener('click', () => {
    window.location.href = 'dashboard.html';
});

botaoCadastro.addEventListener('click', () => {
    window.location.href = '../cadastro/cadastro-aluno.html';
});

botaoSair.addEventListener('click', () => {
    sessionStorage.removeItem('usuarioAtual');
    window.location.href = '../login/login.html';
});