import fs from 'fs';
import path from 'path';

export interface LessonMeta {
  title: string;
  order: number;
  slug: string;
  sampleProps?: Record<string, unknown>;
}

const LESSONS_DIR = path.join(process.cwd(), 'lessons');

export function getAllLessons(): LessonMeta[] {
  const dirs = fs.readdirSync(LESSONS_DIR).filter((d) =>
    fs.statSync(path.join(LESSONS_DIR, d)).isDirectory()
  );

  return dirs
    .map((slug) => {
      const metaPath = path.join(LESSONS_DIR, slug, 'meta.json');
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
      return { ...meta, slug };
    })
    .sort((a, b) => a.order - b.order);
}

export function getLessonReadme(slug: string): string {
  const readmePath = path.join(LESSONS_DIR, slug, 'README.md');
  return fs.readFileSync(readmePath, 'utf-8');
}
