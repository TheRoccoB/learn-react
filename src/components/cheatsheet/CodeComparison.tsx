'use client';

interface Props {
  vue: string;
  react: string;
}

export function CodeComparison({ vue, react }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-2 px-1">
          Vue 3
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm overflow-x-auto leading-relaxed">
          <code>{vue.trim()}</code>
        </pre>
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2 px-1">
          React
        </div>
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm overflow-x-auto leading-relaxed">
          <code>{react.trim()}</code>
        </pre>
      </div>
    </div>
  );
}
