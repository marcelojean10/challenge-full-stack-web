<p align="center" style="margin: 0 auto;">
  <img src="https://camo.githubusercontent.com/fb04c484571e04d25aecd8b49044d927be0d9493/68747470733a2f2f7777772e677275706f612e636f6d2e62722f68732d66732f68756266732f6c6f676f2d677275706f612e706e673f77696474683d333030266e616d653d6c6f676f2d677275706f612e706e67" height="auto" width="100" alt="Grupo A" />
</p>

<h3 align="center">
  Test for job fullstack in group A 🚀
</h3>
<br>


## Overview

Teste simples realizado para conhecer o participante, suas intenções em códigos e conhecer a escrita do mesmo.

<img src="https://raw.githubusercontent.com/marcelojean10/challenge-full-stack-web/master/mockups/students.png" alt="Overview project" style="max-width:100%;" />

## Arquitetura

### Back-end
* [Nodejs](https://github.com/nodejs) [Backend]
* [Typescript](https://github.com/Microsoft/TypeScript) [Typing]
* [Postgres](https://github.com/postgres/postgres) [Database]
* [Docker](https://github.com/docker) [Hardware]
* [Insomnia](https://insomnia.rest/)[Test in API, JSON in folder challenge-full-stack-web]

### Front-End
* [Vuetify](https://github.com/nodejs) [Backend]
* [Axios](https://github.com/axios/axios) [RESTful API]


## Bibliotecas/serviços:
* Docker - Utilizado para termos uma imagem do postgre, de fácil acesso.
* joi - Utilizado para validar campos no backend.
* cors - Utilizado para permitir acesso externo a API.
* typescript - Utilizado para tipar o backend.
* knex - Utilizado para deixar elegante a forma de escrever queries com postgre.
* jest - Utilizado para testar as funcionalidades existentes na API.
* supertest - Utilizado para requisitar a API mesmo offline. (Usado para testar)
* dotenv - Utilizado para guardar as variaveis em ambiente, para não ficar expostas.
* @mdi/font - Utilizado para obtermos icones/fontes.
* axios - Utilizado para requisitar a API pelo frontend.
* vee-validate - Utilizado para validar os campos do formulário.
* vue-router - Utilizado para termos rotas elegantes no vue.
* cpfValidator - Utilizado para validar se o CPF é válido.

## O que você melhoraria se tivesse mais tempo:
- Deploy para o Heroku, google cloud, ou outro serviço de cloud.
- Typing no Vue.
- Tests mais complexos.

## Quais requisitos obrigatórios que não foram entregues:
- Acredito que nenhum ficou pendente.


## Documentação
Na pasta backend deixei um arquivo swagger.json. 

O Swagger ajuda os desenvolvedores a projetar, criar, documentar e consumir serviços da Web RESTful.

## Preparando ambiente de testes!
Certifique-se que tenha instalado em seu computador:
* npm ou yarn: (No seu terminal e dentro da pasta, digite):
<code>
  npm install
  yarn install
</code>

* Docker (Utilizado nesse projeto para facilitar a conexão com o banco):

<code>
  docker run --name database -p 5432:5432 -d -t kartoza/postgis
</code>

Com o banco conectado você pode acessar seu postgre e criar uma database.
No meu caso eu uso o DBeaver community (Usava o mesmo quando trabalhava com ORACLEdb).

Settings default:
<code>
  Host: 127.0.0.1
  Database: postgres
  User: docker
  Password: docker
</code>

Conectado com o banco, crie a database com o nome: grupoa.

* Inicialize o servidor do backend:
<code>
  yarn dev:server
</code>

Knex: Rode a migration, para criarmos a tabela no banco com seus devidos campos:

<code>
  npx knex migrate:latest --knexfile knexfile.ts migrate:latest
</code>

Após isso, seu backend está funcional.

No front-end, é simples, entre na pasta e no terminal, digite:

<code>
* npm install ou yarn install
</code>

E logo após:
<code>yarn serve</code>

## License

MIT © [Grupo A](https://www.grupoa.com.br/)
