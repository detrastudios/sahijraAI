'use client';

import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
}

export const Markdown: FC<MarkdownProps> = ({ content }) => {
  return (
    <ReactMarkdown
      className="markdown-content"
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => (
          <a {...props} target="_blank" rel="noopener noreferrer" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
