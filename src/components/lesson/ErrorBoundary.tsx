'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-950/50 border border-red-800 rounded-lg">
          <p className="text-red-400 font-medium">Your component threw an error:</p>
          <pre className="mt-2 text-sm text-red-300 whitespace-pre-wrap">
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-3 px-3 py-1 text-sm bg-red-900 text-red-200 rounded hover:bg-red-800"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
