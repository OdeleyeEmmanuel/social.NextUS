'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing content recommendations based on content popularity.
 *
 * - recommendContent - A function that uses AI to recommend content to users based on content popularity.
 * - RecommendContentInput - The input type for the recommendContent function.
 * - RecommendContentOutput - The return type for the recommendContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendContentInputSchema = z.object({
  contentHistory: z.array(
    z.object({
      contentId: z.string().describe('The unique identifier of the content.'),
      interactions: z.number().describe('The number of interactions the content has received (e.g., likes, comments, views).'),
    })
  ).describe('A list of content with its interaction count on the platform.'),
  userPreferences: z.string().optional().describe('Optional preferences of the user, e.g. genres, topics, or keywords.'),
  numberOfRecommendations: z.number().default(5).describe('The number of content recommendations to generate.'),
});

export type RecommendContentInput = z.infer<typeof RecommendContentInputSchema>;

const RecommendContentOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      contentId: z.string().describe('The unique identifier of the recommended content.'),
      reason: z.string().describe('The reason why this content is being recommended.'),
    })
  ).describe('A list of recommended content IDs with reasons.'),
});

export type RecommendContentOutput = z.infer<typeof RecommendContentOutputSchema>;

export async function recommendContent(input: RecommendContentInput): Promise<RecommendContentOutput> {
  return recommendContentFlow(input);
}

const recommendContentPrompt = ai.definePrompt({
  name: 'recommendContentPrompt',
  input: {schema: RecommendContentInputSchema},
  output: {schema: RecommendContentOutputSchema},
  prompt: `You are a content recommendation expert. Given the following content history and user preferences, recommend content to the user.

Content History:
{{#each contentHistory}}
- Content ID: {{this.contentId}}, Interactions: {{this.interactions}}
{{/each}}

User Preferences: {{userPreferences}}

Please provide {{numberOfRecommendations}} content recommendations with a brief explanation for each recommendation.
`,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: RecommendContentInputSchema,
    outputSchema: RecommendContentOutputSchema,
  },
  async input => {
    const {output} = await recommendContentPrompt(input);
    return output!;
  }
);
