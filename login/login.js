let senha = document.getElementById('senha');
let mostrarSenha = document.getElementById('mostrarSenha');

mostrarSenha.addEventListener('click', () => {
	let senhaVisivel = senha.type === 'text';
	senha.type = senhaVisivel ? 'password' : 'text';
	mostrarSenha.textContent = senhaVisivel ? 'Mostrar' : 'Ocultar';
});
