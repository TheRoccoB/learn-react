# Lesson 03: useEffect & Lifecycle

## Vue vs React: Side Effects & Lifecycle

In **Vue**, you use lifecycle hooks and watchers:

```vue
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps<{ url: string }>()
const users = ref<string[]>([])
const loading = ref(true)

async function fetchUsers(url: string) {
  loading.value = true
  const res = await fetch(url)
  const data = await res.json()
  users.value = data.map((u: any) => u.name)
  loading.value = false
}

onMounted(() => fetchUsers(props.url))

watch(() => props.url, (newUrl) => {
  fetchUsers(newUrl)
})
</script>

<template>
  <div v-if="loading">Loading...</div>
  <ul v-else>
    <li v-for="user in users" :key="user">{{ user }}</li>
  </ul>
</template>
```

In **React**, `useEffect` handles both mount and watch:

```tsx
'use client';
import { useState, useEffect } from 'react';

interface Props {
  url: string;
}

export default function UserList({ url }: Props) {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsers(data.map((u: any) => u.name));
        setLoading(false);
      });
  }, [url]); // <-- dependency array = watch source

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  );
}
```

### Key Differences

| Vue | React |
|-----|-------|
| `onMounted(() => ...)` | `useEffect(() => ..., [])` (empty deps = run once) |
| `watch(source, callback)` | `useEffect(() => ..., [source])` (deps = watch sources) |
| `watchEffect(() => ...)` | `useEffect(() => ...)` (no deps = run every render, but rarely used) |
| `onUnmounted(() => ...)` | Return a cleanup function from `useEffect` |
| Separate lifecycle hooks | One `useEffect` handles mount + update + cleanup |

### The Dependency Array

This is the most important concept in this lesson:

- `useEffect(fn, [])` — run once on mount (like `onMounted`)
- `useEffect(fn, [url])` — run on mount AND when `url` changes (like `onMounted` + `watch`)
- `useEffect(fn)` — run after every render (rarely what you want)

## Assignment

Build a `UserList` component in `solution.tsx` that:

1. Accepts a `url` prop (string)
2. Shows a loading indicator with `data-testid="loading"` while fetching
3. Fetches JSON from the `url` on mount
4. Displays user names in a `<ul>` with `data-testid="user-list"`
5. Each user name in a `<li>`
6. Re-fetches when the `url` prop changes

**Expected JSON format:** `[{ "name": "Alice" }, { "name": "Bob" }]`

**Hint:** You'll need `'use client'`, `useState`, and `useEffect`.

## Run Tests

```bash
npm test -- lessons/03
```
