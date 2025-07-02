"use client";

import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { getPersonalizedGreeting } from '@/app/actions';

export function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGreeting() {
      // In a real app, you might get location from the browser API
      // or from user's IP via a service. For this example, we'll mock it.
      const location = "the internet";
      try {
        const result = await getPersonalizedGreeting({ location });
        if (result.greeting) {
          setGreeting(result.greeting);
        } else {
          setGreeting("Welcome to my digital space!");
        }
      } catch (error) {
        console.error(error);
        setGreeting("Welcome to my portfolio!");
      }
    }

    fetchGreeting();
  }, []);

  if (!greeting) {
    return <Skeleton className="h-7 w-full max-w-sm" />;
  }

  return <p className="text-accent font-medium animate-in fade-in duration-500">{greeting}</p>;
}
