import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from './Button';

describe('Button', () => {
  test('renders button with default theme and size', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('md');
    expect(button).toHaveClass('default');
    expect(button).toHaveTextContent('Click me');
  });

  test('renders button with custom theme and size', () => {
    render(
      <Button theme="active" size="sm">
        Click me
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('sm');
    expect(button).toHaveClass('active');
    expect(button).toHaveTextContent('Click me');
  });

  test('calls onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test('disables the button when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
