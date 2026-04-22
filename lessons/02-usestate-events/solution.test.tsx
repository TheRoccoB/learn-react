import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Counter from './solution';

describe('Lesson 02: Counter', () => {
  it('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-display')).toHaveTextContent('0');
  });

  it('increments when +1 is clicked', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole('button', { name: '+1' }));
    expect(screen.getByTestId('count-display')).toHaveTextContent('1');
  });

  it('decrements when -1 is clicked', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole('button', { name: '-1' }));
    expect(screen.getByTestId('count-display')).toHaveTextContent('-1');
  });

  it('resets to 0 when Reset is clicked', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole('button', { name: '+1' }));
    await userEvent.click(screen.getByRole('button', { name: '+1' }));
    await userEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByTestId('count-display')).toHaveTextContent('0');
  });

  it('handles multiple clicks correctly', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole('button', { name: '+1' }));
    await userEvent.click(screen.getByRole('button', { name: '+1' }));
    await userEvent.click(screen.getByRole('button', { name: '+1' }));
    await userEvent.click(screen.getByRole('button', { name: '-1' }));
    expect(screen.getByTestId('count-display')).toHaveTextContent('2');
  });
});
