# Bootcamp Rocketseat - Desafio 01 NodeJS
Enunciado do desafio: Construir uma aplicação que aceita a entrada de um campo do usuário por um formulário e o redireciona para a página correta baseado em sua idade.

# Getting Started
Execute os seguintes passos:
- ```git clone https://github.com/tonkunz/bootcamp-nodejs-desafio01``` para clonar o projeto;
- ```cd bootcamp-nodejs-desafio01``` para entrar no diretório do projeto;
- ```npm install``` ou ```yarn install``` para instalar todas as dependências;
- ```npm start``` ou ```yarn start``` para rodar a aplicação com nodemon;

## Pré-requisitos
Certifique-se de ter o NodeJS/NPM ou Yarn instalados em sua máquina.

### Estrutura das Rotas
- /: Rota inicial que renderiza uma página com um formulário com um único campo age que representa a idade do usuário;
- /check: Rota chamada pelo formulário da página inicial via método POST que checa se a idade do usuário é maior que 18 e o redireciona para a rota /major, caso contrário o redireciona para a rota /minor (Lembre de enviar a idade como Query Param no redirecionamento);
- /major: Rota que renderiza uma página com o texto: Você é maior de idade e possui x anos, onde x deve ser o valor informado no input do formulário;
- /minor: Rota que renderiza uma página com o texto: Você é menor de idade e possui x anos, onde x deve ser o valor informado no input do formulário;

### Middlewares
Deve haver um middleware que é chamado nas rotas /major e /minor e checa se a informação de idade não está presente nos Query Params. Se essa informação não existir deve redirecionar o usuário para a página inicial com o formulário, caso contrário o middleware deve apenas continuar com o fluxo normal.

### Bibliotecas usadas:
- [**Express;**](https://expressjs.com/)
- [**Nunjucks;**](https://mozilla.github.io/nunjucks/)
- [**ESLint;**](https://eslint.org/)
- [**Nodemon;**](https://nodemon.io/)

### Agradecimentos
Aos instrutores e colegas da RocketSeat

> É fazendo que se aprende, aquilo que se deve aprender a fazer. **(Aristóteles)**
