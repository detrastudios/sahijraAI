import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SupportPage() {
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
            <CardContent className="space-y-4 text-center">
                <p>
                  “Perumpamaan (nafkah yang dikeluarkan oleh) orang-orang yang menafkahkan hartanya di jalan Allah adalah serupa dengan sebutir benih yang menumbuhkan tujuh bulir, pada tiap-tiap bulir seratus biji. Allah melipat gandakan (ganjaran) bagi siapa yang Dia kehendaki. Dan Allah Maha Luas (karunia-Nya) lagi Maha Mengetahui.” (QS. Al-Baqarah: 261)
                </p>
                <p className="font-semibold">Jazakumullahu khairan atas dukungan Anda!</p>
                 <Button asChild size="lg">
                   <Link href="https://www.instagram.com/sahijra" target="_blank" rel="noopener noreferrer">
                    Donasi Sekarang
                   </Link>
                 </Button>
            </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
}
