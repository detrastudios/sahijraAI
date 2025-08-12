'use client';

import type { FC } from 'react';
import { User } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Markdown } from '@/components/markdown';
import { LogoIcon } from '@/components/icons';

export type Message = {
  role: 'user' | 'ai';
  content: string;
};

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
}

export const ChatMessage: FC<ChatMessageProps> = ({ message, isLoading = false }) => {
  const isAi = message.role === 'ai';

  return (
    <div
      className={cn(
        'flex items-start gap-4',
        !isAi && 'flex-row-reverse'
      )}
    >
      <Avatar className="h-9 w-9 border shadow-sm">
        {isAi ? (
          <AvatarFallback className="bg-primary/10 text-primary">
            <LogoIcon className="h-5 w-5" />
          </AvatarFallback>
        ) : (
          <AvatarFallback className="bg-secondary">
            <User className="h-5 w-5 text-secondary-foreground" />
          </AvatarFallback>
        )}
      </Avatar>
      <div
        className={cn(
          'max-w-xl rounded-lg p-4 shadow-sm',
          isAi
            ? 'rounded-tl-none bg-card'
            : 'rounded-tr-none bg-primary text-primary-foreground'
        )}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground delay-0"></span>
            <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground delay-150"></span>
            <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground delay-300"></span>
          </div>
        ) : (
          <Markdown content={message.content} />
        )}
      </div>
    </div>
  );
};
