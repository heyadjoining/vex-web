"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon, Building03Icon, UserGroupIcon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

const audiences = [
    { description: "Private chats. Secure file sharing. Identity protection. Keep your personal life personal.", icon: UserIcon, num: "Individuals" },
    { description: "Secure internal communication without exposing strategy or data. Protect intellectual property at every level.", icon: Building03Icon, num: "Teams & Organizations" },
    { description: "Large group discussions without algorithmic manipulation or shadow moderation. True freedom of expression.", icon: UserGroupIcon, num: "Communities" },
];

export function Audience() {
    return (
        <section id="audience" className="audience-section py-32 md:py-40">
            <div className="section-container max-w-7xl mx-auto px-6">
                <div className="section-header max-w-2xl mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-eyebrow text-[10px] font-mono text-primary tracking-[0.2em] uppercase mb-3">Built for</motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-title text-3xl md:text-4xl tracking-[-0.03em] text-white leading-[1.15]">
                        Designed for Real Use
                    </motion.h2>
                </div>

                {/* Rows separated by structural lines */}
                <div className="audience-rows max-w-3xl mx-auto border-t border-[var(--color-line)]">
                    {audiences.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="audience-row group border-b border-[var(--color-line)] py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 hover:bg-white/[0.008] transition-colors duration-500 relative">

                            <div className="audience-row__num uppercase text-[10px] font-mono text-zinc-700 tracking-[0.15em] shrink-0 w-50">{item.num}</div>
                            <div className="audience-row__icon icon-box w-11 h-11 border border-[var(--color-line)] flex items-center justify-center text-zinc-500 group-hover:text-primary group-hover:border-primary/25 transition-all duration-500 shrink-0">
                                <HugeiconsIcon icon={item.icon} size={20} />
                            </div>
                            {/* Expanding line */}
                            <div className="audience-row__line hidden md:block w-10 h-px bg-[var(--color-line)]" />
                            <p className="audience-row__desc text-[13px] text-zinc-500 leading-relaxed max-w-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
