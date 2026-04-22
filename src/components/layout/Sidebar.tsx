import Link from 'next/link';
import { getAllLessons } from '@/lib/lessons';

export function Sidebar() {
  const lessons = getAllLessons();

  return (
    <aside className="w-64 shrink-0 border-r border-zinc-800 bg-[#13151a] p-6 flex flex-col gap-6">
      <Link href="/" className="text-lg font-bold text-zinc-100 hover:text-blue-400">
        Learn React
      </Link>

      <nav className="flex flex-col gap-1">
        <Link
          href="/cheatsheet"
          className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-blue-400"
        >
          Vue → React Cheat Sheet
        </Link>

        <div className="mt-4 mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Lessons
        </div>

        {lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${lesson.slug}`}
            className="px-3 py-2 rounded-md text-sm text-zinc-400 hover:bg-zinc-800 hover:text-blue-400"
          >
            {lesson.order}. {lesson.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
