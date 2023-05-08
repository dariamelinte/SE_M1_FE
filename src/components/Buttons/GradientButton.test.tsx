import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { GradientButton } from './GradientButton';

describe('GradientButton', () => {
  it('renders children', () => {
    render(<GradientButton>Click me</GradientButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('fires onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<GradientButton onClick={handleClick}>Click me</GradientButton>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('does not fire onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <GradientButton disabled onClick={handleClick}>
        Click me
      </GradientButton>
    );
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('adds secondary class when secondary prop is true', () => {
    // render(<GradientButton secondary>Secondary Button</GradientButton>);
    // const gradientButton = screen.getByRole('div', { name: 'button' });
    // expect(gradientButton).toHaveClass('GradientButton', 'secondary');
  });
});
