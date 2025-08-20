# Pokédex React Testing Library

Este projeto é uma aplicação React que simula uma Pokédex, permitindo visualizar, filtrar e favoritar Pokémon. Ele utiliza React, React Router, PropTypes e React Testing Library para testes automatizados.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Testes](#testes)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Licença](#licença)

## Funcionalidades

- Visualização de uma lista de Pokémon com detalhes.
- Filtragem por tipo de Pokémon.
- Marcar/desmarcar Pokémon como favoritos.
- Visualizar apenas Pokémon favoritos.
- Navegação entre páginas: Home, About, Favorite Pokémon e NotFound.
- Testes automatizados para garantir o funcionamento dos componentes e rotas.

## Instalação

1. Clone o repositório:
   ```sh
   git clone <url-do-repositório>
   cd ReactTestingLibrary
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão de produção do app.
- `npm test`: Executa os testes automatizados.
- `npm run test-coverage`: Executa os testes e gera relatório de cobertura.
- `npm run lint`: Executa o ESLint.
- `npm run lint:styles`: Executa o Stylelint para arquivos CSS.

## Estrutura de Pastas

```
src/
  components/        # Componentes reutilizáveis (Button, Pokemon, etc)
  pages/             # Páginas principais (About, FavoritePokemon, NotFound, Pokedex, PokemonDetails)
  routes/            # Configuração das rotas da aplicação
  services/          # Serviços para manipulação de favoritos
  tests/             # Testes automatizados
  types/             # Tipos PropTypes utilizados nos componentes
  data.js            # Lista de Pokémon utilizada na aplicação
  App.js             # Componente principal
  index.js           # Ponto de entrada da aplicação
public/
  index.html         # HTML principal
  star-icon.svg      # Ícone de favorito
  ...
```

## Testes

Os testes estão localizados em `src/tests`. Para rodar os testes, utilize:

```sh
npm test
```

Os testes cobrem:

- Renderização dos componentes principais.
- Funcionamento dos filtros e navegação.
- Favoritar/desfavoritar Pokémon.
- Rotas e páginas de erro.

## Tecnologias Utilizadas

- React
- React Router DOM
- PropTypes
- React Testing Library
- Jest
- ESLint & Stylelint
