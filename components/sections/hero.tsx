"use client";

import { LineButton } from "@/components/ui/line-button";
import { SimpleButton } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Download, GithubIcon, Shield01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ShaderBackground } from "@/components/shader-background";

function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const num = parseInt(target.replace(/\D/g, ""));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 2000;
                    const start = performance.now();
                    const tick = (now: number) => {
                        const p = Math.min((now - start) / duration, 1);
                        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * num));
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
    }, [num]);

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const line1 = ["Human", "Right."];
const line2 = ["Privacy", "is", "a"];

export function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { damping: 30, stiffness: 120 });
    const sy = useSpring(my, { damping: 30, stiffness: 120 });

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const r = ref.current?.getBoundingClientRect();
            if (r) {
                mx.set((e.clientX - r.left - r.width / 2) * 0.04);
                my.set((e.clientY - r.top - r.height / 2) * 0.04);
            }
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [mx, my]);

    return (
        <section ref={ref} className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
            <ShaderBackground />

            {/* Mouse-reactive glow */}
            <motion.div
                className="hero-glow absolute w-[600px] h-[600px] bg-primary/10 blur-[200px] pointer-events-none"
                style={{ x: sx, y: sy }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="hero-content max-w-7xl mx-auto px-6 relative z-10 pt-24 w-full">
                {/* Corner brackets — top left */}
                <div className="corner-bracket corner-bracket--tl absolute top-20 left-6 w-8 h-8 pointer-events-none">
                    <div className="absolute top-0 left-0 w-px h-full bg-primary/20" />
                    <div className="absolute top-0 left-0 h-px w-full bg-primary/20" />
                </div>
                {/* Corner brackets — top right */}
                <div className="corner-bracket corner-bracket--tr absolute top-20 right-6 w-8 h-8 pointer-events-none">
                    <div className="absolute top-0 right-0 w-px h-full bg-primary/20" />
                    <div className="absolute top-0 right-0 h-px w-full bg-primary/20" />
                </div>

                <div className="hero-inner max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 border border-[var(--color-line)] text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-14 backdrop-blur-sm"
                    >
                        <span className="hero-badge__dot relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute h-full w-full bg-[#E70000] opacity-75" />
                            <span className="relative h-1.5 w-1.5 bg-[#E70000]" />
                        </span>
                        Now in Public Beta
                    </motion.div>

                    {/* Headline */}
                    <h1 className="hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.045em] leading-[0.9] mb-8 pb-2">
                        <span className="hero-headline__line2 block mt-1">
                            {line2.map((w, i) => (
                                <motion.span key={i} initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.55, delay: 0.74 + i * 0.08 }} className="inline-block mr-[0.22em]">
                                    {w}
                                </motion.span>
                            ))}
                        </span>
                        <span className="hero-headline__line1 block text-white">
                            {line1.map((w, i) => (
                                <motion.span key={i} initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.55, delay: 0.5 + i * 0.08 }} className={`inline-block mr-[0.22em] text-[#E70000] ${i === 0 ? "font-ttnp font-normal relative z-10 py-4 px-3 -my-4 -mx-2" : ""}`}>
                                    {w}
                                </motion.span>
                            ))}
                        </span>
                    </h1>

                    {/* Decorative line above headline */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="hero-line-top w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#E70000]/20 to-transparent mb-12 origin-center"
                    />

                    {/* Sub */}
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }} className="hero-subtitle text-base md:text-lg text-zinc-500 mb-14 max-w-lg mx-auto leading-relaxed font-light">
                        End-to-end encrypted messaging for anyone
                    </motion.p>

                    {/* CTAs */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.2 }} className="hero-ctas flex flex-col items-center justify-center gap-3 mb-28">
                        <LineButton variant="outline" size="lg" href="https://github.com/vex-chat" external>
                            <HugeiconsIcon icon={Download} className="mr-1.5 w-4 h-4" />
                            Get Vex
                        </LineButton>
                        <SimpleButton>
                            <HugeiconsIcon icon={Shield01Icon} className="mr-1.5 w-4 h-4" />
                            Security Model
                        </SimpleButton>
                    </motion.div>

                </div>
            </div>

        </section>
    );
}
