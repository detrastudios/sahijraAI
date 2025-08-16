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
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="font-headline text-xl font-semibold text-foreground">
          Help
        </h1>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
              <CardTitle>Help Center</CardTitle>
              <CardDescription>
                Find answers to frequently asked questions here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How to use Sahabat Hijrah AI?</AccordionTrigger>
                  <AccordionContent>
                    Just type your question in the input field at the bottom of the screen and press the "Send" button or hit Enter. The AI will provide an answer based on the Qur'an and Sunnah.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Are the AI's answers always correct?</AccordionTrigger>
                  <AccordionContent>
                    This AI is a tool and is not free from errors. Although it is designed to provide answers based on authentic sources, it is important to always verify information with trusted ustadz or religious scholars.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How to change the theme or font size?</AccordionTrigger>
                  <AccordionContent>
                    You can customize the application's appearance by clicking the Settings icon (gear) in the top right corner, then select "Appearance". You will find options to change the theme (dark/light) and adjust the font size.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                  <AccordionTrigger>How can I copy the AI's answer?</AccordionTrigger>
                  <AccordionContent>
                    Hover your mouse over the AI's response message, and a "Copy" icon will appear. Click the icon to copy the answer text to your clipboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How to contact Sahijra?</AccordionTrigger>
                  <AccordionContent>
                    If you have questions, suggestions, or feedback, feel free to contact us via email or social media below:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Email: <a href="mailto:sahijra.official@gmail.com" className="text-primary hover:underline">sahijra.official@gmail.com</a></li>
                      <li>Instagram: <Link href="https://www.instagram.com/sahijra" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@sahijra</Link></li>
                    </ul>
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
