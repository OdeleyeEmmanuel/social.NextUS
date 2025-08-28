'use server';

import { recommendContent, type RecommendContentInput, type RecommendContentOutput } from '@/ai/flows/content-recommendation';

export async function getRecommendationsAction(input: RecommendContentInput): Promise<RecommendContentOutput | { error: string }> {
  try {
    const result = await recommendContent(input);
    return result;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    // Return a serializable error object
    return { error: error instanceof Error ? error.message : 'An unknown error occurred.' };
  }
}
