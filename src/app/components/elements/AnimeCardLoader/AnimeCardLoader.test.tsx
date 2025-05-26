import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimeCardLoader from '.';

describe('AnimeCardLoader', () => {
  it('renders anime card loader correctly', () => {
    render(<AnimeCardLoader />);
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });
});
