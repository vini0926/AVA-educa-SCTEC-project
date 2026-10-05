import { cursos } from '../dados/listagem-cursos.js';

export function listarCursos(usuario) {
    return new Promise((resolve, reject) => {
        const cursosDoUsuario = cursos.filter(
            curso => curso.emailProfessor === usuario.email
        );

        if (cursosDoUsuario.length) {
            resolve(cursosDoUsuario);
        } else {
            reject('Não há cursos cadastrados para esse usuário');
        }
    });
}