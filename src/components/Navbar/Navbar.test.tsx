import { fireEvent, render, screen } from '@testing-library/react';

import { Navbar } from '.';
import { navbarItems } from './navbar';

test('renders the correct number of links', () => {
  render(<Navbar />);
  const links = screen.getAllByText(/.+/);
  expect(links.length).toEqual(navbarItems.length);
});

test('opens and closes the nav menu', () => {
  render(<Navbar />);
  const menuButton = screen.getByRole('button', { name: 'Mobile menu' });
  fireEvent.click(menuButton);
  const backdrop = screen.getByRole('presentation');
  expect(backdrop).toBeVisible();
  fireEvent.click(backdrop);
  const menu = screen.queryByRole('presentation');
  expect(menu).not.toBeInTheDocument();
});
