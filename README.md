# Pokedex

Aplicação web desenvolvida em **React** que consome a **PokeAPI** para listar Pokémon, realizar buscas por nome e exibir detalhes individuais por meio de **rotas dinâmicas**.

---

## 🔗 Acesse a aplicação online

**Link do site:**  
https://pokedex-miguel2026.netlify.app/

---

## 📌 Sobre o projeto

A **Pokedex** é uma aplicação desenvolvida para explorar Pokémon de forma simples e intuitiva.  
O projeto consome dados da **PokeAPI**, permitindo visualizar uma listagem inicial, buscar Pokémon por nome e acessar uma página de detalhes para cada Pokémon através de rotas dinâmicas.

---

## ✨ Funcionalidades

- Listagem inicial de Pokémon consumindo API externa
- Busca por nome
- Pré-visualização de resultados durante a digitação
- Página de detalhes com rota dinâmica (`/pokemon/:name`)
- Navegação interna entre páginas
- Tratamento para páginas inexistentes (`Not Found`)

---

## 🛠️ Tecnologias utilizadas

- **React**
- **Vite**
- **React Router DOM**
- **JavaScript**
- **CSS puro**
- **PokeAPI**
- **Netlify** (deploy)

---

## ▶️ Como executar o projeto localmente

### Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js**
- **npm**

### Instalar dependências

`npm install`

### Rodar em ambiente de desenvolvimento

`npm run dev`

### Depois disso, abra no navegador o endereço informado pelo Vite, normalmente:

`http://localhost:5173`


---

# ✅ PARTE 4 — ROTAS + API


## 🧩 Rotas da aplicação

- `/` → Página inicial com listagem e busca
- `/pokemon/:name` → Página de detalhes do Pokémon
- `*` → Página de erro / não encontrada

---

## 🌐 API utilizada

A aplicação utiliza a **PokeAPI** para consumir os dados dos Pokémon.

- **Listar Pokémon:**  
  `https://pokeapi.co/api/v2/pokemon`

- **Buscar detalhes por nome:**  
  `https://pokeapi.co/api/v2/pokemon/:name`

  ---

## 🏗️ Desenho da arquitetura da aplicação

```text
Pokedex
│
├── src
│   ├── components
│   │   ├── AppLayout.jsx
│   │   ├── PokemonCard.jsx
│   │   └── SearchInput.jsx
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── PokemonDetails.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── routes
│   │   └── index.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── styles
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── screenshots
│   ├── home.png
│   ├── search.png
│   └── details.png
│
├── index.html
├── package.json
├── vite.config.js
└── netlify.toml


---

# ✅ PARTE 6 — FLUXO DA APLICAÇÃO

```md
### Fluxo da aplicação

```text
Usuário
   ↓
Home.jsx
   ↓
SearchInput.jsx → busca Pokémon por nome
   ↓
PokemonCard.jsx → exibe cards da listagem
   ↓
Clique em um Pokémon
   ↓
React Router DOM
   ↓
PokemonDetails.jsx
   ↓
api.js (requisições para a PokeAPI)
   ↓
Exibição dos dados detalhados


---

# ✅ PARTE 7 — PRINTS

```md
---

## 📸 Prints da aplicação

### Tela inicial
![Tela inicial](./screenshots/home.png)

### Tela de busca
![Tela de busca](./screenshots/search.png)

### Tela de detalhes
![Tela de detalhes](./screenshots/details.png)

---

## 📂 Estrutura principal do projeto

- `src/components/AppLayout.jsx` → Estrutura base da aplicação
- `src/components/PokemonCard.jsx` → Card reutilizável de Pokémon
- `src/components/SearchInput.jsx` → Campo de busca com preview
- `src/pages/Home.jsx` → Página principal com listagem e busca
- `src/pages/PokemonDetails.jsx` → Página de detalhes do Pokémon
- `src/pages/NotFoundPage.jsx` → Página para rotas inválidas
- `src/routes/index.jsx` → Configuração das rotas
- `src/services/api.js` → Funções de consumo da API
- `src/styles/global.css` → Estilos globais

---

## 🚀 Deploy

A aplicação foi publicada utilizando **Netlify**.

**Link da aplicação online:**  
https://pokedex-miguel2026.netlify.app/

---

## 👨‍💻 Autor

Projeto desenvolvido por **Miguel Taveira** para atividade individual da disciplina.