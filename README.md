# Encantexto
> Entre linhas e incensos.

A **Encantexto** é uma loja virtual que une dois universos em uma única plataforma: literatura e produtos esotéricos. O sistema permite a comercialização de livros novos e usados, além de itens como velas, incensos, cristais, oráculos e outros acessórios místicos.

O objetivo é oferecer uma experiência diferenciada para leitores e pessoas interessadas na cultura esotérica, disponibilizando uma plataforma organizada, intuitiva e temática.

## 🎯 Objetivos

- Gerenciar o catálogo de livros e produtos esotéricos;
- Controlar o estoque automaticamente;
- Registrar pedidos realizados pelos clientes;
- Organizar os produtos por categorias;
- Disponibilizar uma interface simples para navegação e gerenciamento da loja.

## 🚀 Funcionalidades previstas

- Cadastro, edição, listagem e remoção de produtos (CRUD);
- Organização dos produtos por categorias;
- Visualização e consulta do catálogo;
- Carrinho de compras e finalização de pedidos;
- Controle automático de estoque;
- Consulta do histórico e status dos pedidos;
- Interface administrativa para gerenciamento de produtos e pedidos;
- Exibição de mensagens de sucesso e erro durante as operações.

## 🛠️ Tecnologias

O projeto está organizado em um **monorepositório (monorepo)**, reunindo o frontend e o backend em um único repositório, mas mantendo suas dependências e responsabilidades separadas.

- **Frontend:** React, Vite e React Router;
- **Backend:** Node.js e Express;
- **Comunicação:** API REST, utilizando `fetch` para as requisições;
- **Banco de dados:** banco de dados relacional.

## 📂 Estrutura do projeto

```text
encantexto/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── Documento de Especificação e Backlog
```

*Observação: a estrutura pode ser ajustada conforme o desenvolvimento do sistema.*

## ⚙️ Instalação e execução

### Requisitos

- Node.js;
- npm;
- Banco de dados relacional configurado.

### 1. Clone o repositório

```bash
git clone https://github.com/GustavoRigon0/Encantexto
```

### 2. Acesse a pasta do projeto

```bash
cd encantexto
```

### 3. Configure o backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente necessárias para a conexão com o banco de dados e para a execução do servidor.

Inicie o backend utilizando o comando definido no `package.json`.

### 4. Configure o frontend

Em outro terminal, acesse a pasta do frontend:

```bash
cd encantexto/frontend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` com base no `.env.example`, configurando a URL da API:

```env
VITE_API_URL=http://localhost:3000
```

*O endereço e a porta devem corresponder à configuração real do backend.*

Inicie o frontend:

```bash
npm run dev
```

Após a inicialização, acesse o endereço local informado pelo Vite no terminal.

## 🔗 Integração entre frontend e backend

O frontend, desenvolvido em React, realiza requisições à API do backend para consultar e manipular os dados da aplicação. O backend processa essas requisições e realiza a comunicação com o banco de dados.

As rotas da API serão documentadas conforme forem implementadas e testadas.

## 📋 Especificação e backlog

O documento de **Especificação e Backlog** reúne a definição do escopo, a justificativa da estrutura escolhida, as tecnologias previstas, os riscos identificados e as tarefas planejadas para o desenvolvimento do sistema.

O backlog está disponível no repositório junto aos demais documentos do projeto.

## 👥 Integrantes

- Thomas Rodrigues
- Pedro Araújo
- Gustavo Rigon
- Yasmim Prado

