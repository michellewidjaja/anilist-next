import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodeList from '.';

const episodeListProps = {
  streamingEpisodes: [
    {
      title: 'Episode 1',
      thumbnail: 'https://example.com/image.jpg',
      url: 'https://example.com/episode-1'
    },
    {
      title: 'Episode 2',
      thumbnail: 'https://example.com/image.jpg',
      url: 'https://example.com/episode-2'
    }
  ]
}

describe('EpisodeList', () => {
  it('renders episode list correctly', () => {
    render(<EpisodeList {...episodeListProps} />);
    
    expect(screen.getByText('Episode 1')).toBeInTheDocument();
    expect(screen.getByText('Episode 2')).toBeInTheDocument();
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveAttribute('href', 'https://example.com/episode-1');
    expect(links[0]).toHaveAttribute('target', '_blank');

    expect(links[1]).toHaveAttribute('href', 'https://example.com/episode-2');
    expect(links[1]).toHaveAttribute('target', '_blank');
  });
});