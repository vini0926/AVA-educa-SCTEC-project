const usuario = JSON.parse(sessionStorage.getItem('usuarioAtual'));
const saudacao = document.getElementById('usuarioAtual');
const botaoCadastro = document.getElementById('botaoCadastro');
const botaoSair = document.getElementById('botaoSair');

if (usuario && saudacao) {
    saudacao.textContent = `Bem-vindo, ${usuario.nome}.`;
}

botaoCadastro.addEventListener('click', () => {
    window.location.href = '../cadastro/cadastro-aluno.html';
});

botaoSair.addEventListener('click', () => {
    sessionStorage.removeItem('usuarioAtual');
    window.location.href = '../login/login.html';
});