'use client';

import dynamic from 'next/dynamic';

export function ReferencePreview({ slug }: { slug: string }) {
  const Reference = dynamic(
    () => import(`../../../lessons/${slug}/reference`),
    {
      loading: () => (
        <p className="text-gray-400 italic">Loading reference...</p>
      ),
      ssr: false,
    }
  );

  return <Reference />;
}
