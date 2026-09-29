let senha = document.getElementById('senha');
let mostrarSenha = document.getElementById('mostrarSenha');
let formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (evento) => evento.preventDefault());

document.getElementById('esqueceuSenha').addEventListener('click', (evento) => {
	evento.preventDefault();
	window.alert('A funcionalidade de recuperação de senha ainda está em desenvolvimento.');
});

mostrarSenha.addEventListener('click', () => {
	let senhaVisivel = senha.type === 'text';
	senha.type = senhaVisivel ? 'password' : 'text';
	mostrarSenha.textContent = senhaVisivel ? 'Mostrar' : 'Ocultar';
});
