'use client';

import dynamic from 'next/dynamic';
import { ErrorBoundary } from './ErrorBoundary';

interface Props {
  slug: string;
  sampleProps?: Record<string, unknown>;
}

export function SolutionPreview({ slug, sampleProps = {} }: Props) {
  const Solution = dynamic(
    () => import(`../../../lessons/${slug}/solution`),
    {
      loading: () => (
        <p className="text-zinc-500 italic">Loading your solution...</p>
      ),
      ssr: false,
    }
  );

  return (
    <ErrorBoundary
      fallback={
        <p className="text-red-400">
          Your component threw an error. Check the console.
        </p>
      }
    >
      <Solution {...sampleProps} />
    </ErrorBoundary>
  );
}
