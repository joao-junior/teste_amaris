## Tecnologias

- Node.js
- Yarn
## Dependências

- jsonwebtoken
- cors
- dotenv
- express
- sequelize
- swagger
## Como iniciar

Faça um clone desse repositório e acesse a pasta backend:

    git clone https://github.com/joao-junior/teste_amaris.git
    cd teste_amaris

Agora nós precisamos instalar as dependências, podemos usar o yarn:

    yarn
    ou npm install

Antes de executar a aplicação nós precisamos executar o comando abaixo para iniciar o banco de dados no docker.

    docker run --name database_pokemon -e POSTGRES_DB=Desafio_Pokemon -e POSTGRES_USER=MrNobody -e POSTGRES_PASSWORD=Nobody2021 -p 5432:5432 -d postgres

Para executar a as migrations no banco de dados usamos o comando:

     yarn run:migrate

Para executar o servidor em modo de desenvolvimento nós usamos o comando:

    yarn dev

## Como Testar

Para testar a aplicação [Swager](http://localhost:3333/api-docs)
ou baixe e instale o [Insomnia](https://insomnia.rest/download/), 
importe os dados do arquivo **Insomnia_2021-06-29.json**.