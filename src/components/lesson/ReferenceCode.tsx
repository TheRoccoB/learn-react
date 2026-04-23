'use client';

import { useState } from 'react';

interface Props {
  source: string;
  highlightedHtml: string;
}

export function ReferenceCode({ source, highlightedHtml }: Props) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="relative [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-zinc-700 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:overflow-x-auto">
      <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
      <button
        onClick={() => {
          navigator.clipboard.writeText(source);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="absolute top-2 right-2 p-1.5 rounded bg-zinc-700/50 text-zinc-400 hover:bg-zinc-600 hover:text-zinc-200 transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}
