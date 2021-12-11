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

Nesse projeto, foi construído um API usando `ORM` com o pacote `sequelize` do `npm`, tendo por objetivo praticar skills como:
 - Construção de uma API RESTful;
 - Utilização de conceitos SOLID;
 - Implementação de autenticações e autorizações de usuários; 
 - Criação e associação de tabelas usando `models` do `sequelize`;
 - Construção de endpoints que utilizem os models criados; 
 - Construção de um `CRUD` moderno e completo com uma`ORM`.


## Descrição

Se trata de uma API que manipula **posts** e **usuários criadores dos posts** de um Blog.

Começando pela API, foi desenvolvido alguns ENDPOINTS seguindo os princípios do REST que se conectam a um banco de dados relacional.

Primeiro, foi criado uma tabela para os usuários que desejam se cadastrar na aplicação afim de criarem posts no Blog. Após isso, uma tabela de Categorias também foi criada para se relacionar com cada Posts e então outra é criada para guardar todas as informações dos posts que vão sendo criados na plataforma. Por fim uma última tabela foi necessária para se implementar o relacionamento entre Posts e categorias. Ou seja, um post pode ter mais que uma categoria e vice-versa.

Cada usuário, além de criar seus posts, é capaz de atualizar e excluir seus próprios posts, bem como é o único que consegue apagar sua própria conta do sistema.

Cada post recebe uma referência ao usuário que o criou.
Portanto, os relacionamentos entre as tabelas do banco ficam da seguinte forma:

- **Usuário / Post (1:N)**
  - Um _usuário_ tem muitos _posts_;
  - Cada _post_ pertence, apenas, a um _usuário_

- **Post / Categoria (N:N)**
  - Cada _categoria_ está relacionada com vários _posts_;
  - Cada _post_ pode ter várias _categorias_

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

### Estrutura da lista de requisitos funcionais

- Em cada requisito você encontrará uma imagem de um protótipo de como sua aplicação deve ficar. 

### Dados para uso do banco

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