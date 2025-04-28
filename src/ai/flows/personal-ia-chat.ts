'use server';
/**
 * @fileOverview An AI agent that holds a conversation, remembering previous turns.
 *
 * - personalAIChat - A function that holds a conversation.
 * - PersonalAIChatInput - The input type for the personalAIChat function.
 * - PersonalAIChatOutput - The return type for the personalAIChat function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const PersonalAIChatInputSchema = z.object({
  message: z.string().describe('The current message from the user.'),
  chatHistory: z.string().describe('The past chat history between the user and the AI.'),
});
export type PersonalAIChatInput = z.infer<typeof PersonalAIChatInputSchema>;

const PersonalAIChatOutputSchema = z.object({
  response: z
    .string()
    .describe('The response to the current message, from the AI.'),
});
export type PersonalAIChatOutput = z.infer<typeof PersonalAIChatOutputSchema>;

export async function personalAIChat(
  input: PersonalAIChatInput
): Promise<PersonalAIChatOutput> {
  return personalAIChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalAIChatPrompt',
  input: {
    schema: z.object({
      message: z.string().describe('The current message from the user.'),
      chatHistory: z.string().describe('The past chat history between the user and the AI.'),
    }),
  },
  output: {
    schema: z.object({
      response: z
        .string()
        .describe('The response to the current message, from the AI.'),
    }),
  },
  prompt: `You are an AI assistant engaging in a personal chat with a user.

  Use the following chat history to remember the past context of the conversation:

  Chat History: {{{chatHistory}}}

  Now, respond to the user's current message:

  Current Message: {{{message}}}
  `,
});

const personalAIChatFlow = ai.defineFlow<
  typeof PersonalAIChatInputSchema,
  typeof PersonalAIChatOutputSchema
>({
  name: 'personalAIChatFlow',
  inputSchema: PersonalAIChatInputSchema,
  outputSchema: PersonalAIChatOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
