// Lesson 02: useState & Events
//
// In Vue, you'd use ref() and @click. In React, you use useState and onClick.
//
// ASSIGNMENT:
// 1. Add 'use client' at the top (useState only works in client components)
// 2. Import useState from 'react'
// 3. Create a count state variable initialized to 0
// 4. Display the count in an element with data-testid="count-display"
// 5. Add a "+1" button that increments the count
// 6. Add a "-1" button that decrements the count
// 7. Add a "Reset" button that sets count to 0
//
// Remember: In React, you NEVER mutate state. Always use the setter!
'use client';

import {useState} from "react";

export default function Counter() {

  const [count, setCount] = useState(0);
  return <>
    <p data-testid="count-display">Count = {count}</p>
    <button onClick={() => {setCount(count - 1)}} className="px-4 py-2 m-2 bg-zinc-700 text-zinc-200 rounded hover:bg-zinc-600 font-medium">-1</button>
    <button onClick={() => {setCount(0)}} className="px-4 py-2 m-2 bg-zinc-700 text-zinc-200 rounded hover:bg-zinc-600 font-medium">Reset</button>
    <button onClick={() => {setCount(count + 1)}} className="px-4 py-2 m-2 bg-zinc-700 text-zinc-200 rounded hover:bg-zinc-600 font-medium">+1</button>
  </>;
}


