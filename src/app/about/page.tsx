import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoIcon } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
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
          Tentang Sahijra
        </h1>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <LogoIcon className="mx-auto mb-4 h-16 w-16 text-primary" />
            <h2 className="mb-2 text-3xl font-bold">Sahabat Hijrah AI</h2>
            <p className="mb-6 text-muted-foreground">
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
                <Link href="https://t.me/sahijra" target="_blank" rel="noopener noreferrer">
                  Telegram
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
