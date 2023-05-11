import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../pages/FavoritePokemon';
import App from '../App';

test('Testa o caso de nao existir um Pokemon Favorito', () => {
  render(
    <BrowserRouter>
      <FavoritePokemon />
    </BrowserRouter>,
  );
  const noFavoritePokemon = screen.getByText(/No favorite Pokémon found/);
  expect(noFavoritePokemon).toBeInTheDocument();
});
test('Testa se so e mostrado Pokemons com o isFavorite === true', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  userEvent.click(screen.getByRole('link', { name: /Home/i }));
  userEvent.click(screen.getByRole('link', { name: /More details/i }));
  userEvent.click(screen.getByText(/favoritado/i));
  userEvent.click(screen.getByRole('link', { name: /Favorite Pokémon/i }));
  const pikachuFavorited = screen.getByText(/Pikachu/i);
  expect(pikachuFavorited).toBeInTheDocument();
});
