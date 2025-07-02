"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#extracurricular", label: "Activities" },
    { href: "#interests", label: "Interests" },
    { href: "#contact", label: "Contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <a href="#home" className="mr-auto flex items-center gap-2">
                    <span className="font-headline font-bold text-lg">Ishanvi Chauhan</span>
                </a>

                <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-foreground/60 transition-colors hover:text-foreground/80"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden ml-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-background border-t">
                    <nav className="flex flex-col items-center gap-4 p-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-foreground/80 hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
