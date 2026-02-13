"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Shield02Icon, Key01Icon, ArrowTurnForwardIcon, GithubIcon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

const specs = [
    { title: "E2E Encryption Protocol", description: "Double Ratchet Algorithm with X3DH key agreement. Industry-standard, battle-tested.", icon: Shield02Icon },
    { title: "Key Management", description: "Keys generated and stored locally. Server has zero knowledge of message content or keys.", icon: Key01Icon },
    { title: "Forward Secrecy", description: "Compromised keys cannot decrypt past sessions. Ephemeral keys rotate automatically.", icon: ArrowTurnForwardIcon },
    { title: "Open-Source Auditable", description: "Full source code on GitHub. Security researchers can verify every claim.", icon: GithubIcon },
    { title: "Independent Audits", description: "Regular third-party security audits with published results. Transparency is default.", icon: CheckmarkCircle02Icon },
];

export function Technical() {
    return (
        <section id="security" className="technical-section py-32 md:py-40">
            <div className="section-container max-w-7xl mx-auto px-6">
                <div className="section-header max-w-2xl mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-eyebrow text-[10px] font-mono text-primary tracking-[0.2em] uppercase mb-3">Security architecture</motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-title text-3xl md:text-4xl tracking-[-0.03em] text-white leading-[1.15]">
                        Engineered for <span className="font-ttnp font-normal relative z-10 py-4 px-3 -my-4 -mx-2 bg-background/5">Trust</span>
                    </motion.h2>
                </div>

                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="terminal-box max-w-3xl mx-auto border border-[var(--color-line)] overflow-hidden relative bracket-glow group">
                    {/* Corner brackets */}
                    <div className="corner-bracket corner-bracket--tl absolute -top-px -left-px w-6 h-6 pointer-events-none z-10">
                        <div className="absolute top-0 left-0 w-px h-full bg-primary/30" />
                        <div className="absolute top-0 left-0 h-px w-full bg-primary/30" />
                    </div>
                    <div className="corner-bracket corner-bracket--br absolute -bottom-px -right-px w-6 h-6 pointer-events-none z-10">
                        <div className="absolute bottom-0 right-0 w-px h-full bg-primary/25" />
                        <div className="absolute bottom-0 right-0 h-px w-full bg-primary/25" />
                    </div>

                    {/* Terminal header */}
                    <div className="terminal-box__header flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--color-line)] bg-white/[0.01]">
                        <div className="terminal-box__dot w-2 h-2 bg-zinc-800" />
                        <div className="terminal-box__dot w-2 h-2 bg-zinc-800" />
                        <div className="terminal-box__dot w-2 h-2 bg-zinc-800" />
                        <span className="terminal-box__title ml-3 text-[10px] font-mono text-zinc-600 tracking-wider">vex-security-spec</span>
                    </div>

                    <div className="terminal-box__body">
                        {specs.map((spec, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="spec-row flex items-start gap-5 px-5 py-5 border-b border-[var(--color-line-soft)] last:border-b-0 hover:bg-white/[0.01] transition-colors duration-300 group">
                                <div className="spec-row__num text-[10px] font-mono text-zinc-700 shrink-0 w-5 text-right pt-0.5">{String(i + 1).padStart(2, "0")}</div>
                                <div className="spec-row__arrow text-primary font-mono text-xs shrink-0 pt-0.5">→</div>
                                <div className="spec-row__content flex-1 min-w-0">
                                    <div className="spec-row__head flex items-center gap-2.5 mb-1.5">
                                        <HugeiconsIcon icon={spec.icon} size={14} className="text-primary shrink-0" />
                                        <h3 className="spec-row__title font-mono text-[13px] font-normal text-zinc-200 tracking-tight">{spec.title}</h3>
                                    </div>
                                    <p className="spec-row__desc font-mono text-[12px] text-zinc-600 leading-relaxed group-hover:text-zinc-500 transition-colors">{spec.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
