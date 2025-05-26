import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AnimeList from '.';
import client from '@/app/lib/apolloClient';

jest.mock('@/app/lib/apolloClient', () => ({
  __esModule: true,
  default: {
    query: jest.fn()
  }
}));

const mockedQuery = client.query as jest.Mock;

describe('AnimeList', () => {
  it('renders anime list correctly', async () => {
    const mockAnimeData = {
      data: {
        Page: {
          media: [
            {
              id: 123,
              title: { romaji: 'Witch Watch' },
              coverImage: { large: 'https://example.com/image.jpg' },
              episodes: 88,
              genres: ['Action', 'Adventure'],
            },
            {
              id: 124,
              title: { romaji: 'One Piece' },
              coverImage: { large: 'https://example.com/image.jpg' },
              episodes: 120,
              genres: ['Action', 'Adventure'],
            },
          ]
        }
      }
    };

    const mockGenresData = {
      data: {
        GenreCollection: ['Action', 'Adventure', 'Comedy']
      }
    };

    mockedQuery
      .mockResolvedValueOnce(mockGenresData)
      .mockResolvedValueOnce(mockAnimeData);

    render(<AnimeList />);

    await waitFor(() => {
      expect(screen.getByText('Witch Watch')).toBeInTheDocument();
      expect(screen.getByText('88 episode')).toBeInTheDocument();
      expect(screen.getAllByText('Action, Adventure').length).toBeGreaterThan(0);

      expect(screen.getByText('One Piece')).toBeInTheDocument();
      expect(screen.getByText('120 episode')).toBeInTheDocument();
      expect(screen.getAllByText('Action, Adventure').length).toBeGreaterThan(0);
    });

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/detail/witch-watch-123');
  });
});
