"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShaderBackground } from "@/components/shader-background";

const rows = [
    { name: "End-to-End Encrypted", vex: true, other: "partial" },
    { name: "Open Source", vex: true, other: false },
    { name: "Data Monetization", vex: false, other: true },
    { name: "Metadata Retention", vex: "minimal", other: "extensive" },
    { name: "Censorship Resistance", vex: true, other: false },
];

export function Freedom() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const tableScale = useTransform(scrollYProgress, [0.3, 0.6], [0.95, 1]);
    const tableOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    return (
        <section ref={ref} className="freedom-section min-h-screen flex items-center justify-center relative overflow-hidden py-32 md:py-0">
            <ShaderBackground />

            <div className="section-container max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="freedom-inner max-w-4xl mx-auto text-center">
                    <motion.div style={{ y: textY }}>
                        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-eyebrow text-[10px] font-mono text-primary tracking-[0.2em] uppercase mb-5">How Vex Differs</motion.div>
                        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-title freedom-title text-4xl md:text-5xl lg:text-6xl tracking-[-0.035em] mb-7 text-white leading-[0.95]">
                            Free from<br />Surveillance
                        </motion.h2>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-desc text-base md:text-lg text-zinc-500 mb-16 leading-relaxed max-w-xl mx-auto font-light">
                            Vex was designed to operate without central visibility into your conversations. We cannot monitor, scan, or analyze your messages — because we don&apos;t have access to them.
                        </motion.p>
                    </motion.div>

                    {/* Comparison table — framed by structural lines */}
                    <motion.div style={{ scale: tableScale, opacity: tableOpacity }} className="comparison-table-wrap relative max-w-2xl mx-auto text-left">
                        <div className="comparison-table border border-[var(--color-line)] relative overflow-hidden bracket-glow group">
                            {/* Corner brackets */}
                            <div className="corner-bracket corner-bracket--tl absolute -top-px -left-px w-5 h-5 pointer-events-none">
                                <div className="absolute top-0 left-0 w-px h-full bg-primary/30" />
                                <div className="absolute top-0 left-0 h-px w-full bg-primary/30" />
                            </div>
                            <div className="corner-bracket corner-bracket--tr absolute -top-px -right-px w-5 h-5 pointer-events-none">
                                <div className="absolute top-0 right-0 w-px h-full bg-primary/30" />
                                <div className="absolute top-0 right-0 h-px w-full bg-primary/30" />
                            </div>
                            <div className="corner-bracket corner-bracket--bl absolute -bottom-px -left-px w-5 h-5 pointer-events-none">
                                <div className="absolute bottom-0 left-0 w-px h-full bg-primary/20" />
                                <div className="absolute bottom-0 left-0 h-px w-full bg-primary/20" />
                            </div>
                            <div className="corner-bracket corner-bracket--br absolute -bottom-px -right-px w-5 h-5 pointer-events-none">
                                <div className="absolute bottom-0 right-0 w-px h-full bg-primary/20" />
                                <div className="absolute bottom-0 right-0 h-px w-full bg-primary/20" />
                            </div>

                            {/* Header */}
                            <div className="comparison-table__header grid grid-cols-3 py-3.5 px-5 border-b border-[var(--color-line)] bg-white/[0.01]">
                                <div className="comparison-table__col-label text-[10px] font-mono text-zinc-600 tracking-[0.15em] uppercase">Feature</div>
                                <div className="comparison-table__col-label comparison-table__col-label--vex text-center text-[10px] font-mono text-[#91E643]/80 tracking-[0.15em] uppercase font-medium">Vex</div>
                                <div className="comparison-table__col-label comparison-table__col-label--other text-center text-[10px] font-mono text-[#E70000] tracking-[0.15em] uppercase">Others</div>
                            </div>

                            {/* Rows */}
                            {rows.map((row, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }} className="comparison-table__row grid grid-cols-3 items-center py-4 px-5 border-b border-[var(--color-line-soft)] last:border-b-0 hover:bg-white/[0.01] transition-colors duration-300 group">
                                    <div className="comparison-table__feature text-[13px] text-zinc-400 group-hover:text-white transition-colors">{row.name}</div>
                                    <div className="comparison-table__vex flex justify-center">{renderVex(row.name, row.vex)}</div>
                                    <div className="comparison-table__other flex justify-center">{renderOther(row.name, row.other)}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="freedom-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/6 blur-[200px] animate-breathe pointer-events-none" />
        </section>
    );
}

/* Vex column — green ticks, positive values */
function renderVex(name: string, val: boolean | string) {
    if (val === true) return <div className="comparison-val comparison-val--good flex items-center gap-1.5 text-[#91E643]"><HugeiconsIcon icon={CheckmarkCircle02Icon} size={15} /><span className="text-[11px] font-mono">Yes</span></div>;
    if (val === false && name === "Data Monetization") return <div className="comparison-val comparison-val--good flex items-center gap-1.5 text-[#91E643]"><HugeiconsIcon icon={Cancel01Icon} size={15} /><span className="text-[11px] font-mono">Never</span></div>;
    if (val === false) return <div className="comparison-val comparison-val--good flex items-center gap-1.5 text-[#91E643]"><HugeiconsIcon icon={Cancel01Icon} size={15} /><span className="text-[11px] font-mono">No</span></div>;
    if (val === "minimal") return <span className="comparison-val comparison-pill comparison-pill--good text-[11px] font-mono text-[#91E643]/80 px-2.5 py-0.5 border border-[#91E643]/15">Minimal</span>;
    return null;
}

/* Others column — red/negative values */
function renderOther(name: string, val: boolean | string) {
    if (val === true) return <div className="comparison-val comparison-val--bad flex items-center gap-1.5 text-[#E70000]"><HugeiconsIcon icon={CheckmarkCircle02Icon} size={15} /><span className="text-[11px] font-mono">Yes</span></div>;
    if (val === false) return <div className="comparison-val comparison-val--bad flex items-center gap-1.5 text-[#E70000]"><HugeiconsIcon icon={Cancel01Icon} size={15} /><span className="text-[11px] font-mono">No</span></div>;
    if (val === "partial") return <span className="comparison-val comparison-pill comparison-pill--warn text-[11px] font-mono text-[#E70000] px-2.5 py-0.5 border border-[#E70000]/15">Partial</span>;
    if (val === "extensive") return <span className="comparison-val comparison-pill comparison-pill--bad text-[11px] font-mono text-[#E70000] px-2.5 py-0.5 border border-[#E70000]/15">Extensive</span>;
    return null;
}
