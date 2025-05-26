import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimeCard from '.';

const mockAnime = {
  id: 123,
  title: { romaji: 'Witch Watch' },
  coverImage: { large: 'https://example.com/image.jpg' },
  episodes: 88,
  genres: ['Action', 'Adventure'],
};

describe('AnimeCard', () => {
  it('renders anime info correctly', () => {
    render(<AnimeCard anime={mockAnime} />);
    
    expect(screen.getByText('Witch Watch')).toBeInTheDocument();
    expect(screen.getByText('88 episode')).toBeInTheDocument();
    expect(screen.getByText('Action, Adventure')).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/detail/witch-watch-123');
  });
});
