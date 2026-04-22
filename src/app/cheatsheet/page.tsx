import { CodeComparison } from '@/components/cheatsheet/CodeComparison';

export default function CheatSheetPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        Vue 3 → React Cheat Sheet
      </h1>
      <p className="text-zinc-400 mb-10">
        Every Vue concept you know, mapped to its React equivalent.
      </p>

      {/* 1. Template Syntax vs JSX */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">Template Syntax vs JSX</h2>
        <p className="text-zinc-400 mb-4">
          Vue uses an HTML-based template syntax with directives. React uses JSX — JavaScript expressions that look like HTML but live inside your JS.
        </p>
        <CodeComparison
          vue={`<template>
  <div :class="dynamicClass">
    <p>{{ message }}</p>
    <img :src="url" :alt="desc" />
  </div>
</template>`}
          react={`function Component() {
  return (
    <div className={dynamicClass}>
      <p>{message}</p>
      <img src={url} alt={desc} />
    </div>
  );
}`}
        />
        <div className="text-sm text-zinc-400 space-y-1">
          <p><strong>class</strong> → <strong>className</strong> (class is reserved in JS)</p>
          <p><strong>for</strong> → <strong>htmlFor</strong> (for is reserved in JS)</p>
          <p><strong>{'{{ }}'}</strong> → <strong>{'{ }'}</strong> (single curlies in JSX)</p>
          <p><strong>:attr=&quot;x&quot;</strong> → <strong>attr={'{x}'}</strong> (no v-bind, just curlies)</p>
        </div>
      </section>

      {/* 2. SFCs vs Function Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">SFCs vs Function Components</h2>
        <p className="text-zinc-400 mb-4">
          Vue organizes code in Single File Components with template/script/style blocks. React components are plain functions.
        </p>
        <CodeComparison
          vue={`<!-- MyComponent.vue -->
<template>
  <div class="greeting">
    <h1>Hello, {{ name }}!</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<style scoped>
.greeting { color: blue; }
</style>`}
          react={`// MyComponent.tsx
interface Props {
  name: string;
}

export default function MyComponent({ name }: Props) {
  return (
    <div style={{ color: 'blue' }}>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

// Or with Tailwind:
// <div className="text-blue-500">`}
        />
        <p className="text-sm text-zinc-400">
          React has no built-in scoped styles. Common solutions: Tailwind CSS, CSS Modules, or styled-components.
        </p>
      </section>

      {/* 3. ref/reactive vs useState */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">ref / reactive vs useState</h2>
        <p className="text-zinc-400 mb-4">
          Vue&apos;s reactivity system lets you mutate state directly. React requires immutable updates via setter functions.
        </p>
        <CodeComparison
          vue={`<script setup>
import { ref, reactive } from 'vue'

// Primitive
const count = ref(0)
count.value++

// Object
const user = reactive({ name: 'Ada', age: 30 })
user.name = 'Bob'  // mutate directly
</script>`}
          react={`import { useState } from 'react';

// Primitive
const [count, setCount] = useState(0);
setCount(c => c + 1);  // never mutate!

// Object
const [user, setUser] = useState({ name: 'Ada', age: 30 });
setUser(prev => ({ ...prev, name: 'Bob' }));  // spread + override`}
        />
        <p className="text-sm text-zinc-400">
          <strong>Key insight:</strong> In Vue, <code>count.value++</code> works. In React, you must always call the setter — <code>setCount(count + 1)</code>. Direct mutation does nothing.
        </p>
      </section>

      {/* 4. computed vs useMemo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">computed vs useMemo</h2>
        <p className="text-zinc-400 mb-4">
          Both cache derived values. Vue auto-tracks dependencies; React requires you to list them.
        </p>
        <CodeComparison
          vue={`<script setup>
import { ref, computed } from 'vue'

const items = ref([1, 2, 3, 4, 5])
const search = ref('')

// Auto-tracks items and search
const filtered = computed(() =>
  items.value.filter(i =>
    String(i).includes(search.value)
  )
)
</script>`}
          react={`import { useState, useMemo } from 'react';

const [items] = useState([1, 2, 3, 4, 5]);
const [search, setSearch] = useState('');

// Must list dependencies explicitly
const filtered = useMemo(
  () => items.filter(i =>
    String(i).includes(search)
  ),
  [items, search]  // <-- dependency array
);`}
        />
      </section>

      {/* 5. watch/watchEffect vs useEffect */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">watch / watchEffect vs useEffect</h2>
        <p className="text-zinc-400 mb-4">
          Vue has separate APIs for watching state. React unifies everything into <code>useEffect</code>.
        </p>
        <CodeComparison
          vue={`<script setup>
import { ref, watch, watchEffect } from 'vue'

const query = ref('')

// Watch specific source
watch(query, (newVal, oldVal) => {
  console.log('changed:', oldVal, '→', newVal)
})

// Auto-track (runs immediately)
watchEffect(() => {
  console.log('query is:', query.value)
})
</script>`}
          react={`import { useState, useEffect } from 'react';

const [query, setQuery] = useState('');

// Watch specific deps (no oldVal built-in)
useEffect(() => {
  console.log('query changed to:', query);
}, [query]);  // <-- runs when query changes

// Run on every render (like watchEffect)
useEffect(() => {
  console.log('query is:', query);
});  // no deps array = every render`}
        />
        <div className="text-sm text-zinc-400 space-y-1">
          <p><strong>watch(source, cb)</strong> → <strong>useEffect(cb, [source])</strong></p>
          <p><strong>watchEffect(cb)</strong> → <strong>useEffect(cb)</strong> (but avoid — runs every render)</p>
          <p><strong>Note:</strong> useEffect has no <code>oldValue</code> parameter. Use a ref to track previous values if needed.</p>
        </div>
      </section>

      {/* 6. Lifecycle hooks */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">Lifecycle Hooks</h2>
        <p className="text-zinc-400 mb-4">
          Vue has dedicated lifecycle hooks. React uses <code>useEffect</code> for all of them.
        </p>
        <CodeComparison
          vue={`<script setup>
import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('mounted')
  window.addEventListener('resize', handler)
})

onUnmounted(() => {
  window.removeEventListener('resize', handler)
})

onUpdated(() => {
  console.log('DOM updated')
})
</script>`}
          react={`import { useEffect } from 'react';

// onMounted + onUnmounted combined
useEffect(() => {
  console.log('mounted');
  window.addEventListener('resize', handler);

  return () => {  // cleanup = onUnmounted
    window.removeEventListener('resize', handler);
  };
}, []);  // empty array = run once on mount

// onUpdated (rarely needed)
useEffect(() => {
  console.log('rendered / updated');
});  // no deps = after every render`}
        />
      </section>

      {/* 7. v-model vs Controlled Inputs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">v-model vs Controlled Inputs</h2>
        <p className="text-zinc-400 mb-4">
          Vue&apos;s <code>v-model</code> is two-way binding sugar. React uses controlled components — you wire value + onChange yourself.
        </p>
        <CodeComparison
          vue={`<template>
  <input v-model="name" />
  <p>Hello, {{ name }}</p>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
</script>`}
          react={`import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </>
  );
}`}
        />
        <p className="text-sm text-zinc-400">
          React has no built-in two-way binding. You always set <code>value</code> and handle <code>onChange</code>. This is more explicit but more verbose.
        </p>
      </section>

      {/* 8. v-if/v-show vs Conditional Rendering */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">v-if / v-show vs Conditional Rendering</h2>
        <p className="text-zinc-400 mb-4">
          Vue has template directives. React uses plain JavaScript expressions.
        </p>
        <CodeComparison
          vue={`<template>
  <!-- v-if: removes from DOM -->
  <div v-if="status === 'loading'">Loading...</div>
  <div v-else-if="status === 'error'">Error!</div>
  <div v-else>{{ data }}</div>

  <!-- v-show: toggles display CSS -->
  <div v-show="isVisible">I'm here</div>
</template>`}
          react={`function Component() {
  return (
    <>
      {/* Ternary (v-if / v-else) */}
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>Error!</div>
      ) : (
        <div>{data}</div>
      )}

      {/* Short-circuit (v-if, no else) */}
      {isLoggedIn && <div>Welcome back</div>}

      {/* v-show equivalent */}
      <div style={{ display: isVisible ? 'block' : 'none' }}>
        I'm here
      </div>
    </>
  );
}`}
        />
      </section>

      {/* 9. v-for vs .map() */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">v-for vs .map()</h2>
        <p className="text-zinc-400 mb-4">
          Vue loops in the template. React maps arrays in JSX.
        </p>
        <CodeComparison
          vue={`<template>
  <ul>
    <li
      v-for="(item, index) in items"
      :key="item.id"
    >
      {{ index }}: {{ item.name }}
    </li>
  </ul>
</template>`}
          react={`function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id}>
          {index}: {item.name}
        </li>
      ))}
    </ul>
  );
}`}
        />
        <p className="text-sm text-zinc-400">
          Both require a <code>key</code> prop for efficient re-rendering. In React, <code>key</code> goes on the JSX element, not a directive.
        </p>
      </section>

      {/* 10. Props + emit vs Props + callbacks */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">Props + emit vs Props + Callbacks</h2>
        <p className="text-zinc-400 mb-4">
          Vue uses <code>emit</code> for child → parent communication. React passes callback functions as props.
        </p>
        <CodeComparison
          vue={`<!-- Child.vue -->
<script setup>
const emit = defineEmits<{
  (e: 'update', value: string): void
}>()
</script>
<template>
  <button @click="emit('update', 'new value')">
    Update
  </button>
</template>

<!-- Parent.vue -->
<template>
  <Child @update="handleUpdate" />
</template>`}
          react={`// Child
interface Props {
  onUpdate: (value: string) => void;
}

function Child({ onUpdate }: Props) {
  return (
    <button onClick={() => onUpdate('new value')}>
      Update
    </button>
  );
}

// Parent
function Parent() {
  return <Child onUpdate={handleUpdate} />;
}`}
        />
        <p className="text-sm text-zinc-400">
          React convention: callback props start with <code>on</code> (e.g., <code>onUpdate</code>, <code>onChange</code>, <code>onSubmit</code>).
        </p>
      </section>

      {/* 11. Slots vs children */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">Slots vs children / Render Props</h2>
        <p className="text-zinc-400 mb-4">
          Vue uses named slots. React uses <code>children</code> and render props.
        </p>
        <CodeComparison
          vue={`<!-- Card.vue -->
<template>
  <div class="card">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="body">
      <slot />  <!-- default slot -->
    </div>
  </div>
</template>

<!-- Usage -->
<Card>
  <template #header>
    <h2>Title</h2>
  </template>
  <p>Body content</p>
</Card>`}
          react={`// Card.tsx
interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

function Card({ header, children }: Props) {
  return (
    <div className="card">
      <div className="header">{header}</div>
      <div className="body">{children}</div>
    </div>
  );
}

// Usage
<Card header={<h2>Title</h2>}>
  <p>Body content</p>
</Card>`}
        />
        <p className="text-sm text-zinc-400">
          <code>children</code> is like the default slot. Named slots become regular props that accept <code>ReactNode</code>.
        </p>
      </section>

      {/* 12. provide/inject vs useContext */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">provide / inject vs useContext</h2>
        <p className="text-zinc-400 mb-4">
          Both solve the same problem: passing data deep without prop drilling.
        </p>
        <CodeComparison
          vue={`<!-- Provider.vue -->
<script setup>
import { provide, ref } from 'vue'

const theme = ref('light')
provide('theme', theme)
</script>

<!-- DeepChild.vue -->
<script setup>
import { inject } from 'vue'

const theme = inject('theme')
</script>
<template>
  <div>Theme: {{ theme }}</div>
</template>`}
          react={`// ThemeContext.tsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

// DeepChild.tsx
function DeepChild() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}`}
        />
      </section>

      {/* 13. Pinia vs State Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">Pinia vs State Management</h2>
        <p className="text-zinc-400 mb-4">
          Vue has Pinia as the standard store. React has many options — Zustand is the most Vue-like.
        </p>
        <CodeComparison
          vue={`// stores/counter.ts (Pinia)
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  return { count, increment }
})

// Component
const store = useCounterStore()
store.increment()`}
          react={`// stores/counter.ts (Zustand)
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));

// Component
function Counter() {
  const { count, increment } = useCounterStore();
  return <button onClick={increment}>{count}</button>;
}`}
        />
        <p className="text-sm text-zinc-400">
          Other options: Redux Toolkit (more boilerplate, huge ecosystem), Jotai (atomic, like Vue refs), or just React Context + useReducer for simple cases.
        </p>
      </section>

      {/* 14. Nuxt pages vs Next.js App Router */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">Nuxt Pages vs Next.js App Router</h2>
        <p className="text-zinc-400 mb-4">
          Both use file-system routing. The conventions differ slightly.
        </p>
        <CodeComparison
          vue={`// Nuxt 3 file structure
pages/
  index.vue          →  /
  about.vue          →  /about
  users/
    index.vue        →  /users
    [id].vue         →  /users/:id

// pages/users/[id].vue
<script setup>
const route = useRoute()
const id = route.params.id
</script>`}
          react={`// Next.js App Router structure
app/
  page.tsx           →  /
  about/
    page.tsx         →  /about
  users/
    page.tsx         →  /users
    [id]/
      page.tsx       →  /users/:id

// app/users/[id]/page.tsx
export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
}`}
        />
        <div className="text-sm text-zinc-400 space-y-1">
          <p><strong>Nuxt:</strong> each file = a route. <strong>Next.js:</strong> each folder with <code>page.tsx</code> = a route.</p>
          <p><strong>Nuxt:</strong> <code>[id].vue</code> <strong>Next.js:</strong> <code>[id]/page.tsx</code></p>
          <p><strong>Nuxt:</strong> <code>layouts/default.vue</code> <strong>Next.js:</strong> <code>layout.tsx</code> in the same or parent folder</p>
        </div>
      </section>

      {/* 15. Nuxt middleware vs Next.js middleware */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">Nuxt Middleware vs Next.js Middleware</h2>
        <p className="text-zinc-400 mb-4">
          Both intercept requests. Nuxt has route middleware; Next.js has edge middleware.
        </p>
        <CodeComparison
          vue={`// middleware/auth.ts (Nuxt)
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth()
  if (!auth.isLoggedIn) {
    return navigateTo('/login')
  }
})

// pages/dashboard.vue
<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>`}
          react={`// middleware.ts (Next.js, at project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  if (!token) {
    return NextResponse.redirect(
      new URL('/login', request.url)
    );
  }
}

export const config = {
  matcher: '/dashboard/:path*',
};`}
        />
        <p className="text-sm text-zinc-400">
          Next.js middleware runs at the edge (before the server). It&apos;s a single file that uses URL matchers, unlike Nuxt&apos;s per-page middleware assignment.
        </p>
      </section>

      {/* 16. Composables vs Custom Hooks */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-1">Composables vs Custom Hooks</h2>
        <p className="text-zinc-400 mb-4">
          Same concept, different names. Both extract reusable stateful logic into functions.
        </p>
        <CodeComparison
          vue={`// composables/useMouse.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(e: MouseEvent) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() =>
    window.addEventListener('mousemove', update))
  onUnmounted(() =>
    window.removeEventListener('mousemove', update))

  return { x, y }
}

// Usage: const { x, y } = useMouse()`}
          react={`// hooks/useMouse.ts
import { useState, useEffect } from 'react';

export function useMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function update(e: MouseEvent) {
      setPos({ x: e.pageX, y: e.pageY });
    }
    window.addEventListener('mousemove', update);
    return () =>
      window.removeEventListener('mousemove', update);
  }, []);

  return pos;
}

// Usage: const { x, y } = useMouse();`}
        />
        <div className="text-sm text-zinc-400 space-y-1">
          <p><strong>Convention:</strong> Both start with <code>use</code>.</p>
          <p><strong>Vue:</strong> composables in <code>composables/</code>. <strong>React:</strong> hooks in <code>hooks/</code>.</p>
          <p><strong>Key rule:</strong> React hooks must be called at the top level — never inside conditions, loops, or nested functions. Vue composables have the same constraint inside <code>setup()</code>.</p>
        </div>
      </section>

      <div className="border-t border-zinc-800 pt-6 text-center text-zinc-500 text-sm">
        Ready to practice? Head to the lessons in the sidebar.
      </div>
    </div>
  );
}
