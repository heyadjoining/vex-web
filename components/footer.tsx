"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, TwitterIcon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

const footerLinks: Record<string, string[]> = {
    Product: ["Download", "Features", "Security", "Source Code"],
    Resources: ["Documentation", "Whitepaper", "Transparency Report", "Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Contact"],
};

export function Footer() {
    return (
        <footer className="site-footer bg-black relative overflow-hidden">

            {/* Links section with crosshair top border */}
            <div className="footer-links max-w-7xl mx-auto px-6 py-14">
                <div className="footer-links__grid grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="footer-brand col-span-2 md:col-span-1">
                        <Link href="/" className="footer-brand__logo mb-3 block">
                            <img src="/vex_logo.svg" alt="Vex" className="h-5 w-auto" />
                        </Link>
                        <p className="footer-brand__tagline text-[12px] text-zinc-700 leading-relaxed max-w-[200px]">
                            Private by design.<br />Powerful by default.
                        </p>
                    </div>
                    {Object.entries(footerLinks).map(([cat, links]) => (
                        <div key={cat} className="footer-link-group">
                            <h4 className="footer-link-group__title text-[10px] font-mono text-zinc-500 tracking-[0.15em] uppercase mb-5">{cat}</h4>
                            <ul className="footer-link-group__list space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="footer-link text-[12px] text-zinc-600 hover:text-white transition-colors duration-200 relative group inline-block">
                                            {link}
                                            <span className="footer-link__underline absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="footer-bottom-divider h-px bg-[var(--color-line-soft)]" />
            </div>
            <div className="footer-bottom max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                <p className="footer-bottom__copy text-[11px] text-zinc-700 font-mono">© {new Date().getFullYear()} Vex Inc.</p>
                <div className="footer-bottom__socials flex items-center gap-0.5">
                    <Link href="https://github.com/vex-chat" target="_blank" className="footer-social text-zinc-700 hover:text-white transition-colors p-2 hover:bg-white/[0.02]"><HugeiconsIcon icon={GithubIcon} size={14} /></Link>
                    <Link href="https://twitter.com/vex" target="_blank" className="footer-social text-zinc-700 hover:text-white transition-colors p-2 hover:bg-white/[0.02]"><HugeiconsIcon icon={TwitterIcon} size={14} /></Link>
                </div>
            </div>
        </footer>
    );
}
