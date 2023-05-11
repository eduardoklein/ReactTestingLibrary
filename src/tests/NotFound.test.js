import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

test('Um h2 é criado na tela com o texto Page requested not found', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>,
  );
  const notFoundHeader = screen.getByText(/Page requested not found/i);
  expect(notFoundHeader).toBeInTheDocument();
});
test('Um h2 é criado na tela com o texto Page requested not found', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>,
  );
  const cryngPikachu = screen.getByRole('img');
  expect(cryngPikachu).toHaveAttribute('src', expect.stringContaining('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif'));
});
