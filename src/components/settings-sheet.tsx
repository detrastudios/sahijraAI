'use client';

import type { FC } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Laptop } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface SettingsSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsSheet: FC<SettingsSheetProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();

  const handleFontSizeChange = (value: number[]) => {
    document.documentElement.style.setProperty('--font-size-multiplier', value[0].toString());
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Appearance</SheetTitle>
          <SheetDescription>
            Customize the look and feel of the application.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <Label>Theme</Label>
            <div className="flex gap-2">
              <Button
                variant={theme === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('light')}
              >
                <Sun className="mr-2 h-4 w-4" /> Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setTheme('dark')}
              >
                <Moon className="mr-2 h-4 w-4" /> Dark
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Font Size</Label>
            <Slider
              defaultValue={[1]}
              min={0.8}
              max={1.2}
              step={0.1}
              onValueChange={handleFontSizeChange}
            />
             <div className="flex justify-between text-xs text-muted-foreground">
              <span>Small</span>
              <span>Default</span>
              <span>Large</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
