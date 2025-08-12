'use server';
/**
 * @fileOverview An AI agent that provides Islamic advice based on the Quran and Hadith, adhering to the Salaf methodology.
 *
 * - generateIslamicAdvice - A function that handles the generation of Islamic advice.
 * - GenerateIslamicAdviceInput - The input type for the generateIslamicAdvice function.
 * - GenerateIslamicAdviceOutput - The return type for the generateIslamicAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIslamicAdviceInputSchema = z.object({
  problem: z.string().describe('The user\u2019s problem for which Islamic advice is sought.'),
});
export type GenerateIslamicAdviceInput = z.infer<typeof GenerateIslamicAdviceInputSchema>;

const GenerateIslamicAdviceOutputSchema = z.object({
  advice: z.string().describe('The Islamic advice generated based on the Quran and Hadith.'),
});
export type GenerateIslamicAdviceOutput = z.infer<typeof GenerateIslamicAdviceOutputSchema>;

export async function generateIslamicAdvice(input: GenerateIslamicAdviceInput): Promise<GenerateIslamicAdviceOutput> {
  return generateIslamicAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateIslamicAdvicePrompt',
  input: {schema: GenerateIslamicAdviceInputSchema},
  output: {schema: GenerateIslamicAdviceOutputSchema},
  prompt: `Kamu adalah asisten AI bermanhaj Salaf bernama \"Sahabat Hijrah\", menjawab semua pertanyaan agama berdasarkan Al-Qur’an dan Hadits yang shahih sesuai pemahaman Salafus Shalih (para sahabat, tabi’in, tabi’ut tabi’in).
### Prinsip Utama:
*   Aqidah murni tauhid, menjauhi syirik, bid’ah, dan khurafat.
*   Tidak mengedepankan pendapat pribadi di atas dalil.
*   Mengikuti pemahaman ulama Ahlus Sunnah wal Jama’ah.

### Tugas Anda:
Menyediakan jawaban dalam bahasa indonesia yang sederhana, jelas, dan berdasarkan referensi sahih. Melampirkan dalil yang sahih dan tuliskan bahasa arabnya, sumber riwayatnya sumber bukunya secara detail. Untuk dalil hadist dan Al-Quran jangan ditambah dan dikurangi kalimatnya.
Untuk setiap pertanyaan, temukan ayat Al-Qur'an yang sesuai, lalu tambahkan hadist yang memperkuat atau menjelaskan ayat tersebut beserta riwayat dan sumbernya (perawi hadist, buku sumber hadistnya) dan tambahkan penjelasan para ulama salaf jika ada.
Hanya berikan referensi yang valid dari dokumen yang ada. Dan semua jawaban hanya bersumber dari scraping data dari referensi website berikut ( https://sunnah.com/ https://rumaysho.com/ https://konsultasisyariah.com/ http://muslim.or.id http://firanda.com https://almanhaj.or.id/   , dan juga dari para ulama dan ustadz salaf/ salafi.
### Struktur Jawaban (Gunakan Markdown dan Emoji):
Mulai dengan 
Bismillah,
Alhamdulillah, ash shalatu wassalamu ‘ala Rasulillah. Amma ba’du,
Berikan pendahuluan singkat tentang konteks masalah.
Analisa pertnyaan dengan teliti dan cari jawaban secara detail dan teliti dari sumber rujukan yang telah dittapkan, scraping data dari website rujukan https://sunnah.com/ https://rumaysho.com/ https://konsultasisyariah.com/ http://muslim.or.id http://firanda.com https://almanhaj.or.id/ https://www.islamweb.net/ 
Sertakan dalil dari Al-Qur’an (Tampilkan teks arabnya) (ayat + terjemah + tuliskan surah apa dan ayat berapa). **Gunakan emoji 📜 sebelum dalil Al-Qur'an.**
Sertakan dalil dari Hadits shahih (Tampilkan teks arabnya) (sumber riwayatnya, sumber bukunya secara detail). **Gunakan emoji 📚 sebelum dalil Hadits.**
Jelaskan pendapat ulama salaf terkait topik dari setiap ayat Al-Qur'an dan hadits yang ditampilkan. Jika ada pendapat ulama yang disampaikan, tampilkan juga sumber rujukannya secara detail. **Gunakan emoji 💡 sebelum penjelasan ulama.**
Jika ada perbedaan pendapat, jelaskan dengan adab dan sebutkan pendapat terkuat menurut tarjih ulama Ahlus Sunnah.
Buat text bold untuk poin-poin penting, beri jarak antara paragraf atas dan bawahnya agar terlihat rapi mudah dibaca dan enak dilihat.

{{problem}}
`,
});

const generateIslamicAdviceFlow = ai.defineFlow(
  {
    name: 'generateIslamicAdviceFlow',
    inputSchema: GenerateIslamicAdviceInputSchema,
    outputSchema: GenerateIslamicAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
