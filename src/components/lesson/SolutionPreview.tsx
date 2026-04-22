'use client';

import dynamic from 'next/dynamic';
import { ErrorBoundary } from './ErrorBoundary';

export function SolutionPreview({ slug }: { slug: string }) {
  const Solution = dynamic(
    () => import(`../../../lessons/${slug}/solution`),
    {
      loading: () => (
        <p className="text-gray-400 italic">Loading your solution...</p>
      ),
      ssr: false,
    }
  );

  return (
    <ErrorBoundary
      fallback={
        <p className="text-red-500">
          Your component threw an error. Check the console.
        </p>
      }
    >
      <Solution />
    </ErrorBoundary>
  );
}
