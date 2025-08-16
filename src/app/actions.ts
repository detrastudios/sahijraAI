'use server';

import { askSahabatHijrah } from '@/ai/flows/ask-sahabat-hijrah';

export async function askAI(question: string): Promise<string> {
  if (!question) {
    return 'Maaf, pertanyaan tidak boleh kosong.';
  }

  try {
    const result = await askSahabatHijrah({ question });
    return result.answer;
  } catch (error) {
    console.error('Error calling AI:', error);
    return 'Maaf, terjadi kesalahan saat memproses permintaan Sahabat. Silakan coba lagi nanti.';
  }
}
