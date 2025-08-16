'use client';

import Link from 'next/link';
import { ArrowLeft, Heart, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

export default function SupportPage() {
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
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="flex items-center gap-3 border-b bg-card px-4 py-3 shadow-sm md:px-6">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Kembali</span>
          </Link>
        </Button>
        <h1 className="font-headline text-xl font-semibold text-foreground">
          Dukung Dakwah
        </h1>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-2xl">
           <Card>
            <CardHeader className="text-center">
              <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
              <CardTitle>Dukung Dakwah Kami</CardTitle>
              <CardDescription>
                Kontribusi Anda membantu kami untuk terus menyebarkan ilmu yang bermanfaat.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
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
                    <p className="font-semibold">Mari berjuang bersama dalam dakwah untuk menyebarkan ilmu yang bermanfaat. Dukungan Anda sangat berarti.</p>
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

                 <p className="text-xs text-muted-foreground pt-4">Jazakumullahu khairan atas dukungan Anda!</p>

            </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
}
