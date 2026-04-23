'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <p data-testid="count-display" className="text-4xl font-bold text-zinc-100">
        {count}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-zinc-700 text-zinc-200 rounded hover:bg-zinc-600 font-medium"
        >
          -1
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-zinc-700 text-zinc-200 rounded hover:bg-zinc-600 font-medium"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
        >
          +1
        </button>
      </div>
    </div>
  );
}
