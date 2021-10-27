# to-do-list-backend

### Descrição

Este projeto foi desenvolvido como parte dos meus estudos em NodeJS.
Algumas das principais tecnologias utilizadas neste projeto são:

- NodeJS
- TypeScript
- dotEnv
- Express
- MongoDB

### Pré-requisitos para executar o projeto

1. [NodeJS] (https://nodejs.org/en/)
2. [Yarn] (https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [MongoDB Community Server] (https://www.mongodb.com/try/download/community)

### Como rodar o projeto

1. Abra o terminal
2. Vá até a pasta raiz do projeto
3. No terminal dentro da pasta raiz do projeto, execute o seguinte comando:
   ```
   yarn
   ```
   Este comando fará com que todas as dependecias do projeto sejam instaladas.
4. Execute o projeto com o comando:
   ```
    yarn dev
   ```
   Este comando fará com que a aplicação seja executada em modo de desenvolvimento. Desta forma, será executada usando **nodemon** onde ele fará o papel de monitorar quaisquer alterações em arquivos com extensão .ts
5. Caso queira gerar o **build**, execute o comando:
   ```
   yarn build
   ```
   Este comando fará com que a aplicação seja compilada dentro da pasta chamada **dist**
