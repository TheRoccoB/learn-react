import Link from 'next/link';
import { getAllLessons } from '@/lib/lessons';

export function Sidebar() {
  const lessons = getAllLessons();

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-gray-50 p-6 flex flex-col gap-6">
      <Link href="/" className="text-lg font-bold text-gray-900 hover:text-blue-600">
        Learn React
      </Link>

      <nav className="flex flex-col gap-1">
        <Link
          href="/cheatsheet"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700"
        >
          Vue → React Cheat Sheet
        </Link>

        <div className="mt-4 mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Lessons
        </div>

        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${lesson.slug}`}
            className="px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700"
          >
            {lesson.order}. {lesson.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
