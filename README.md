# Pokedex

Aplicacao em React que consome a [PokeAPI](https://pokeapi.co/) para listar pokemons e exibir detalhes individuais por meio de rotas dinamicas.

## Sobre o projeto

Este projeto foi desenvolvido com:

- React
- Vite
- React Router DOM
- CSS puro
- PokeAPI

Funcionalidades principais:

- listagem inicial de pokemons consumindo API externa
- busca por nome
- preview de resultados durante a digitacao
- pagina de detalhes com rota dinamica `/pokemon/:name`
- navegacao interna entre paginas

## Como executar o projeto

### Requisitos

- Node.js instalado
- npm instalado

### Instalar dependencias

```bash
npm install
```

### Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

Depois disso, abra no navegador o endereco informado pelo Vite, normalmente algo como:

```bash
http://localhost:5173
```

### Gerar build de producao

```bash
npm run build
```

### Visualizar build localmente

```bash
npm run preview
```

## Deploy na Netlify

Este projeto ja esta preparado para deploy na Netlify com o arquivo:

- [netlify.toml](./netlify.toml)

Ele define:

- comando de build: `npm run build`
- pasta publicada: `dist`
- redirect para `index.html`, necessario para o React Router funcionar nas rotas dinamicas

### Como publicar

1. Envie o projeto para um repositorio no GitHub.
2. Acesse a Netlify.
3. Clique em `Add new site` e depois em `Import an existing project`.
4. Conecte seu repositorio.
5. Confirme estas configuracoes:

```text
Build command: npm run build
Publish directory: dist
```

6. Finalize o deploy.

### Observacao importante

Como a aplicacao usa rota dinamica, por exemplo `/pokemon/pikachu`, o redirect da Netlify e necessario para evitar erro `Page not found` ao atualizar a pagina diretamente no navegador.

## Estrutura do projeto

```text
src/
  components/
    AppLayout.jsx
    PokemonCard.jsx
    SearchInput.jsx
  pages/
    Home.jsx
    PokemonDetails.jsx
    NotFoundPage.jsx
  routes/
    index.jsx
  services/
    api.js
  styles/
    global.css
  App.jsx
  main.jsx
```

## Rotas

- `/` -> pagina inicial com listagem e busca
- `/pokemon/:name` -> pagina de detalhes do pokemon

## Consumo de API

O projeto utiliza a PokeAPI:

- listar pokemons: `https://pokeapi.co/api/v2/pokemon`
- buscar detalhes por nome: `https://pokeapi.co/api/v2/pokemon/:name`

As funcoes de consumo estao em:

- [src/services/api.js](./src/services/api.js)

## Arquivos principais

- [src/pages/Home.jsx](./src/pages/Home.jsx): listagem, busca e preview
- [src/pages/PokemonDetails.jsx](./src/pages/PokemonDetails.jsx): detalhes do pokemon
- [src/routes/index.jsx](./src/routes/index.jsx): configuracao das rotas
- [src/components/PokemonCard.jsx](./src/components/PokemonCard.jsx): card reutilizavel
- [src/styles/global.css](./src/styles/global.css): estilos globais

## Observacoes

- A busca permite filtrar os pokemons visiveis e tambem encontrar pokemons fora da lista inicial.
- Ao pressionar `Enter` ou clicar em `Buscar`, a aplicacao navega para a rota dinamica de detalhes.

## Autor

Projeto desenvolvido para atividade individual da disciplina.
