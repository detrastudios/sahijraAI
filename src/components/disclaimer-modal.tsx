'use client';

import type { FC } from 'react';
import Link from 'next/link';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: FC<DisclaimerModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg font-bold">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-muted-foreground">
            Segala kebenaran mutlak hanyalah milik Allah ﷻ. Asisten AI bermanhaj
            salaf ini hanyalah alat bantu yang berupaya memberikan jawaban
            berdasarkan Al-Qur’an dan hadits shahih sesuai pemahaman Salaf.
            Namun, AI tidaklah ma’shum (terjaga dari kesalahan) dan tidak 100%
            valid. Gunakanlah dengan bijak, jauhi perdebatan, selalu kroscek dan
            konsultasikan dengan Ustadz yang berilmu agar mendapatkan pemahaman
            yang mantap, terhindar dari kekeliruan dan tidak tergelincir dalam
            kesesatan.
            <br />
            <br />
            <i className="font-semibold text-foreground">
              "Maka bertanyalah kepada orang yang berilmu jika kamu tidak
              mengetahui"
            </i>
            <span className="block">(QS. An-Nahl: 43)</span>
            <br />
            Barakallahu fiikum
            <br />
            <br />
            Created by Sahijra Team{' '}
            <Link
              href="https://www.instagram.com/sahijra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @sahijra
            </Link>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose} className="w-full">
            Saya Mengerti
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
