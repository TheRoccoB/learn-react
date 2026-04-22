'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function AssignmentBrief({ content }: { content: string }) {
  return (
    <div className="prose prose-sm prose-invert max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-strong:text-zinc-200 prose-code:bg-zinc-800 prose-code:text-zinc-200 prose-code:px-1 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:text-zinc-200 prose-pre:border prose-pre:border-zinc-700 prose-a:text-blue-400 prose-td:text-zinc-300 prose-th:text-zinc-200">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
