import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../pages/About';

test('Testa componente About', () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>,
  );
  const aboutPokedex = screen.getByText(/About Pokédex/);
  expect(aboutPokedex).toBeInTheDocument();
  const imgPokedex = screen.getByRole('img');
  expect(imgPokedex).toHaveAttribute('src', expect.stringContaining('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png'));
});
