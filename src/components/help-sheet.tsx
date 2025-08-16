'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface HelpSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpSheet: FC<HelpSheetProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Pusat Bantuan</SheetTitle>
          <SheetDescription>
            Temukan jawaban untuk pertanyaan yang sering diajukan di sini.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
            <div className="text-center mb-4">
                <HelpCircle className="mx-auto h-12 w-12 text-primary" />
            </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bagaimana cara menggunakan Sahabat Hijrah AI?</AccordionTrigger>
                  <AccordionContent>
                    Cukup ketik pertanyaan Sahabat di kolom input di bagian bawah layar dan tekan tombol "Kirim" atau tekan Enter. AI akan memberikan jawaban berdasarkan Al-Qur'an dan Sunnah.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Apakah jawaban AI selalu benar?</AccordionTrigger>
                  <AccordionContent>
                    AI ini adalah alat bantu dan tidak luput dari kesalahan. Meskipun dirancang untuk memberikan jawaban berdasarkan sumber-sumber otentik, penting untuk selalu memverifikasi informasi dengan ustadz atau ulama yang terpercaya.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Bagaimana cara mengubah tema atau ukuran font?</AccordionTrigger>
                  <AccordionContent>
                    Sahabat dapat menyesuaikan tampilan aplikasi dengan mengklik ikon Pengaturan (roda gigi) di pojok kanan atas, lalu pilih "Tampilan". Sahabat akan menemukan opsi untuk mengubah tema (gelap/terang) dan menyesuaikan ukuran font.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                  <AccordionTrigger>Bagaimana cara menyalin jawaban AI?</AccordionTrigger>
                  <AccordionContent>
                    Arahkan mouse Sahabat ke pesan respons AI, dan ikon "Salin" akan muncul. Klik ikon tersebut untuk menyalin teks jawaban ke clipboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Apakah aplikasi ini berbayar?</AccordionTrigger>
                  <AccordionContent>
                    Tidak. Aplikasi Sahabat Hijrah AI ini 100% GRATIS dan dirancang untuk membantu umat. Dilarang keras untuk memperjualbelikan aplikasi atau akun yang terkait dengan tools ini dalam bentuk apapun. Mari kita manfaatkan untuk kebaikan bersama.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Bagaimana cara menghubungi Sahijra?</AccordionTrigger>
                  <AccordionContent>
                    Jika Sahabat memiliki pertanyaan, saran, atau masukan, jangan ragu untuk menghubungi kami melalui email atau media sosial di bawah ini:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Email: <a href="mailto:sahijra.official@gmail.com" className="text-primary hover:underline">sahijra.official@gmail.com</a></li>
                      <li>Instagram: <Link href="https://www.instagram.com/sahijra" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@sahijra</Link></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};
