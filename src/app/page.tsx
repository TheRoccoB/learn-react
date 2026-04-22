import Link from 'next/link';
import { getAllLessons } from '@/lib/lessons';

export default function Home() {
  const lessons = getAllLessons();

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-zinc-100 mb-2">
        Learn React from Vue
      </h1>
      <p className="text-lg text-zinc-400 mb-8">
        Hands-on React &amp; Next.js lessons designed for Vue 3 developers.
        Each lesson maps familiar Vue concepts to their React equivalents.
      </p>

      <div className="mb-8">
        <Link
          href="/cheatsheet"
          className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500"
        >
          Start with the Cheat Sheet &rarr;
        </Link>
      </div>

      <h2 className="text-xl font-semibold text-zinc-200 mb-4">Lessons</h2>
      <div className="flex flex-col gap-3">
        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${lesson.slug}`}
            className="block p-4 border border-zinc-700 rounded-lg hover:border-blue-500 hover:bg-zinc-800/50 transition-colors"
          >
            <span className="text-sm text-zinc-500 font-mono">
              {String(lesson.order).padStart(2, '0')}
            </span>
            <span className="ml-3 font-medium text-zinc-200">
              {lesson.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
