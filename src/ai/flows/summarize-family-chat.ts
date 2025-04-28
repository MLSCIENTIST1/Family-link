'use server';
/**
 * @fileOverview Summarizes key discussion points from the Family IA chat.
 *
 * - summarizeFamilyChat - A function that summarizes the family chat.
 * - SummarizeFamilyChatInput - The input type for the summarizeFamilyChat function.
 * - SummarizeFamilyChatOutput - The return type for the summarizeFamilyChat function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeFamilyChatInputSchema = z.object({
  chatHistory: z.string().describe('The complete chat history of the family chat.'),
});
export type SummarizeFamilyChatInput = z.infer<typeof SummarizeFamilyChatInputSchema>;

const SummarizeFamilyChatOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the key discussion points from the chat history.'),
  shouldSummarize: z.boolean().describe('Whether the chat history warrants a summary.')
});
export type SummarizeFamilyChatOutput = z.infer<typeof SummarizeFamilyChatOutputSchema>;

export async function summarizeFamilyChat(input: SummarizeFamilyChatInput): Promise<SummarizeFamilyChatOutput> {
  return summarizeFamilyChatFlow(input);
}

const shouldSummarizeTool = ai.defineTool({
    name: 'shouldSummarize',
    description: 'Determines if the chat history warrants a summary.',
    inputSchema: z.object({
      chatHistory: z.string().describe('The complete chat history of the family chat.')
    }),
    outputSchema: z.boolean(),
  },
  async input => {
    // Basic implementation: Check if the chat history is long enough
    return input.chatHistory.length > 200; // Adjust threshold as needed
  }
);

const prompt = ai.definePrompt({
  name: 'summarizeFamilyChatPrompt',
  tools: [shouldSummarizeTool],
  input: {
    schema: z.object({
      chatHistory: z.string().describe('The complete chat history of the family chat.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the key discussion points from the chat history.'),
    }),
  },
  prompt: `You are an AI assistant tasked with summarizing family chat discussions.  Your goal is to provide a concise and informative summary of the key discussion points.

  First, use the shouldSummarize tool to determine if a summary is needed. If the tool returns false, do not generate a summary.
  If the tool returns true, generate a summary.

  Chat History: {{{chatHistory}}}
  `,
});

const summarizeFamilyChatFlow = ai.defineFlow<
  typeof SummarizeFamilyChatInputSchema,
  typeof SummarizeFamilyChatOutputSchema
>({
  name: 'summarizeFamilyChatFlow',
  inputSchema: SummarizeFamilyChatInputSchema,
  outputSchema: SummarizeFamilyChatOutputSchema,
}, async input => {
  const shouldSummarize = await shouldSummarizeTool(input);

  if (!shouldSummarize) {
    return {
      summary: 'No summary needed.',
      shouldSummarize: false
    };
  }

  const { output } = await prompt(input);
  return {
    summary: output!.summary,
    shouldSummarize: true
  };
});
