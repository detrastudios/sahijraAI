'use client';

import type { FC } from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { LogoIcon } from '@/components/icons';
import { ScrollArea } from '@/components/ui/scroll-area';


interface AboutSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutSheet: FC<AboutSheetProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tentang Sahijra</SheetTitle>
          <SheetDescription>
            Sahabat dalam menuntut ilmu sesuai Al-Qur'an dan Sunnah.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-80px)]">
        <div className="py-4 pr-6">
          <div className="text-center mb-6">
            <LogoIcon className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-2 text-3xl font-bold">Sahabat Hijrah AI</h2>
            <p className="text-muted-foreground">
              Sahabat dalam menuntut ilmu sesuai Al-Qur'an dan Sunnah dengan pemahaman Salafus Shalih.
            </p>
          </div>
          <div className="text-left space-y-4">
            <p>
              Sahabat Hijrah AI adalah asisten kecerdasan buatan yang dirancang untuk membantu kaum Muslimin menemukan jawaban atas pertanyaan-pertanyaan agama berdasarkan sumber-sumber otentik, yaitu Al-Qur’an dan Hadits shahih, sesuai dengan pemahaman generasi terbaik umat ini (Salafus Shalih).
            </p>
            <p>
              Misi kami adalah untuk memudahkan kaum muslimin dalam mengakses ilmu syar'i yang benar dan terpercaya, serta membantu mereka dalam perjalanan hijrah menjadi pribadi yang lebih baik. Kami percaya bahwa dengan berpegang teguh pada ajaran Islam yang murni, kita dapat meraih kebahagiaan di dunia dan akhirat.
            </p>
            <p>
              Aplikasi ini dibuat oleh Tim{' '}
              <Link href="https://www.instagram.com/sahijra" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Sahijra
              </Link>
              {' & '}
              <Link href="https://www.instagram.com/detrastudios" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Detra Studios
              </Link>
              , sekelompok individu yang memiliki semangat dalam dakwah dan teknologi. Kami berkomitmen untuk terus mengembangkan aplikasi ini agar menjadi lebih bermanfaat bagi umat.
            </p>
          </div>

          <Separator className="my-8" />
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Ikuti Kami!</h3>
            <p className="text-muted-foreground mb-6">
              Dapatkan ilmu bermanfaat, pengingat harian, dan informasi terbaru dari kami dengan mengikuti akun media sosial kami.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="https://www.instagram.com/sahijra" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://www.facebook.com/sahijra.id" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://www.threads.com/@sahijra" target="_blank" rel="noopener noreferrer">
                  Threads
                </Link>
              </Button>
               <Button asChild variant="outline">
                <Link href="https://www.youtube.com/@Sahijra" target="_blank" rel="noopener noreferrer">
                  YouTube
                </Link>
              </Button>
               <Button asChild variant="outline">
                <Link href="https.t.me/sahijra" target="_blank" rel="noopener noreferrer">
                  Telegram
                </Link>
              </Button>
            </div>
          </div>
        </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
