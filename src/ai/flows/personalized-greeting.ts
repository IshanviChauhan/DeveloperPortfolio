'use server';

/**
 * @fileOverview A personalized greeting AI agent that tailors the greeting based on the visitor's location.
 *
 * - personalizedGreeting - A function that generates a personalized greeting based on location.
 * - PersonalizedGreetingInput - The input type for the personalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the personalizedGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGreetingInputSchema = z.object({
  location: z.string().describe('The location of the visitor.'),
  name: z.string().describe('The name of the visitor, optional.'),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('A personalized welcome message.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function personalizedGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const personalizedGreetingPrompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
  prompt: `You are a friendly and welcoming AI assistant.
  Generate a personalized greeting message for a visitor based on their location.
  The message should be warm, inviting, and make the visitor feel welcome to the DevCard website.

  Consider the visitor's location ({{{location}}}) when crafting the greeting.
  If the visitor's name is provided ({{{name}}}), incorporate it into the greeting.
  If name is not provided, use generic greeting.
  Do not include any salutations like 'Dear'.

  Example 1:
  Location: London
  Greeting: Welcome to DevCard! We hope you enjoy your visit from London.

  Example 2:
  Location: New York, Name: John
  Greeting: Welcome, John! We're delighted to have you visit DevCard from New York.

  Example 3:
  Location: Berlin
  Greeting: Welcome to DevCard! We're excited to have you visit from Berlin.
  `,
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async input => {
    const {output} = await personalizedGreetingPrompt(input);
    return output!;
  }
);
