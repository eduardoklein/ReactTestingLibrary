import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Testa se o nome correto do Pokemon é mostrado na tela', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  userEvent.click(screen.getByRole('button', { name: /all/i }));
  const firstPokemon = screen.getByText(/Pikachu/i);
  expect(firstPokemon).toBeInTheDocument();
  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType).toBeInTheDocument();
  expect(pokemonType).toHaveAttribute('data-testid', expect.stringContaining('pokemon-type'));
  expect(pokemonType.innerHTML).toBe('Electric');
  const averageWeight = screen.getByText(/average weight: 6\.0 kg/i);
  expect(averageWeight).toBeInTheDocument();
  const imgFirstPokemon = screen.getByRole('img');
  expect(imgFirstPokemon).toHaveAttribute('src', expect.stringContaining('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png'));
  expect(imgFirstPokemon).toHaveAttribute('alt', expect.stringContaining('Pikachu sprite'));
});
test('Testa se ao clicar no link de navegacao do Pokemon, a pagina é redirecionada', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  userEvent.click(screen.getByRole('button', { name: /all/i }));
  userEvent.click(screen.getByRole('link', { name: /more details/i }));
  expect(window.location.pathname).toBe('/pokemon/25');
});
test('Testa se existe um ícone de estrela nos Pokémon favoritados', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  userEvent.click(screen.getByRole('link', { name: /Home/i }));
  userEvent.click(screen.getByRole('button', { name: /all/i }));
  userEvent.click(screen.getByRole('link', { name: /More details/i }));
  userEvent.click(screen.getByText(/favoritado/i));
  userEvent.click(screen.getByRole('link', { name: /Favorite Pokémon/i }));
  const pikachuFavorited = screen.getByText(/Pikachu/i);
  expect(pikachuFavorited).toBeInTheDocument();
  const starImg = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(starImg).toHaveAttribute('src', expect.stringContaining('/star-icon.svg'));
  expect(starImg).toHaveAttribute('alt', expect.stringContaining('Pikachu is marked as favorite'));
});
