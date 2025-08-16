'use client';

import type { FC } from 'react';
import { FilePlus, MessageSquare, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { ChatHistory } from '@/components/chat-panel';

interface HistorySheetProps {
  isOpen: boolean;
  onClose: () => void;
  history: ChatHistory[];
  onLoadChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  onNewChat: () => void;
}

export const HistorySheet: FC<HistorySheetProps> = ({
  isOpen,
  onClose,
  history,
  onLoadChat,
  onDeleteChat,
  onNewChat,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Riwayat Percakapan</SheetTitle>
          <SheetDescription>
            Pilih percakapan untuk melanjutkan atau hapus riwayat.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 h-[calc(100%-120px)] flex flex-col">
          <Button onClick={onNewChat} className="mb-4">
            <FilePlus className="mr-2 h-4 w-4" />
            Mulai Percakapan Baru
          </Button>
          <ScrollArea className="flex-1">
            <div className="space-y-2">
              {history.length > 0 ? (
                history.map((chat) => (
                  <div
                    key={chat.id}
                    className="group flex items-center justify-between rounded-md p-2 hover:bg-muted"
                  >
                    <button
                      onClick={() => onLoadChat(chat.id)}
                      className="flex items-center text-left flex-1 truncate"
                    >
                      <MessageSquare className="mr-3 h-4 w-4 flex-shrink-0" />
                      <span className="truncate text-sm">{chat.title}</span>
                    </button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 opacity-0 group-hover:opacity-100"
                      onClick={() => onDeleteChat(chat.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              ) : (
                <div className="text-center text-sm text-muted-foreground py-10">
                  Belum ada riwayat percakapan.
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};
