Projeto: AVA Educa+
Este projeto tem como objetivo criar uma plataforma online para que professores tenham rápido acesso aos cursos que lecionam e ao cadastro de seus alunos, tudo em uma interface com carregamento rápido e com um visual simples sem complicações para o usuário, contendo botões e informações objetivas.

As tecnolologias utilizadas foram:
- HTML5
- CSS (Grid, flexbox e media query)
- JavaScript (módulos)
- Moment.js
- API ViaCEP
- sessionStorage
- Live Server para a execução local do projeto

Estrutura do projeto:
AVA-educa-SCTEC-project/
├── assets/
│   └── images/                 - Imagens usadas nas páginas
├── cadastro/
│   ├── cadastro-aluno.html     - Formulário de cadastro de alunos
│   ├── cadastro-aluno.css      - Estilos e responsividade do cadastro
│   └── cadastro-aluno.js       - Validações, máscaras e consulta ao ViaCEP
├── dashboard/
│   ├── dashboard.html          - Página principal após o login
│   ├── dashboard.css           - Estilos e responsividade da dashboard
│   └── dashboard.js            - Exibição dos cursos e navegação
├── dados/
│   ├── listagem-alunos.js      - Lista de alunos
│   ├── listagem-cursos.js      - Lista de cursos
│   └── listagem-usuarios.js    - Usuários usados na autenticação
├── js/
│   ├── Aluno.js                - Classe Aluno
│   ├── alunos.js               - Função de cadastro de alunos
│   ├── app.js                  - Redirecionamento inicial para o login
│   ├── auth.js                 - Função de autenticação
│   └── cursos.js               - Função de listagem de cursos
├── login/
│   ├── login.html              - Tela de login
│   ├── login.css               - Estilos e responsividade do login
│   └── login.js                - Interações e validação do login
├── index.html                  - Página inicial que redireciona para o login
├── package.json                - Configuração do projeto como módulos ES
└── README.md                   - Documento da descrição e como executar o programa   

Pré-requisitos para execução:
- Visual Studio Code
- Extensão Live Server
    A extensão é necessária que o projeto seja executado corretamente, pois utiliza módulos de JavaScript. Não é necessário executar npm install
- Conexão com a internet para carregar o Moment.js e consultar o ViaCEP

Como executar:
 - Dentro do VS Code, selecione o documento index.html com o botão direito do mouse, e abra com o Live Server (extensão desenvolvida por Ritwick Dey). Assim que abrir a aba no seu navegador, será redirecionado para a página de login, em que você deve logar com o email e senha de um dos usuários listados em listagem-usuarios.js, para que possar acessar o resto do site. 
 - Assim que o login for validado pelo sistema, você será redirecionado à Dashboard da plataforma, na qual são exibidos os cursos do professor(a) que estivar logado. Na Dashboard, há um menu lateral ou no topo da tela, dependendo se estiver utilizando um computador ou dispositivo móvel para o acesso, nesse menu, haverá 4 botões: "Dashboard", "Meus Cursos", "Cadastrar aluno" e "Sair". 
 - Os botões redirecionam para as respectivas páginas, exceto "Meus Cursos", o qual está desativado. O botão de "Sair" finaliza a sessão atual e redireciona o usuário para a página de login novamente. Clicando no botão "Cadastrar aluno", o usuário será redirecionado para a página de cadastro de alunos, em que terá um formulário que deve preencher para efetuar o cadastro, inserindo todas as informações obrigatórias. 
 - O cadastro do aluno quando efetuado será registrado no array disponível em listagem-alunos.js, mas não são mantidos quando a página é recarregada, pois não há banco de dados e backend ou API para isso no projeto.

Quais melhorias poderiam ser implementadas?
- Manter os alunos cadastrados em um banco de dados por meio de BackEnd/API
- Funcionalidade de editar/remover alunos de determinado curso
- Implementação da função "Esqueceu a senha?"
- Validação se o CPF inserido no cadastro existe e coincide com o nome digitado
- Exibir mensagens específicas caso ViaCEP falhar ou não encontrar o CEP inserido
- Implementar autenticação por BackEnd para melhorar a segurança dos dados
- Proteger dados pessoais dos alunos cadastrados
- Hostear o projeto com algum serviço para que não seja necessário abri-lo pelo VS Code