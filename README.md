# Boas vindas ao repositório do **Blog API**

Nessa API é possível **criar**, **visualizar**, **deletar** e **atualizar** os `posts` e seus respectivos `usuários`. Ou seja, nada mais do que um **CRUD**, porém utilizando boas práticas modernas de desenvolvimento de software, bem como uso de funcionalidades como **autenticação** e **autorização** de usuário.

---

## <span id="sumario">Sumário</span>

- [Habilidades](#habilidades)
- [Descrição](#descrição)
- [Arquitetura e padrões](#arquitetura-e-padroes)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Dependências](#dependencias)
- [Requisitos para execução e consumo da API](#requisitos-execucao)
- [Como executar o projeto](#como-executar-o-projeto)
- [Linter](#linter)
- [Observações](#-observações)
- [Requisitos funcionais](#requisitos-funcionais)
  
## Habilidades 

Nesse projeto, foi construído um back-end usando `ORM` com o pacote `sequelize` do `npm`, tendo por objetivo ser capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`;
 - Construir endpoints para consumir os models que criados; 
 - Fazer um `CRUD` com completo usando o `ORM`.


## Descrição

Se trata de uma API de um CRUD de posts e usuários de um blog (com o sequelize). Começando pela API, foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados. Aplicando, também, alguns princípios SOLID!

Primeiro, foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criado uma tabela de Categorias para seus Posts, outra para guardandar todas as informações dos posts realizados na plataforma. Por fim uma tabela de junção para relacionar Posts com categorias. Ou seja, um post pode ter mais que uma categoria.

Cada usuário além de criar seus posts, só podem atualizar e excluir seus próprios posts, bem como o único que pode excluir a sua conta de login do sistema.

Cada post tem referência ao usuário que o criou.
Portanto existem as seguintes referências no schema do banco:

- Usuário / Post
- Post / Categoria

---

## <span id="arquitetura-e-padroes">Arquitetura e Padrões</span>
<a href="#sumario">Sumário</a>

* Arquitetura MSC
* API RESTfull
* SOLID

## <span id="tecnologias-utilizadas">Tecnologias utilizadas</span>
<a href="#sumario">Sumário</a>

* Node.js
* Express
* MySQL
* JSON Web Token (JWT)
* Sequelize
* ESLinter

## <span id="dependencias">Dependências</span>
<a href="#sumario">Sumário</a>

No arquivo `package.json` é listado as dependências necessárias.
Para instalar essas dependências, estando conectado a internet e dentro da pasta do repositório, basta digitar o seguinte comando:

    `npm install`

## <span id="requisitos-execucao">Requisitos para execução e consumo da API</span>
<a href="#sumario">Sumário</a>

1. **Node.js**
2. **MySQL**
3. **Porta 3000** disponível, ou configurar outra.
4. **Algum cliente de teste de API** (ex.: Postman, Insomnia e etc) para fazer todas requisições possíveis.

## Como Executar o projeto

Instalado os requisitos e as dependências necessárias, basta seguir as seguintes etapas:

1. Dentro pasta do projeto, execute o comando: `npm start`.
2. Em seguida, abra algum cliente de API (ex.: Postman, Insomnia e etc) e faça as requisições para as rotas de **http://localhost:3000** (A porta 3000 está como padrão na ausência de variável de ambiente).

## Linter
<a href="#sumario">Sumário</a>

Para garantir a qualidade do código, foi usado o [ESLint](https://eslint.org/) para fazer uma análise estática.

O projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para utilizar o avaliador `ESLint`, após executar o comando `npm install` dentro do projeto, basta usar o comando `npm run lint`. Se a análise do `ESLint` encontrar problemas no código, tais problemas serão mostrados no terminal. Se não houver problema, nada será impresso no seu terminal.

Alternativamente pode-se instalar o plugin do `ESLint` no `VSCode` (caso use essa IDE), e para isso bastar ir na seção **extensions** e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).


---

## Observações:
<a href="#sumario">Sumário</a>

### Estrutura da lista de requsitos funcionais

- Em cada requisito você encontrará uma imagem de um protótipo de como sua aplicação deve ficar. 

### Dados de testes no banco

- Há um arquivo na pasta `/seeders` dentro dela irá há querys para inserir dados no banco para que se possa utilizar aplicação com alguns dados (fictícios) no banco. 

### A estrutura do banco de dados:


- Contém uma tabela chamada **Users**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 1,
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com", // tem quer ser único
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- Contém uma tabela chamada **Categories**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 18,
    "name": "News"
  }
  ```

- Contém uma tabela chamada **PostsCategories**, contendo dados com a seguinte estrutura:

  ```json
  {
    "postId": 50,
    "categoryId": 20
  }
  ```

- Contém uma tabela chamada **BlogPosts**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 21,
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "userId": 14, // esse é o id que referência usuário que é o autor do post
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.947Z",
  }
  ```
  
  **Os dados acima são fictícios, e estão aqui apenas como exemplo**  

---

## Requisitos funcionais
<a href="#sumario">Sumário</a>

Acesse  [aqui](Functional-Requirements.md) o **readme** dos requisitos funcionais.