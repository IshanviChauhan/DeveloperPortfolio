"use client";

import { usePathname } from 'next/navigation';
import { Header } from './header';

export function ConditionalHeader() {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return <Header />;
}
