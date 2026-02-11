"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

const rows = [
    { name: "End-to-End Encrypted", vex: true, other: "partial" },
    { name: "Open Source", vex: true, other: false },
    { name: "Data Monetization", vex: false, other: true },
    { name: "Metadata Retention", vex: "minimal", other: "extensive" },
    { name: "Censorship Resistance", vex: true, other: false },
];

export function Comparison() {
    return (
        <section id="comparison" className="py-32 md:py-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase mb-3">Comparison</motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="text-3xl md:text-4xl tracking-[-0.03em] text-white leading-[1.15]">How Vex Differs</motion.h2>
                </div>

                <div className="max-w-3xl">
                    {/* Header row */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-3 py-4 px-5 border-b border-[var(--color-line)] relative">
                        <div className="text-[10px] font-mono text-zinc-600 tracking-[0.15em] uppercase">Feature</div>
                        <div className="text-center text-[10px] font-mono text-primary tracking-[0.15em] uppercase font-medium">Vex</div>
                        <div className="text-center text-[10px] font-mono text-zinc-700 tracking-[0.15em] uppercase">Others</div>

                    </motion.div>

                    {rows.map((row, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="grid grid-cols-3 items-center py-4 px-5 border-b border-[var(--color-line-soft)] hover:bg-white/[0.01] transition-colors duration-300 group">
                            <div className="text-[13px] text-zinc-400 group-hover:text-white transition-colors">{row.name}</div>
                            <div className="flex justify-center">{renderVal(row.name, row.vex, true)}</div>
                            <div className="flex justify-center">{renderVal(row.name, row.other, false)}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function renderVal(name: string, val: boolean | string, isVex: boolean) {
    if (val === true) {
        if (name === "Data Monetization") return <div className="flex items-center gap-1.5 text-red-500/60"><HugeiconsIcon icon={CheckmarkCircle02Icon} size={15} /><span className="text-[11px] font-mono">Yes</span></div>;
        return <div className={`flex items-center gap-1.5 ${isVex ? "text-primary" : "text-zinc-600"}`}><HugeiconsIcon icon={CheckmarkCircle02Icon} size={15} /><span className="text-[11px] font-mono">Yes</span></div>;
    }
    if (val === false) {
        if (name === "Data Monetization") return <div className="flex items-center gap-1.5 text-primary"><HugeiconsIcon icon={Cancel01Icon} size={15} /><span className="text-[11px] font-mono">Never</span></div>;
        return <div className="flex items-center gap-1.5 text-zinc-700"><HugeiconsIcon icon={Cancel01Icon} size={15} /><span className="text-[11px] font-mono">No</span></div>;
    }
    if (val === "partial") return <span className="text-[11px] font-mono text-yellow-600/60 px-2.5 py-0.5 border border-[var(--color-line)]">Partial</span>;
    if (val === "minimal") return <span className="text-[11px] font-mono text-primary px-2.5 py-0.5 border border-[var(--color-line)]">Minimal</span>;
    if (val === "extensive") return <span className="text-[11px] font-mono text-red-500/60 px-2.5 py-0.5 border border-[var(--color-line)]">Extensive</span>;
    return null;
}
