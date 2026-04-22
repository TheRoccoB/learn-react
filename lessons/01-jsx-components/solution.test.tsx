import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProfileCard from './solution';

describe('Lesson 01: ProfileCard', () => {
  const props = { name: 'Ada Lovelace', role: 'Engineer', avatarUrl: '/avatar.png' };

  it('renders without crashing', () => {
    render(<ProfileCard {...props} />);
  });

  it('displays the name', () => {
    render(<ProfileCard {...props} />);
    expect(screen.getByTestId('profile-name')).toHaveTextContent('Ada Lovelace');
  });

  it('displays the role', () => {
    render(<ProfileCard {...props} />);
    expect(screen.getByTestId('profile-role')).toHaveTextContent('Engineer');
  });

  it('renders an img with the correct src and alt', () => {
    render(<ProfileCard {...props} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/avatar.png');
    expect(img).toHaveAttribute('alt', 'Ada Lovelace');
  });

  it('has a profile-card wrapper', () => {
    render(<ProfileCard {...props} />);
    expect(screen.getByTestId('profile-card')).toBeInTheDocument();
  });
});
