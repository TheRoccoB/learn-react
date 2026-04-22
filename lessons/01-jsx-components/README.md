# Lesson 01: JSX & Components

## Vue vs React: The Big Picture

In **Vue**, you write Single File Components (SFCs) with three sections:

```vue
<template>
  <div class="card">
    <img :src="avatarUrl" :alt="name" />
    <h2>{{ name }}</h2>
    <p>{{ role }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  role: string
  avatarUrl: string
}>()
</script>
```

In **React**, everything is a function that returns JSX:

```tsx
interface Props {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function ProfileCard({ name, role, avatarUrl }: Props) {
  return (
    <div className="card">
      <img src={avatarUrl} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

### Key Differences

| Vue | React |
|-----|-------|
| `<template>` section | JSX returned from function |
| `{{ variable }}` | `{variable}` |
| `:src="x"` (v-bind) | `src={x}` |
| `class="..."` | `className="..."` |
| `defineProps<T>()` | Function parameter with type |
| `<script setup>` | Just a function body |

## Assignment

Build a `ProfileCard` component in `solution.tsx` that:

1. Accepts props: `name` (string), `role` (string), `avatarUrl` (string)
2. Renders a card with:
   - An `<img>` with `src={avatarUrl}` and `alt={name}`
   - The name in an `<h2>`
   - The role in a `<p>`
3. Add these `data-testid` attributes for testing:
   - `"profile-card"` on the outer wrapper
   - `"profile-name"` on the name element
   - `"profile-role"` on the role element

## Run Tests

```bash
npm test -- lessons/01
```
