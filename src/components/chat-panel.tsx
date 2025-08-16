'use client';

import type { FC } from 'react';
import { useState, useRef, useEffect, useTransition } from 'react';
import { Send, Settings, MessageSquarePlus, History } from 'lucide-react';
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
import { HistorySheet } from '@/components/history-sheet';

const initialMessages: Message[] = [
  {
    role: 'ai',
    content:
      "Assalamu'alaikum, Sahabat! Silakan ajukan pertanyaan seputar agama Islam. InsyaAllah saya akan bantu menjawab berdasarkan Al-Qur'an dan Sunnah. Barkallahu fiikum",
  },
];

export type ChatHistory = {
  id: string;
  title: string;
  messages: Message[];
};

export const ChatPanel: FC = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const [isDisclaimerOpen, setDisclaimerOpen] = useState(true);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isHistoryOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<ChatHistory[]>([]);
  const scrollAreaViewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedHistory = localStorage.getItem('chatHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const saveHistory = (newHistory: ChatHistory[]) => {
    setHistory(newHistory);
    localStorage.setItem('chatHistory', JSON.stringify(newHistory));
  };

  const handleNewChat = () => {
    if (messages.length > 1) {
      const newChat: ChatHistory = {
        id: new Date().toISOString(),
        title: messages[1]?.content.substring(0, 30) + '...' || 'New Chat',
        messages: messages,
      };
      saveHistory([newChat, ...history]);
    }
    setMessages(initialMessages);
  };
  
  const loadChat = (chatId: string) => {
    const chat = history.find(c => c.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setHistoryOpen(false);
    }
  };

  const deleteChat = (chatId: string) => {
    const updatedHistory = history.filter(c => c.id !== chatId);
    saveHistory(updatedHistory);
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
      <HistorySheet
        isOpen={isHistoryOpen}
        onClose={() => setHistoryOpen(false)}
        history={history}
        onLoadChat={loadChat}
        onDeleteChat={deleteChat}
        onNewChat={handleNewChat}
      />
      <div className="flex h-screen w-full flex-col bg-background">
        <header className="flex items-center gap-3 border-b bg-card px-4 py-3 shadow-sm md:px-6">
          <LogoIcon className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-xl font-semibold text-foreground">
            Sahabat Hijrah AI
          </h1>
          <div className="ml-auto flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={handleNewChat}>
              <MessageSquarePlus className="h-5 w-5" />
              <span className="sr-only">Chat Baru</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setHistoryOpen(true)}>
              <History className="h-5 w-5" />
              <span className="sr-only">Riwayat</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => setSettingsOpen(true)}>
                  Tampilan
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link href="/help">Pusat Bantuan</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about">Tentang Sahijra</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/support">Dukung Dakwah</Link>
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
              placeholder="Ketik pertanyaan Sahabat di sini..."
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
