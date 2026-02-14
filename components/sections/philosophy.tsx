"use client";

import { LineButton } from "@/components/ui/line-button";
import { SimpleButton } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Shield01Icon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ShaderBackground } from "@/components/shader-background";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>{}[]!?/\\|~^";

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
    const [display, setDisplay] = useState(text);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const timeout = setTimeout(() => {
            let iteration = 0;
            const totalIterations = text.length * 2;

            const interval = setInterval(() => {
                setDisplay(
                    text
                        .split("")
                        .map((char, i) => {
                            if (char === " ") return " ";
                            if (i < iteration / 2) return text[i];
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                iteration++;
                if (iteration > totalIterations) {
                    setDisplay(text);
                    clearInterval(interval);
                }
            }, 18);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [hasStarted, text, delay]);

    return <span ref={ref}>{display}</span>;
}

const line1 = "Modern communication platforms";
const line2 = "trade convenience for visibility.";
const line3 = "Vex reverses that equation.";


export function Philosophy() {
    return (
        <section id="philosophy" className="philosophy-section py-40 md:py-52 relative overflow-hidden">
            <ShaderBackground />

            <div className="section-container max-w-5xl mx-auto px-6 relative z-10">
                <div className="philosophy-inner grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
                    {/* Left column — eyebrow + scramble */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-eyebrow text-[10px] font-mono text-primary tracking-[0.2em] uppercase mb-10"
                        >
                            Our philosophy
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="philosophy-text text-[15px] md:text-base leading-[1.7] tracking-normal text-zinc-500 font-mono"
                        >
                            <span className="block"><ScrambleText text={line1} delay={100} /></span>
                            <span className="block"><ScrambleText text={line2} delay={400} /></span>
                            <span className="block mt-4"><ScrambleText text={line3} delay={800} /></span>
                        </motion.div>
                    </div>

                    {/* Right column — emphasis + CTA */}
                    <div className="md:text-right">
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="philosophy-emphasis text-2xl md:text-3xl lg:text-4xl font-light leading-[1.3] tracking-tight mb-12 text-white"
                        >
                            Privacy <span className="font-ttnp font-normal relative z-10 py-4 px-3 -my-4 -mx-2 bg-background/5">should not</span> be optional, <br></br>premium, or conditional.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="philosophy-ctas md:flex md:justify-end"
                        >
                            <LineButton variant="outline" size="lg">
                                Get Vex
                                <HugeiconsIcon icon={ArrowRight01Icon} className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                            </LineButton>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section >
    );
}
