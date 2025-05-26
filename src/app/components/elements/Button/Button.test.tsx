import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';
import { Bookmark } from 'react-feather';

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders icon when provided', () => {
    render(<Button icon={<Bookmark data-testid="icon" />}>With Icon</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders only icon if no children', () => {
    render(<Button icon={<Bookmark data-testid="icon" />} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toBe('');
  });
});
