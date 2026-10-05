import { alunos } from '../dados/listagem-alunos.js';

export function cadastrarAluno(aluno) {
    return new Promise((resolve, reject) => {
        try {
            if (!aluno || typeof aluno !== 'object' || Array.isArray(aluno)) {
                throw new Error(); // precisei de ajuda para validar o objeto aluno corretamente
            }

            const id = alunos.length + 1;
            alunos.push({ ...aluno, id });
            resolve('Aluno cadastrado com sucesso!');
        } catch {
            reject('Erro ao cadastrar o aluno');
        }
    });
}