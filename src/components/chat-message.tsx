'use client';

import type { FC } from 'react';
import { User, Copy } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Markdown } from '@/components/markdown';
import { LogoIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export type Message = {
  role: 'user' | 'ai';
  content: string;
};

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
}

export const ChatMessage: FC<ChatMessageProps> = ({ message, isLoading = false }) => {
  const { toast } = useToast();
  const isAi = message.role === 'ai';
  const { resolvedTheme } = useTheme();

  const onCopy = () => {
    if (message.content) {
      navigator.clipboard.writeText(message.content).then(() => {
        toast({
          title: 'Berhasil disalin',
          description: 'Jawaban AI telah disalin ke clipboard.',
        });
      });
    }
  };

  return (
    <div
      className={cn(
        'group flex items-start gap-4',
        !isAi && 'flex-row-reverse'
      )}
    >
      <Avatar className="h-9 w-9 border shadow-sm">
        {isAi ? (
          <AvatarFallback className="bg-primary/10 dark:bg-primary/10">
            <LogoIcon className={cn("h-5 w-5", resolvedTheme === 'light' ? 'text-black' : 'text-primary')} />
          </AvatarFallback>
        ) : (
          <AvatarFallback className="bg-secondary">
            <User className="h-5 w-5 text-secondary-foreground" />
          </AvatarFallback>
        )}
      </Avatar>
      <div
        className={cn(
          'relative max-w-xl rounded-lg p-4 shadow-sm',
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
          <>
            <Markdown content={message.content} />
            {isAi && !isLoading && (
              <Button
                onClick={onCopy}
                size="icon"
                variant="ghost"
                className="absolute -right-12 top-0 h-8 w-8 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy message</span>
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
