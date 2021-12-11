# Boas vindas ao repositório do Blog API!

Esse projeto é uma API de um Blog, onde será possível criar, visualizar, deletar e atualizar os posts e usuários. Ou seja, um CRUD.

---

# <span id="sumario">Sumário</span>

- [Habilidades](#habilidades)
- [Descrição](#descrição)
- [Linter](#linter)
- [Observações](#-observações)
- [Requisitos funcionais](#requisitos-funcionais)
  
# Habilidades 

Nesse projeto, você vai construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e será capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`


# Descrição

Se trata de uma API de um CRUD de posts e usuários de um blog (com o sequelize). Começando pela API, foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados. Aplicando, também, alguns princípios SOLID!

Primeiro, foi criado uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criado uma tabela de Categorias para seus Posts, outra para guardandar todas as informações dos posts realizados na plataforma. Por fim uma tabela de junção para relacionar Posts com categorias. Ou seja, um post pode ter mais que uma categoria.

Cada usuário além de criar seus posts, só podem atualizar e excluir seus próprios posts, bem como o único que pode excluir a sua conta de login do sistema.

Cada post tem referência ao usuário que o criou.
Portanto existem as seguintes referências no schema do banco:

- Usuário / Post
- Post / Categoria

---


# Linter

Para garantir a qualidade do código, usaremos o [ESLint](https://eslint.org/) para fazer a sua análise estática.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no código, tais problemas serão mostrados no seu terminal. Se não houver problema no código, nada será impresso no seu terminal.

Também pode-se instalar o plugin do `ESLint` no `VSCode` (caso use essa IDE), e para isso bastar ir na seção **extensions** e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).


---

# Observações:

## Estrutura da lista de requsitos funcionais

- Em cada requisito você encontrará uma imagem de um protótipo de como sua aplicação deve ficar. 

## Dados de testes no banco

- Há um arquivo na pasta `/seeders` dentro dela irá conter as querys para inserir no banco `não remova ela o avaliador irá usar ela`.

## A estrutura do banco de dados:


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

# Requisitos funcionais


Acesse o **readme** dos requisitos funcionais [aqui](Functional-Requirements.md)