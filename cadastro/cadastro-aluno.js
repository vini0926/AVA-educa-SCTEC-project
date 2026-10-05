import { Aluno } from '../js/Aluno.js';
import { cadastrarAluno } from '../js/alunos.js';

const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioAtual'));
const saudacaoUsuario = document.getElementById('usuarioAtual');
const botaoDashboard = document.getElementById('botaoDashboard');
const botaoSair = document.getElementById('botaoSair');

if (usuarioLogado && saudacaoUsuario) {
    saudacaoUsuario.textContent = `Bem-vindo, ${usuarioLogado.nome}.`;
}

botaoDashboard.addEventListener('click', () => {
    window.location.href = '../dashboard/dashboard.html';
});

botaoSair.addEventListener('click', () => {
    sessionStorage.removeItem('usuarioAtual');
    window.location.href = '../login/login.html';
});

const dataNasc = document.getElementById('dataNasc');

if (dataNasc) { 
    if (!window.moment) { //precisei de ajuda de IA para validar a data de nascimento com a lib moment
        throw new Error('Moment.js não foi carregado; não é possível validar a data de nascimento.');
    }

    const dataMinima = moment('01/01/1900', 'DD/MM/YYYY', true);

    const validarDataNasc = () => {
        const valor = dataNasc.value;
        const data = moment(valor, 'YYYY-MM-DD', true);

        if (!valor || !data.isValid()) {
            dataNasc.setCustomValidity(valor ? 'Informe uma data válida no formato Dia/Mês/Ano.' : '');
        } else if (!data.isAfter(dataMinima, 'day')) {
            dataNasc.setCustomValidity('A data de nascimento deve ser posterior a 01/01/1900.');
        } else if (!data.isBefore(moment(), 'day')) {
            dataNasc.setCustomValidity('A data de nascimento deve ser anterior à data atual.');
        } else {
            dataNasc.setCustomValidity('');
        }
    };

    dataNasc.addEventListener('input', validarDataNasc);
    dataNasc.addEventListener('change', validarDataNasc);
    validarDataNasc();
}

const CEP = document.getElementById('cep');
const CPF = document.getElementById('cpf');
const telefone = document.getElementById('telefone');

CPF.addEventListener('input', () => {
    const digitos = CPF.value.replace(/\D/g, '').slice(0, 11);
    CPF.value = digitos
        .replace(/^(\d{3})(\d)/, '$1.$2') // pedi ajuda para formatar o input do CPF
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
});

telefone.addEventListener('input', () => {
    const digitos = telefone.value.replace(/\D/g, '').slice(0, 11);
    telefone.value = digitos
        .replace(/^(\d{2})(\d)/, '($1) $2') // pedi ajuda para formatar o input do Número de telefone
        .replace(/(\d{5})(\d)/, '$1-$2');
});

if (CEP) { //também precisei de ajuda de IA para validar o CEP com a API do ViaCEP
    CEP.addEventListener('input', () => {
        const digitos = CEP.value.replace(/\D/g, '').slice(0, 8);
        CEP.value = digitos.replace(/^(\d{5})(\d)/, '$1-$2'); // pedi ajuda para formatar o input do CEP
    });

    const buscarEndereco = async () => {
        const cep = CEP.value.replace(/\D/g, '');
        CEP.setCustomValidity('');

        if (cep.length !== 8) {
            CEP.setCustomValidity('Informe um CEP válido com 8 números.');
            CEP.reportValidity();
            return;
        }

        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

            if (!resposta.ok) {
                throw new Error(`A consulta do CEP falhou: ${resposta.status}`);
            }

            const endereco = await resposta.json();

            if (endereco.erro) {
                CEP.setCustomValidity('CEP não encontrado.');
                CEP.reportValidity();
                return;
            }

            document.getElementById('cidade').value = endereco.localidade || '';
            document.getElementById('estado').value = endereco.uf || '';
            document.getElementById('logradouro').value = endereco.logradouro || '';
            document.getElementById('bairro').value = endereco.bairro || '';
        } catch (erro) {
            console.error('Erro ao consultar o ViaCEP:', erro);
            CEP.setCustomValidity('Não foi possível consultar o CEP. Tente novamente.');
            CEP.reportValidity();
        }
    };

    CEP.addEventListener('change', buscarEndereco);
}

const formulario = document.getElementById('cadastro');

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const aluno = new Aluno(
        document.getElementById('nome').value,
        document.getElementById('genero').value,
        dataNasc.value,
        CPF.value,
        telefone.value,
        document.getElementById('email').value,
        CEP.value,
        document.getElementById('cidade').value,
        document.getElementById('estado').value,
        document.getElementById('logradouro').value,
        document.getElementById('numero').value,
        document.getElementById('complemento').value,
        document.getElementById('bairro').value
    );

    try {
        window.alert(await cadastrarAluno(aluno));
        formulario.reset();
    } catch (mensagem) {
        window.alert(mensagem);
    }
});
