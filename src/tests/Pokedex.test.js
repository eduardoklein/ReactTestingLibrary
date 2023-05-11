import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import pokemonList from '../data';

test('Testa se h2 existe na tela com o texto Encountered Pokémon', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const encounteredPokemonHeading = screen.getByRole('heading', { name: /encountered pokémon/i });
  expect(encounteredPokemonHeading).toBeInTheDocument();
});
test('Testa se os botões estão com nome correto', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const allFilter = screen.getByRole('button', { name: /all/i });
  expect(allFilter).toBeInTheDocument();
  const electric = screen.getByRole('button', { name: /electric/i });
  expect(electric).toBeInTheDocument();
  const fire = screen.getByRole('button', { name: /fire/i });
  expect(fire).toBeInTheDocument();
  const bug = screen.getByRole('button', { name: /bug/i });
  expect(bug).toBeInTheDocument();
  const poison = screen.getByRole('button', { name: /poison/i });
  expect(poison).toBeInTheDocument();
  const psychic = screen.getByRole('button', { name: /psychic/i });
  expect(psychic).toBeInTheDocument();
  const normal = screen.getByRole('button', { name: /normal/i });
  expect(normal).toBeInTheDocument();
  const dragon = screen.getByRole('button', { name: /dragon/i });
  expect(dragon).toBeInTheDocument();
});
test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const dataTest = 'data-testid';
  const stringDataTest = 'pokemon-type-button';
  const electric = screen.getByRole('button', { name: /electric/i });
  expect(electric).toHaveAttribute(dataTest, expect.stringContaining(stringDataTest));
  const fire = screen.getByRole('button', { name: /fire/i });
  expect(fire).toHaveAttribute(dataTest, expect.stringContaining(stringDataTest));
  const bug = screen.getByRole('button', { name: /bug/i });
  expect(bug).toHaveAttribute(dataTest, expect.stringContaining(stringDataTest));
  const poison = screen.getByRole('button', { name: /poison/i });
  expect(poison).toHaveAttribute(dataTest, expect.stringContaining(stringDataTest));
  const psychic = screen.getByRole('button', { name: /psychic/i });
  expect(psychic).toHaveAttribute(dataTest, expect.stringContaining(stringDataTest));
  const normal = screen.getByRole('button', { name: /normal/i });
  expect(normal).toHaveAttribute(dataTest, expect.stringContaining(stringDataTest));
  const dragon = screen.getByRole('button', { name: /dragon/i });
  expect(dragon).toHaveAttribute(dataTest, expect.stringContaining(stringDataTest));
});
test('Testa se os filtros resetam quando o usuario clica no All', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  userEvent.click(screen.getByRole('button', { name: /dragon/i }));
  const dragonairSprite = screen.getByRole('img', { name: /dragonair sprite/i });
  expect(dragonairSprite).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: /all/i }));
  const pikachuSprite = screen.getByRole('img', { name: /pikachu sprite/i });
  expect(pikachuSprite).toBeInTheDocument();
});
test('Testa o funcionamento da lista de pokemons', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  userEvent.click(screen.getByRole('button', { name: /all/i }));
  const firstPokemon = screen.getByText(/pikachu/i);
  expect(firstPokemon).toBeInTheDocument();
  const pokemonNames = pokemonList.map((pokemon) => {
    const name = screen.getByText(pokemon.name);
    expect(name).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /próximo/i }));
    return name;
  });
  console.log(pokemonNames);
  pokemonList.forEach(() => {
    userEvent.click(screen.getByRole('button', { name: /próximo/i }));
    const moreDetailsLinks = screen.getAllByRole('link', { name: /more details/i });
    expect(moreDetailsLinks).toHaveLength(1);
  });
  expect(firstPokemon).toBeInTheDocument();
});
