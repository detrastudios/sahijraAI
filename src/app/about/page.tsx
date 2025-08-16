import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoIcon } from '@/components/icons';

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
        <div className="mx-auto max-w-2xl text-center">
          <LogoIcon className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="mb-2 text-3xl font-bold">Sahabat Hijrah AI</h2>
          <p className="mb-6 text-muted-foreground">
            Sahabat Anda dalam menuntut ilmu sesuai Al-Qur'an dan Sunnah dengan pemahaman Salafus Shalih.
          </p>
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
        </div>
      </main>
    </div>
  );
}
