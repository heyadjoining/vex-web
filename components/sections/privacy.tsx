"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Shield02Icon, CodeIcon, Database01Icon } from "@hugeicons/core-free-icons";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 0, suffix: "", label: "Messages readable by Vex" },
    { value: 100, suffix: "%", label: "Code publicly auditable" },
    { value: 0, suffix: "", label: "Data sold to third parties" },
];

const pillars = [
    { icon: Shield02Icon, num: "01", title: "End-to-End Encryption", description: "Only you and the recipient can read messages. Not Vex. Not servers. Not anyone in between." },
    { icon: CodeIcon, num: "02", title: "Open-Source Transparency", description: "The code is public. Security isn't a promise — it's verifiable. Anyone can audit what we ship." },
    { icon: Database01Icon, num: "03", title: "Minimal Data Collection", description: "No behavioral profiling. No selling metadata. Only what's required to deliver the service." },
];

function AnimatedStat({ value, suffix, label }: typeof stats[0]) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (value === 0) { setCount(0); observer.disconnect(); return; }
                    const duration = 1800;
                    const start = performance.now();
                    const tick = (now: number) => {
                        const p = Math.min((now - start) / duration, 1);
                        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="privacy-stat flex-1 py-6 text-center">
            <div className="privacy-stat__value text-3xl md:text-4xl font-light text-white font-mono tracking-tighter mb-1">{count}{suffix}</div>
            <div className="privacy-stat__label text-[9px] font-mono text-zinc-600 tracking-[0.15em] uppercase">{label}</div>
        </div>
    );
}

function PillarRow({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const glowX = useTransform(mx, [-1, 1], [-20, 20]);

    function onMove(e: React.MouseEvent) {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    }
    function onLeave() { mx.set(0); }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="pillar-row group relative flex items-start gap-6 py-7 border-b border-[var(--color-line-soft)] last:border-b-0 hover:bg-white/[0.008] transition-colors duration-400 px-1"
        >
            {/* Subtle glow following mouse */}
            <motion.div
                className="pillar-row__glow absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ x: glowX }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-primary/[0.015] blur-[40px]" />
            </motion.div>

            <div className="pillar-row__num text-[10px] font-mono text-zinc-700 tracking-[0.15em] shrink-0 pt-1 w-7 relative z-10">{pillar.num}</div>

            <div className="pillar-row__icon icon-box w-10 h-10 border border-[var(--color-line)] flex items-center justify-center text-zinc-600 group-hover:text-primary group-hover:border-primary/20 transition-all duration-500 shrink-0 relative z-10">
                <HugeiconsIcon icon={pillar.icon} size={17} />
            </div>

            <div className="pillar-row__content flex-1 min-w-0 relative z-10">
                <h3 className="pillar-row__title text-[15px] font-medium text-white tracking-tight mb-1.5 group-hover:text-white transition-colors">{pillar.title}</h3>
                <p className="pillar-row__desc text-[13px] text-zinc-600 leading-relaxed group-hover:text-zinc-500 transition-colors duration-300">{pillar.description}</p>
            </div>

            {/* Expanding accent line */}
            <div className="pillar-row__accent absolute bottom-0 left-0 h-px w-0 bg-primary/20 group-hover:w-full transition-all duration-700 ease-out" />
        </motion.div>
    );
}

export function Privacy() {
    return (
        <section id="privacy" className="privacy-section py-32 md:py-40 relative overflow-hidden">
            <div className="section-container max-w-7xl mx-auto px-6">
                <div className="section-header max-w-2xl mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-eyebrow text-[10px] font-mono text-primary tracking-[0.2em] uppercase mb-3">How privacy works</motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-title text-3xl md:text-4xl tracking-[-0.03em] mb-4 text-white leading-[1.15]">
                        Your Messages. Your Keys.
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-desc text-[15px] text-zinc-500 leading-relaxed max-w-lg">
                        This isn&apos;t a marketing claim. It&apos;s mathematical certainty.
                    </motion.p>
                </div>

                <div className="privacy-body max-w-3xl mx-auto">
                    {/* Stats bar — framed by horizontal lines */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="privacy-stats-bar relative mb-10">
                        <div className="line-h absolute left-0 right-0 top-0 h-px bg-[var(--color-line)]" />
                        <div className="line-h absolute left-0 right-0 bottom-0 h-px bg-[var(--color-line)]" />
                        <div className="privacy-stats-bar__row flex divide-x divide-[var(--color-line)]">
                            {stats.map((s, i) => <AnimatedStat key={i} {...s} />)}
                        </div>
                    </motion.div>

                    {/* Pillar rows */}
                    <div className="pillar-rows border-b border-[var(--color-line)]">
                        {pillars.map((p, i) => <PillarRow key={i} pillar={p} index={i} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
