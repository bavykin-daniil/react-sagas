import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './Root';

test('renders header first level', () => {
  render(<Root />);
  const mainHeader = screen.getByRole('heading', { level: 1 });
  expect(mainHeader).toBeInTheDocument();
});
