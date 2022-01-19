<h3 align="center">Tindin backend API</h3>
<p align="center">
</p>
<br>

## Informações Pessoais
Email principal: leonardosclopes@gmail.com
Email secundário: leonardocristian@ufpi.edu.br
Telefone: +55 (99) 9 8234-9099

### Minhas redes sociais

[![Linkedin Badge](https://img.shields.io/badge/-LeonardoCristian-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardo-cristian/)](https://www.linkedin.com/in/leonardo-cristian/) 

[![Gitlab Badge]( https://img.shields.io/badge/-leonardosclopes-330F63?style=for-the-badge&logo=gitlab&logoColor=white&link=https://gitlab.com/leonardosclopes)](https://gitlab.com/leonardosclopes)

[![Instagram Badge](https://img.shields.io/badge/-leocristian-E4405F?style=for-the-badge&logo=instagram&logoColor=white&link=https://www.instagram.com/leonardocr.a/?hl=en/)](https://www.instagram.com/leonardocr.a/?hl=en) 

## Backend API

Esta API foi desenvolvida com a finalidade de concluir o desafio proposto pelo Fábio da empresa [Tindin | Educação Financeira](https://www.tindin.com.br/). O desafio proposto era de desenvolver uma API com autenticação de uário para listagem, cadastro, edição e remoção de aulas, além de cadastro e listagem de comentários para cada aula. Para mais informações acesse o link da documentação do teste prático clicando [aqui](https://docs.google.com/document/d/1tFQiqQWtgVVOkMN4DQeQDKGogTEXTyio/edit?usp=sharing&ouid=103561000911635344377&rtpof=true&sd=true)

## Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/) na versão 16.13.1
- [TypeScript](https://www.typescriptlang.org/) na versão 4.5.4
- [ExpressJS](https://expressjs.com/) na versão 4.17.2
- [JsonWebToken](https://jwt.io/) na versão 8.5.1
- [MongoDB](https://www.mongodb.com/) na versão 4.3.1

## Motivações
Neste projeto foram utilizados alguns frameworks para desenvolvimento Web. Dentre eles, o principal foi o micro framework [ExpressJS](https://expressjs.com/) para criação e confiugurações do servidor. Sendo esta uma ferramenta bastante proveitosa, por conter métodos e atributos bastante intuitivos e de fácil utilização. Permitindo uma maior flexibilidade no desenvolvimento.

Para criação dos esquemas do banco de dados bem e seus métodos de CRUD, foi utilizado a ferramenta [mongoose](https://mongoosejs.com/). Sendo esta uma biblioteca para modelagens de dados do mongodb. Isso facilita o controle dos dados que são inseridos no banco de dados.

Aĺem disso, foi utilizado o pacote [bcrypt](https://www.npmjs.com/package/bcrypt) do npm. Sendo esta uma ferramenta para geração de hashs. Foi utilizado para encriptar a senha fornecida pelo usuário. Não permitindo que ela seja vista para qualquer pessoa que visualizar a base de dados.

Para autenticação de usuário foi utilizado o pacote [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). Que realiza a autenticação JWT de forma rápida. 

## Hospedagem
Para Hospedar a aplicação e colocá-la em produção, poderia ser utilizado o [Heroku](https://www.heroku.com/). Sendo esta uma plataforma de computação em nuvem. Podendo ser configurado via terminal. Também poderia utilizar a plataforma [AWS](https://aws.amazon.com/) e alguns dos seus serviços de nuvem, como o DynamoDB para armazenamento de dados. Esta opção seria interessante para fácil gerenciamento de banco de dados, escalabilidade e alta performance.

## Começo rápido

- [Baixe e extraia este repositório](https://gitlab.com/leonardosclopes/tindin-teste-pratico.git)

- Primeiramente baixe a ferramenta [MongoDB compass](https://www.mongodb.com/products/compass) (comunity edition)
- Execute a ferramenta, clique em "connect" e aguarde a inicialização do mongoDB
- Em seguida, acesse a pasta do projeto e execute:  `npm install`
- Aguarde todas as dependências serem instaladas e então execute: `npm run dev`
- Pronto, o servidor foi incializado na porta 3000

 Obs: Importe o arquivo `tindin-endpoints.postman_collection.json` em alguma ferramenta para exeução de requisições Http de sua preferência ([insomnia](https://insomnia.rest/) ou [postman]((https://www.postman.com/))

## Rotas da API

| Requisição | Rota            | Corpo                        | Parâmetro                    | Resposta | Descrição                                      |
| ---------- | --------------- | ---------------------------- | ---------------------------- | -------- | ---------------------------------------------- |
| POST       | `/api/signup` | name, email, password      | <div align="center">❌</div> | 200 | Rota de criação de usuário                     |
| POST       | `/api/login`     | email, password               | <div align="center">❌</div> | `object` | Rota de login e autenticação do usuário                       |
| POST       | `/api/classes` | classe object                        | <div align="center">❌</div> | 200  | Rota de criação de aulas do usuário logado   |
| GET        | `/api/classes`        | <div align="center">❌</div> | <div align="center">❌</div> | `array`  | Rota de listagem de aulas do usuário logado |
| GET        | `/api/classes/`  |  <div align="center">❌</div> | `:id` | `array` | Rota de detalhes de uma classe  |
| DELETE     | `/api/classes` | <div align="center">❌</div> | `:id`                      | 200 | Rota de remoção de uma classe e seus respectivos comentários     |
| PUT      | `/api/classes` | Objeto do tipo classe | `:id` | 200 | Rota para alteração de um atributo da aula |
| GET | `/api/classes/:id_class/comments` | <div align="center">❌</div> | `:id_class`  |`array` | Rota de listagem de comentários de uma aula |
| POST | `/api/classes/:id_class/comments` | Objeto do tipo comment | `:id_class` | <div align="center">❌</div> | Rota de criação de um comentário novo comentário |
 DELETE | `/api/classes/:id_class/comment/:id` | <div align="center">❌</div> |  `:id_class` e `: id` | 200 | Rota de remoção de um comentário de uma aula |
