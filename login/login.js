const senha = document.getElementById('senha');
const mostrarSenha = document.getElementById('mostrarSenha');
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    try {
        const usuario = await login(
            document.getElementById('email').value,
            senha.value
        );
        sessionStorage.setItem('usuarioAtual', JSON.stringify(usuario));
        localStorage.removeItem('usuarioAtual');
        window.location.href = '../dashboard/dashboard.html';
    } catch (mensagem) {
        window.alert(mensagem);
    }
});

document.getElementById('esqueceuSenha').addEventListener('click', (evento) => {
	evento.preventDefault();
	window.alert('A recuperação de senha ainda está em desenvolvimento.');
});

mostrarSenha.addEventListener('click', () => {
	const senhaVisivel = senha.type === 'text';
	senha.type = senhaVisivel ? 'password' : 'text';
	mostrarSenha.textContent = senhaVisivel ? 'Mostrar' : 'Ocultar';
});
