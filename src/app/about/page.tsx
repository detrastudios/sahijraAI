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
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="font-headline text-xl font-semibold text-foreground">
          About Sahijra
        </h1>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-2xl text-center">
          <LogoIcon className="mx-auto mb-4 h-16 w-16 text-primary" />
          <h2 className="mb-2 text-3xl font-bold">Sahabat Hijrah AI</h2>
          <p className="mb-6 text-muted-foreground">
            Your companion in seeking knowledge according to the Qur'an and Sunnah with the understanding of the Salafus Shalih.
          </p>
          <div className="text-left space-y-4">
            <p>
              Sahabat Hijrah AI is an artificial intelligence assistant designed to help Muslims find answers to religious questions based on authentic sources, namely the Al-Qur’an and the authentic Hadith, in accordance with the understanding of the best generations of this ummah (Salafus Shalih).
            </p>
            <p>
              Our mission is to make it easier for Muslims to access correct and reliable Islamic knowledge, and to help them in their journey of hijrah to become better individuals. We believe that by adhering to the pure teachings of Islam, we can achieve happiness in this world and the hereafter.
            </p>
            <p>
              This application was created by the{' '}
              <Link href="https://www.instagram.com/sahijra" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Sahijra Team
              </Link>
              , a group of individuals passionate about dakwah and technology. We are committed to continuing to develop this application to make it even more useful for the ummah.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
