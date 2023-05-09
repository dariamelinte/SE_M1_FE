import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(
      <Checkbox
        name="test"
        title="Test checkbox"
        checked={false}
        onCheck={() => {}}
      />
    );

    const checkbox = screen.getByLabelText('Test checkbox') as HTMLInputElement;

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.type).toBe('checkbox');
    expect(checkbox.checked).toBe(false);
  });

  it('calls the onCheck function when clicked', () => {
    const onCheck = jest.fn();

    render(
      <Checkbox
        name="test"
        title="Test checkbox"
        checked={false}
        onCheck={onCheck}
      />
    );

    const checkbox = screen.getByLabelText('Test checkbox') as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(onCheck).toHaveBeenCalledTimes(1);
  });

  it('displays an error message when provided', () => {
    render(
      <Checkbox
        name="test"
        title="Test checkbox"
        checked={false}
        onCheck={() => {}}
        error="Error message"
      />
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('adds the `success` class when `status` prop is set to `success`', () => {
    render(
      <Checkbox
        name="test"
        title="Test checkbox"
        checked={false}
        onCheck={() => {}}
        status="success"
      />
    );

    const checkbox = screen.getByLabelText('Test checkbox');

    expect(checkbox).toHaveClass('input-success');
  });

  it('adds the `danger` class when `status` prop is set to `danger`', () => {
    render(
      <Checkbox
        name="test"
        title="Test checkbox"
        checked={false}
        onCheck={() => {}}
        status="danger"
      />
    );

    const checkbox = screen.getByLabelText('Test checkbox');

    expect(checkbox).toHaveClass('input-danger');
  });
});
