'use client';

import { useState, type FC } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Image as ImageIcon, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useLogo } from '@/hooks/use-logo';
import { Separator } from '@/components/ui/separator';

interface SettingsSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsSheet: FC<SettingsSheetProps> = ({ isOpen, onClose }) => {
  const [showLogoSettings, setShowLogoSettings] = useState(false);
  const { theme, setTheme } = useTheme();
  const { setLogo, resetLogo } = useLogo();

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const svgContent = e.target?.result as string;
        if (svgContent) {
          setLogo(svgContent);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tampilan</SheetTitle>
          <SheetDescription
            onClick={() => setShowLogoSettings((prev) => !prev)}
            className="cursor-pointer hover:underline"
          >
            Sesuaikan tampilan dan nuansa aplikasi.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <Label>Tema</Label>
            <div className="flex gap-2">
              <Button
                variant={theme === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('light')}
              >
                <Sun className="mr-2 h-4 w-4" /> Terang
              </Button>
              <Button
                variant={theme === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('dark')}
              >
                <Moon className="mr-2 h-4 w-4" /> Gelap
              </Button>
            </div>
          </div>
          
          {showLogoSettings && (
            <>
              <Separator />
              <div className="space-y-2">
                <Label>Logo Aplikasi (Khusus)</Label>
                <div className='text-xs text-muted-foreground pb-2'>Ganti logo aplikasi dengan mengunggah file SVG.</div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <label htmlFor="logo-upload" className="cursor-pointer">
                      <ImageIcon className="mr-2 h-4 w-4" /> Ganti Logo
                    </label>
                  </Button>
                  <input
                    type="file"
                    id="logo-upload"
                    accept=".svg"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                   <Button
                    variant="outline"
                    size="sm"
                    onClick={resetLogo}
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Reset
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
