import Link from 'next/link';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function HelpPage() {
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
          Bantuan
        </h1>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
              <CardTitle>Pusat Bantuan</CardTitle>
              <CardDescription>
                Temukan jawaban untuk pertanyaan umum di sini.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bagaimana cara menggunakan Sahabat Hijrah AI?</AccordionTrigger>
                  <AccordionContent>
                    Cukup ketik pertanyaan Anda di kolom input di bagian bawah layar dan tekan tombol "Kirim" atau tekan Enter. AI akan memberikan jawaban berdasarkan Al-Qur'an dan Sunnah.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Apakah jawaban dari AI selalu benar?</AccordionTrigger>
                  <AccordionContent>
                    AI ini adalah alat bantu dan tidak terlepas dari kesalahan. Meskipun dirancang untuk memberikan jawaban berdasarkan sumber yang otentik, penting untuk selalu memverifikasi informasi dengan para ustadz atau ahli ilmu agama yang terpercaya.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Bagaimana cara mengubah tema atau ukuran font?</AccordionTrigger>
                  <AccordionContent>
                    Anda dapat menyesuaikan tampilan aplikasi dengan mengklik ikon Pengaturan (roda gigi) di pojok kanan atas, lalu pilih "Appearance". Anda akan menemukan opsi untuk mengubah tema (gelap/terang) dan menyesuaikan ukuran font.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                  <AccordionTrigger>Bagaimana saya bisa menyalin jawaban dari AI?</AccordionTrigger>
                  <AccordionContent>
                    Arahkan kursor mouse Anda ke pesan jawaban dari AI, dan ikon "Salin" akan muncul. Klik ikon tersebut untuk menyalin teks jawaban ke clipboard Anda.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
