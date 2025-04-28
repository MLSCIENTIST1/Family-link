'use server';

/**
 * @fileOverview An AI agent that assesses whether information should be included in chat summaries.
 *
 * - assessInformationInclusion - A function that assesses whether information should be included in chat summaries.
 * - AssessInformationInclusionInput - The input type for the assessInformationInclusion function.
 * - AssessInformationInclusionOutput - The return type for the assessInformationInclusion function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AssessInformationInclusionInputSchema = z.object({
  information: z.string().describe('The information to assess for inclusion in a chat summary.'),
  chatContext: z.string().describe('The context of the chat discussion.'),
});
export type AssessInformationInclusionInput = z.infer<typeof AssessInformationInclusionInputSchema>;

const AssessInformationInclusionOutputSchema = z.object({
  shouldInclude: z
    .boolean()
    .describe(
      'Whether the information should be included in the chat summary based on its importance and relevance.'
    ),
  reason: z
    .string()
    .describe('The reason for the decision on whether to include the information in the summary.'),
});
export type AssessInformationInclusionOutput = z.infer<typeof AssessInformationInclusionOutputSchema>;

export async function assessInformationInclusion(
  input: AssessInformationInclusionInput
): Promise<AssessInformationInclusionOutput> {
  return assessInformationInclusionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessInformationInclusionPrompt',
  input: {
    schema: z.object({
      information: z.string().describe('The information to assess.'),
      chatContext: z.string().describe('The context of the chat discussion.'),
    }),
  },
  output: {
    schema: z.object({
      shouldInclude: z
        .boolean()
        .describe(
          'Whether the information should be included in the chat summary based on its importance and relevance.'
        ),
      reason: z
        .string()
        .describe('The reason for the decision on whether to include the information in the summary.'),
    }),
  },
  prompt: `You are an AI assistant tasked with assessing whether a given piece of information should be included in a chat summary.

  Consider the following information and chat context:

  Information: {{{information}}}
  Chat Context: {{{chatContext}}}

  Determine whether the information is important and relevant enough to be included in the summary. Provide a clear reason for your decision.
  `,
});

const assessInformationInclusionFlow = ai.defineFlow<
  typeof AssessInformationInclusionInputSchema,
  typeof AssessInformationInclusionOutputSchema
>({
  name: 'assessInformationInclusionFlow',
  inputSchema: AssessInformationInclusionInputSchema,
  outputSchema: AssessInformationInclusionOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
