'use client';

import { useState, useEffect } from 'react';

interface Props {
  url: string;
}

export default function UserList({ url }: Props) {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setUsers(data.map((u: { name: string }) => u.name));
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  if (loading) {
    return (
      <div data-testid="loading" className="text-gray-500 italic">
        Loading...
      </div>
    );
  }

  return (
    <ul data-testid="user-list" className="space-y-1">
      {users.map((user) => (
        <li key={user} className="text-gray-800">
          {user}
        </li>
      ))}
    </ul>
  );
}
