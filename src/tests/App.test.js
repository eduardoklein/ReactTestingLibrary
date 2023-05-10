import React from 'react';
import ReactDOM from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('Testa se o topo da aplicacao tem um conjunto de links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const home = screen.getByText(/Home/);
  console.log(home);
  expect(home).toBeInTheDocument();
  expect(home).toHaveTextContent('Home');
  const about = screen.getByText(/About/);
  expect(about).toBeInTheDocument();
  expect(about).toHaveTextContent('About');
  const favoritePokemon = screen.getByText(/Favorite Pokémon/);
  expect(favoritePokemon).toBeInTheDocument();
  expect(favoritePokemon).toHaveTextContent('Favorite Pokémon');
});
