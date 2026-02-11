"use client";

import Link from "next/link";
import { LineButton } from "@/components/ui/line-button";
import { SimpleButton } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, TwitterIcon } from "@hugeicons/core-free-icons";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Privacy", href: "#privacy" },
    { label: "Security", href: "#security" },
    { label: "Philosophy", href: "#philosophy" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85]);
    const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);
    const blur = useTransform(scrollY, [0, 100], [0, 24]);

    return (
        <motion.nav
            className="navbar fixed top-0 w-full z-50"
            style={{
                backgroundColor: useTransform(bgOpacity, (v) => `rgba(5, 5, 8, ${v})`),
                backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
            }}
        >
            {/* Bottom border connects to grid lines */}
            <motion.div
                className="navbar__border absolute bottom-0 left-0 right-0 h-px bg-[var(--color-line)]"
                style={{ opacity: borderOpacity }}
            />
            <div className="navbar__inner max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="navbar__logo flex items-center hover:opacity-80 transition-opacity duration-300">
                    <img src="/vex_icon.svg" alt="Vex" className="h-6 w-auto" />
                </Link>
                <div className="navbar__links hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="navbar__link text-[13px] text-zinc-500 hover:text-white transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="navbar__link-underline absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>
                <div className="navbar__actions flex items-center gap-1">
                    <Link href="https://github.com/vex-chat" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2">
                        <HugeiconsIcon icon={GithubIcon} size={16} />
                    </Link>
                    <Link href="https://twitter.com/vex" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors p-2">
                        <HugeiconsIcon icon={TwitterIcon} size={16} />
                    </Link>
                    <div className="ml-2">
                        <LineButton variant="outline" size="sm" href="https://github.com/vex-chat">
                            Get Vex
                        </LineButton>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
