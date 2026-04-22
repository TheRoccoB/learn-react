import { getAllLessons } from '@/lib/lessons';
import { ReferencePreview } from '@/components/lesson/ReferencePreview';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((l) => ({ slug: l.slug }));
}

export default async function ReferencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lessons = getAllLessons();
  const lesson = lessons.find((l) => l.slug === slug);

  if (!lesson) notFound();

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-zinc-800 px-6 py-4 flex items-center gap-4">
        <Link
          href={`/lessons/${slug}`}
          className="text-sm text-blue-400 hover:underline"
        >
          &larr; Back to assignment
        </Link>
        <h1 className="text-xl font-bold text-zinc-100">
          {lesson.title} — Reference Solution
        </h1>
      </div>

      <div className="flex-1 p-6">
        <div className="border border-zinc-700 rounded-lg p-6 bg-[#13151a]">
          <ReferencePreview slug={slug} />
        </div>
      </div>
    </div>
  );
}
