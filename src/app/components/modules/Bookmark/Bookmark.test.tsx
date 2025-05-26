import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Bookmark from '.';

const mockData = {
  id: 123,
  title: { romaji: 'Witch Watch' },
  coverImage: { large: 'https://example.com/image.jpg' },
  episodes: 88,
  genres: ['Action', 'Adventure'],
};

beforeEach(() => {
  localStorage.clear();
});

describe('Bookmark', () => {  
  it('renders bookmark correctly', () => {
    render(<Bookmark data={mockData} />);

    expect(screen.getByText('Bookmark This')).toBeInTheDocument();
  });

  it('shows Bookmarked if already in localStorage', () => {
    localStorage.setItem("bookmarks", JSON.stringify([mockData]));
    render(<Bookmark data={mockData} />);

    expect(screen.getByText('Bookmarked')).toBeInTheDocument();
  })

  it('toggle Bookmark click', () => {
    render(<Bookmark data={mockData} />);

    expect(screen.getByText('Bookmark This')).toBeInTheDocument();

    const link = screen.getByRole('link');
    fireEvent.click(link);
    expect(screen.getByText('Bookmarked')).toBeInTheDocument();

    const stored = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    expect(stored).toHaveLength(1);
    expect(stored[0].id).toBe(mockData.id);
  })
})