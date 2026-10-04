function login(usuario, senha) {
    return new Promise((resolve, reject) => {
        const usuarioEncontrado = usuarios.find(
            item => item.email === usuario && item.senha === senha
        );

        if (!usuarioEncontrado) {
            reject('Dados incorretos. Favor verificar e tentar novamente.');
            return;
        }

        const { id, nome, email } = usuarioEncontrado;
        resolve({ id, nome, email });
    });
}