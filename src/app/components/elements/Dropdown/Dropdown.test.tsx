import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from '.';

const mockProps = {
  options: ['Action', 'Adventure', 'Drama'],
  onChange: jest.fn(),
  id: "genres",
  name: "genres",
  value: "",
  placeholder: "Select Genres"
}
describe('Dropdown', () => {
  it('render dropdown correctly', () => {
    render(<Dropdown {...mockProps} />);
    expect(screen.getByText('Select Genres')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Adventure')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();

    const select = screen.getByRole('combobox'); 
    expect(select).toHaveAttribute('id', 'genres');
    expect(select).toHaveAttribute('name', 'genres');
  });

  it('calls onChange when select options', () => {
    render(<Dropdown {...mockProps} value="Drama" />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('Drama');
  })
})