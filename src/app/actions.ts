"use server";

import { personalizedGreeting, PersonalizedGreetingInput, PersonalizedGreetingOutput } from "@/ai/flows/personalized-greeting";

export async function getPersonalizedGreeting(input: PersonalizedGreetingInput): Promise<PersonalizedGreetingOutput> {
    try {
        const output = await personalizedGreeting(input);
        return output;
    } catch (error) {
        console.error("Error getting personalized greeting:", error);
        // Provide a graceful fallback greeting
        return { greeting: "Welcome to my portfolio! I'm glad you're here." };
    }
}
