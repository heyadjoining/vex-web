"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Message01Icon, UserGroupIcon, LockKeyIcon, Globe02Icon } from "@hugeicons/core-free-icons";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
    { title: "Real-time Messaging", description: "Instant delivery with minimal latency. Built for speed without compromising security.", icon: Message01Icon, num: "01" },
    { title: "Large Group Support", description: "Coordinate with thousands in a single group. No algorithmic timeline manipulation.", icon: UserGroupIcon, num: "02" },
    { title: "Secure One-to-One", description: "Direct, private conversations. Perfect forward secrecy ensures past messages stay safe.", icon: LockKeyIcon, num: "03" },
    { title: "Cross-border Communication", description: "Reliable connection anywhere. Designed to resist regional blocking and censorship.", icon: Globe02Icon, num: "04" },
];

function TiltCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { damping: 20 });
    const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { damping: 20 });

    function onMove(e: React.MouseEvent) {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    }
    function onLeave() { mx.set(0); my.set(0); }

    return (
        <div className="perspective-container">
            <motion.div
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="feature-card group relative p-8 border-y border-l border-[var(--color-line)] bg-transparent hover:bg-white/[0.015] transition-[background-color,border-color,box-shadow] duration-500 overflow-hidden"
            >
                {/* Corner bracket — top-left red accent, expands on hover */}
                <div className="corner-bracket corner-bracket--tl absolute top-0 left-0 w-5 h-5 group-hover:w-6 group-hover:h-6 pointer-events-none transition-all duration-500">
                    <div className="absolute top-0 left-0 w-px h-full bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
                    <div className="absolute top-0 left-0 h-px w-full bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
                </div>
                {/* Corner bracket — bottom-right, expands on hover */}
                <div className="corner-bracket corner-bracket--br absolute bottom-0 right-0 w-5 h-5 group-hover:w-6 group-hover:h-6 pointer-events-none transition-all duration-500">
                    <div className="absolute bottom-0 right-0 w-px h-full bg-primary/10 group-hover:bg-primary/30 transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 h-px w-full bg-primary/10 group-hover:bg-primary/30 transition-colors duration-500" />
                </div>

                <div className="feature-card__num relative z-10 text-[10px] font-mono text-[var(--color-cross)] tracking-[0.2em] mb-5">{feature.num}</div>

                <div className="feature-card__icon relative z-10 w-10 h-10 border border-[var(--color-line)] flex items-center justify-center mb-7 text-primary group-hover:border-primary/25 group-hover:bg-primary/5 transition-all duration-500">
                    <HugeiconsIcon icon={feature.icon} size={18} />
                </div>

                <h3 className="feature-card__title relative z-10 text-base font-medium mb-2 text-zinc-200 tracking-tight">{feature.title}</h3>
                <p className="feature-card__desc relative z-10 text-[13px] text-zinc-500 leading-relaxed">{feature.description}</p>
            </motion.div>
        </div>
    );
}

export function Features() {
    return (
        <section id="features" className="features-section py-32 md:py-40 relative">
            <div className="section-container max-w-7xl mx-auto px-6">
                <div className="section-header max-w-2xl mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-eyebrow text-[10px] font-mono text-primary tracking-[0.2em] uppercase mb-3">What we build</motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="section-title text-3xl md:text-4xl tracking-[-0.03em] mb-4 text-white leading-[1.15]">
                        Messaging, <span className="font-ttnp font-normal relative z-10 py-4 px-3 -my-4 -mx-2 bg-background/5">Rewritten</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-desc text-[15px] text-zinc-500 leading-relaxed max-w-lg">
                        An end-to-end encrypted platform for individuals, teams, and communities.
                    </motion.p>
                </div>
                {/* Grid w/ shared borders — line-based layout */}
                <div className="features-grid grid md:grid-cols-2 lg:grid-cols-4 bg-[var(--color-line-soft)]">
                    {features.map((f, i) => (
                        <div key={i} className="bg-background">
                            <TiltCard feature={f} index={i} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
