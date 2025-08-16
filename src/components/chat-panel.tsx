'use client';

import type { FC } from 'react';
import { useState, useRef, useEffect, useTransition } from 'react';
import { Send, Settings } from 'lucide-react';
import Link from 'next/link';

import { askAI } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage, type Message } from '@/components/chat-message';
import { LogoIcon } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';
import { DisclaimerModal } from '@/components/disclaimer-modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SettingsSheet } from '@/components/settings-sheet';

export const ChatPanel: FC = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content:
        'Assalamu\'alaikum, saya Sahabat Hijrah. Silakan ajukan pertanyaan Anda tentang agama Islam. InsyaAllah saya akan bantu menjawab berdasarkan Al-Qur\'an dan Sunnah.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(true);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const scrollAreaViewport = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      const response = await askAI(userMessage.content);
      if (
        response ===
        'Maaf, terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.'
      ) {
        toast({
          title: 'Error',
          description: response,
          variant: 'destructive',
        });
      }
      const aiMessage: Message = { role: 'ai', content: response };
      setMessages((prev) => [...prev, aiMessage]);
    });
  };

  useEffect(() => {
    if (scrollAreaViewport.current) {
      scrollAreaViewport.current.scrollTop =
        scrollAreaViewport.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
      />
      <SettingsSheet
        isOpen={isSettingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
      <div className="flex h-screen w-full flex-col bg-background">
        <header className="flex items-center gap-3 border-b bg-card px-4 py-3 shadow-sm md:px-6">
          <LogoIcon className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-xl font-semibold text-foreground">
            Sahabat Hijrah AI
          </h1>
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => setSettingsOpen(true)}>
                  Appearance
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link href="/help">Help</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about">About Sahijra</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/support">Support Dakwah</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 overflow-hidden">
          <ScrollArea className="h-full" viewportRef={scrollAreaViewport}>
            <div className="px-4 py-6 md:px-6">
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <ChatMessage key={index} message={message} />
                ))}
                {isPending && (
                  <ChatMessage
                    message={{ role: 'ai', content: '' }}
                    isLoading
                  />
                )}
              </div>
            </div>
          </ScrollArea>
        </main>
        <footer className="border-t bg-card px-4 py-3 md:px-6">
          <form
            onSubmit={handleSendMessage}
            className="flex w-full items-center gap-3"
          >
            <Input
              type="text"
              placeholder="Ketik pertanyaan Anda di sini..."
              value={input}
              onChange={handleInputChange}
              disabled={isPending}
              className="flex-1"
              autoComplete="off"
            />
            <Button
              type="submit"
              disabled={isPending || !input.trim()}
              size="icon"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Kirim</span>
            </Button>
          </form>
        </footer>
      </div>
    </>
  );
};
