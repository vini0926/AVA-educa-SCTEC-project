import { login } from '../js/auth.js';

let senha = document.getElementById('senha');
let mostrarSenha = document.getElementById('mostrarSenha');
let formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    try {
        const usuario = await login(
            document.getElementById('email').value,
            senha.value
        );
        localStorage.setItem('usuarioAtual', JSON.stringify(usuario)); // tive que pedir ajuda de IA
        window.location.href = '../dashboard/dashboard.html'; // para implementar a sessão do usuário logado
    } catch (mensagem) {
        window.alert(mensagem);
    }
});

document.getElementById('esqueceuSenha').addEventListener('click', (evento) => {
	evento.preventDefault();
	window.alert('A recuperação de senha ainda está em desenvolvimento.');
});

mostrarSenha.addEventListener('click', () => {
	let senhaVisivel = senha.type === 'text';
	senha.type = senhaVisivel ? 'password' : 'text';
	mostrarSenha.textContent = senhaVisivel ? 'Mostrar' : 'Ocultar';
});
