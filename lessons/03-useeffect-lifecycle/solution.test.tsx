import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import UserList from './solution';

const mockUsers = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' },
];

beforeEach(() => {
  vi.restoreAllMocks();
});

function mockFetch(data: unknown) {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    )
  );
}

describe('Lesson 03: UserList', () => {
  it('shows a loading indicator initially', () => {
    mockFetch(mockUsers);
    render(<UserList url="/api/users" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders user names after fetch resolves', async () => {
    mockFetch(mockUsers);
    render(<UserList url="/api/users" />);

    await waitFor(() => {
      expect(screen.getByTestId('user-list')).toBeInTheDocument();
    });

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('calls fetch with the provided url', async () => {
    mockFetch(mockUsers);
    render(<UserList url="/api/team" />);

    await waitFor(() => {
      expect(screen.getByTestId('user-list')).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith('/api/team');
  });

  it('re-fetches when the url prop changes', async () => {
    mockFetch(mockUsers);
    const { rerender } = render(<UserList url="/api/users" />);

    await waitFor(() => {
      expect(screen.getByTestId('user-list')).toBeInTheDocument();
    });

    const newUsers = [{ name: 'Diana' }, { name: 'Eve' }];
    mockFetch(newUsers);

    rerender(<UserList url="/api/other" />);

    await waitFor(() => {
      expect(screen.getByText('Diana')).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith('/api/other');
  });
});
