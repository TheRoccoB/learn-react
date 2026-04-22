# Lesson 02: useState & Events

## Vue vs React: Reactivity

In **Vue**, you use `ref()` or `reactive()` for state, and `@click` for events:

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="decrement">-1</button>
    <button @click="reset">Reset</button>
    <button @click="increment">+1</button>
  </div>
</template>
```

In **React**, you use `useState` and `onClick`:

```tsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

### Key Differences

| Vue | React |
|-----|-------|
| `ref(0)` | `useState(0)` |
| `count.value` to read/write | `count` to read, `setCount(x)` to write |
| `count.value++` (mutate) | `setCount(c => c + 1)` (replace) |
| `@click="handler"` | `onClick={handler}` |
| Automatic `.value` unwrap in template | No unwrapping needed |

### Important: React state is immutable

In Vue, you mutate state: `count.value++`. In React, you **never mutate** — you always call the setter with a new value. This is the single biggest mindset shift.

## Assignment

Build a `Counter` component in `solution.tsx` that:

1. Starts with a count of `0`
2. Displays the current count with `data-testid="count-display"`
3. Has three buttons:
   - **+1** button that increments the count
   - **-1** button that decrements the count
   - **Reset** button that sets count back to 0

**Hint:** You'll need to add `'use client'` at the top of your file since `useState` is a client-side hook.

## Run Tests

```bash
npm test -- lessons/02
```
