'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { Heart, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SupportSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportSheet: FC<SupportSheetProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const accountNumber = '7283392559';

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      toast({
        title: 'Berhasil disalin',
        description: 'Nomor rekening telah disalin ke clipboard.',
      });
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Dukung Dakwah</SheetTitle>
          <SheetDescription>
            Kontribusi Sahabat membantu kami menyebarkan ilmu bermanfaat.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-80px)]">
        <div className="py-4 pr-6">
            <div className="text-center">
              <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
            </div>
            <div className="space-y-6 text-center">
                <p className="text-muted-foreground">
                  Ada berbagai cara untuk mendukung dakwah kami, mulai dari donasi, sponsorship, paid promote, hingga dengan berbelanja merchandise resmi kami di{' '}
                  <Link href="https://www.instagram.com/sahijraproject" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Sahijra Project
                  </Link>
                  .
                </p>
                <p className="text-muted-foreground">
                  “Perumpamaan (nafkah yang dikeluarkan oleh) orang-orang yang menafkahkan hartanya di jalan Allah adalah serupa dengan sebutir benih yang menumbuhkan tujuh bulir, pada tiap-tiap bulir seratus biji. Allah melipat gandakan (ganjaran) bagi siapa yang Dia kehendaki. Dan Allah Maha Luas (karunia-Nya) lagi Maha Mengetahui.” (QS. Al-Baqarah: 261)
                </p>
                
                <Separator />

                <div className="space-y-4">
                    <p className="font-semibold">Mari berjuang bersama dalam dakwah untuk menyebarkan ilmu yang bermanfaat. Dukungan Sahabat sangat berarti.</p>
                    <div>
                        <p className="font-bold text-lg">Bank Syariah Indonesia (BSI)</p>
                        <div className="flex items-center justify-center gap-2">
                          <p className="text-2xl font-mono tracking-wider">{accountNumber}</p>
                          <Button variant="ghost" size="icon" onClick={handleCopy} className="h-8 w-8">
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Salin nomor rekening</span>
                          </Button>
                        </div>
                        <p className="text-muted-foreground">(an. Denny Saputra)</p>
                    </div>
                </div>

                 <Button asChild size="lg" className="w-full">
                   <Link href="https://wa.me/6287722675364" target="_blank" rel="noopener noreferrer">
                    Konfirmasi Donasi
                   </Link>
                 </Button>

                 <p className="text-xs text-muted-foreground pt-4">Jazakumullahu khairan atas dukungan Sahabat!</p>
            </div>
        </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
