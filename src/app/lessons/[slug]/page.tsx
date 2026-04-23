import { getAllLessons, getLessonReadme } from '@/lib/lessons';
import { LessonShell } from '@/components/lesson/LessonShell';
import { SolutionPreview } from '@/components/lesson/SolutionPreview';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((l) => ({ slug: l.slug }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lessons = getAllLessons();
  const lesson = lessons.find((l) => l.slug === slug);

  if (!lesson) notFound();

  const readme = getLessonReadme(slug);
  const idx = lessons.indexOf(lesson);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  return (
    <LessonShell
      slug={slug}
      title={lesson.title}
      readme={readme}
      prevLesson={prev}
      nextLesson={next}
    >
      <SolutionPreview slug={slug} sampleProps={lesson.sampleProps} />
    </LessonShell>
  );
}
