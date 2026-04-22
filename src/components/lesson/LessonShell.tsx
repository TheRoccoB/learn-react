import { AssignmentBrief } from './AssignmentBrief';

interface Props {
  slug: string;
  title: string;
  readme: string;
  children: React.ReactNode;
  prevLesson?: { slug: string; title: string } | null;
  nextLesson?: { slug: string; title: string } | null;
}

export function LessonShell({ slug, title, readme, children, prevLesson, nextLesson }: Props) {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-100">{title}</h1>
        <a
          href={`/lessons/${slug}/reference`}
          className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
        >
          View reference solution
        </a>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800 overflow-hidden">
        <div className="p-6 overflow-y-auto">
          <AssignmentBrief content={readme} />
        </div>

        <div className="p-6 overflow-y-auto bg-[#13151a]">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Your Solution
          </div>
          <div className="border border-zinc-700 rounded-lg p-4">
            {children}
          </div>
        </div>
      </div>

      {(prevLesson || nextLesson) && (
        <div className="border-t border-zinc-800 px-6 py-3 flex justify-between">
          {prevLesson ? (
            <a href={`/lessons/${prevLesson.slug}`} className="text-sm text-blue-400 hover:underline">
              &larr; {prevLesson.title}
            </a>
          ) : <span />}
          {nextLesson ? (
            <a href={`/lessons/${nextLesson.slug}`} className="text-sm text-blue-400 hover:underline">
              {nextLesson.title} &rarr;
            </a>
          ) : <span />}
        </div>
      )}
    </div>
  );
}
