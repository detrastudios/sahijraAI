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
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="font-headline text-xl font-semibold text-foreground">
          Support Dakwah
        </h1>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-2xl">
           <Card>
            <CardHeader className="text-center">
              <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
              <CardTitle>Support Our Dakwah</CardTitle>
              <CardDescription>
                Your contribution helps us continue to spread beneficial knowledge.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
                <p>
                  “The likeness of those who spend their wealth in the way of Allah is as the likeness of a grain (of corn); it grows seven ears, and each ear has a hundred grains. Allah gives manifold increase to whom He wills. And Allah is All-Sufficient for His creatures’ needs, All-Knower.” (QS. Al-Baqarah: 261)
                </p>
                <p className="font-semibold">Jazakumullahu khairan for your support!</p>
                 <Button asChild size="lg">
                   <Link href="https://www.instagram.com/sahijra" target="_blank" rel="noopener noreferrer">
                    Donate Now
                   </Link>
                 </Button>
            </CardContent>
           </Card>
        </div>
      </main>
    </div>
  );
}
