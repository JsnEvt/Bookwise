<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jsnevt/bookwise">
  
  <a href="https://github.com/jsnevt/README-bookwise/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jsnevt/bookwise">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

  <a href="https://rocketseat.com.br">
    <img alt="Feito por Jason" src="https://img.shields.io/badge/feito%20por-Jason-%237519C1">
  </a>
  
</p>

<h1 align="center">
    <img alt="Desafio Full-Stack" title="#desafiofullstack" src="./assets/banner.png" />
</h1>

<h4 align="center"> 
	🚧  Bookwise ♻️ Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Sobre o projeto

Bookwise - é uma plataforma de avaliação livros, onde o usuário pode fazer login com Google ou Github e então avaliar livros facilmente.

Projeto Full-stack desenvolvido durante o curso online oferecido pela [Rocketseat].

---

## ⚙️ Funcionalidades

- [x] Pessoas podem se cadastrar na plataforma web usando seu login social da Google ou do Github.
	- Possibilidade de buscar livros
	- Listar por categorias
	- Avaliar livros
	- Dentro do perfil, poderá acompanhar quantidade de páginas lidas, autores lidos e avaliações
	- Ver livros populares

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/Bki8vWa3vXB5xS0Xz5HNBk/BookWise-(Copy)?type=design&node-id=1-17&mode=design&t=m71ShmJi9tCrooOZ-0">
  <img alt="Made by jsnevt" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="AppFullStack1" title="#AppFullStack" src="./assets/Login.png" width="400px">

  <img alt="AppFullStack2" title="#NextLevelWeek" src="./assets/In%C3%ADcio%20-%20Visitante.png" width="400px">
</p>

---

## 🚀 Como executar o projeto

O projeto foi feito usando o framework Next.js com React 


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), 
[Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)



#### 🧭 Rodando a aplicação web (Frontend / Backend)

```bash

# No prompt de comando:
# Crie uma pasta onde desejar
# Acesse a pasta e no terminal

# Clone este repositório
$ git clone https://github.com/jsnevt/bookwise.git

# Instale as dependências
$ npm install

# No VSCode, abra a pasta onde o arquivo foi clonado e abra o projeto

$ Crie um arquivo .env na raíz e adicione a seguinte expressão no arquivo: (DATABASE_URL='file:./dev.db') - sem os parenteses
# A aplicação precisa que o Prisma receba essa informação para fazer a comunicação com o banco de dados, caso contrário, dará erro.
$ Salve.

# Acesse o terminal do VS e execute a aplicação em modo desenvolvimento
$ Digite "num run dev" (sem as aspas)

A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[https://github.com/phosphor-icons/homepage](https://github.com/phosphor-icons/homepage)**
-   **[Axios](https://github.com/axios/axios)**
-   **[https://www.radix-ui.com](https://github.com/radix-ui/primitives)**
-   **[https://stitches.dev/](https://github.com/stitchesjs/stitches)**
-   **[https://tanstack.com/query/latest](https://github.com/TanStack/query)**


**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[https://nextjs.org](https://github.com/vercel/next.js)**
-   **[https://next-auth.js.org](https://github.com/nextauthjs/next-auth)**
-   **[TypeScript](https://github.com/microsoft/TypeScript)**
-   **[https://github.com/colinhacks/zod](https://github.com/zenseact/zod))**
-   **[Prisma](https://github.com/prisma/prisma)**


> Veja o arquivo  [package.json](https://github.com/JsnEvt/Bookwise/blob/main/package.json)

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor

[![Linkedin Badge](https://img.shields.io/badge/-Jason-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jason-everton-041226223/)](https://www.linkedin.com/in/jason-everton-041226223/)

[![Gmail Badge](https://img.shields.io/badge/-jasonemsw10@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jasonemsw10@gmail.com)](mailto:jasonemsw10@gmail.com)


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Jason Everton 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jason-everton-041226223/)

---













