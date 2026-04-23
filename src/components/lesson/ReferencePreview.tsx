'use client';

import dynamic from 'next/dynamic';

interface Props {
  slug: string;
  sampleProps?: Record<string, unknown>;
}

export function ReferencePreview({ slug, sampleProps = {} }: Props) {
  const Reference = dynamic(
    () => import(`../../../lessons/${slug}/reference`),
    {
      loading: () => (
        <p className="text-zinc-500 italic">Loading reference...</p>
      ),
      ssr: false,
    }
  );

  return <Reference {...sampleProps} />;
}
