"use client";

import Image from "next/image";
import { LineButton } from "@/components/ui/line-button";
import { SimpleButton } from "@/components/ui/button";
import { ScrambleText } from "@/components/ui/scramble-text";
import { SectionDivider } from "@/components/section-divider";
import { ShaderBackground } from "@/components/shader-background";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon, Message01Icon, LockKeyIcon, Globe02Icon, CheckmarkCircle02Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { AppMockupServerSidebar } from "@/components/app-mockup/ServerSidebar";
import { AppMockupNavigationSidebar } from "@/components/app-mockup/NavigationSidebar";
import { AppMockupChatArea } from "@/components/app-mockup/ChatArea";
import { AppMockupMemberSidebar } from "@/components/app-mockup/MemberSidebar";
import {
    Home, Search, Settings, Menu, X, ChevronDown, ChevronRight, ChevronLeft, ChevronUp,
    ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ExternalLink, Link as LinkIcon,
    MessageSquare, MessageCircle, Send, Mail, Bell, BellOff, Phone, Video,
    Image as ImageIcon, Camera, Film, Music, Mic, MicOff, Volume2, VolumeX,
    Plus, Minus, Edit2, Trash2, Copy, Clipboard, Download, Upload, Share2,
    Eye, EyeOff, Lock, Unlock, Shield, Key, User, Users, UserPlus, UserCheck,
    Heart, Star, Bookmark, Flag, ThumbsUp, Award,
    Globe, Wifi, WifiOff, Zap, Activity, Clock, Calendar, Hash,
    Check, AlertTriangle, Info, AlertCircle, HelpCircle, XCircle, CheckCircle,
    Grid, List, Layers, Layout, Sidebar, Monitor, Smartphone, Tablet,
    Sun, Moon, CloudRain, Droplet,
    Code, Terminal, GitBranch, GitCommit, GitPullRequest, Database,
    MoreHorizontal, MoreVertical, Filter, Sliders, RefreshCw, Loader,
    LogIn, LogOut, Power, ToggleLeft, ToggleRight, Maximize2, Minimize2,
    FileText, Folder, File, FolderPlus, Archive, Type, MousePointer, Box,
    type Icon as FeatherIconType
} from "react-feather";

/* ─── Helpers ─── */

function DSSection({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
    return (
        <section id={id} className="mt-20 border-[var(--color-line-soft)]">
            <SectionDivider label={label} />
            <div className="max-w-7xl mx-auto px-6 mt-10">
                {children}
            </div>
        </section>
    );
}

function Swatch({ label, cssVar, className }: { label: string; cssVar?: string; className?: string }) {
    return (
        <div className="flex flex-col gap-2">
            <div
                className={`w-full aspect-square border border-[var(--color-line)] ${className ?? ""}`}
                style={cssVar ? { backgroundColor: `var(${cssVar})` } : undefined}
            />
            <div className="text-[10px] font-mono text-[var(--muted-foreground)] truncate">{label}</div>
            {cssVar && <div className="text-[9px] font-mono text-[var(--muted-foreground)] truncate">{cssVar}</div>}
        </div>
    );
}

/* ─── Page ─── */

export default function DesignSystemPage() {
    const [activeTab, setActiveTab] = useState<"brand" | "colors" | "type" | "buttons" | "structure" | "blocks" | "icons" | "app">("brand");
    const [serverAccent, setServerAccent] = useState("#E70000");

    return (
        <main className="min-h-screen bg-background relative">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6">
                {/* Tab Bar — top */}
                <div className="border flex items-center justify-between p-4 hover:border-primary/20 mb-10">
                    <Image src="/vex_icon.svg" alt="Vex Icon" width={40} height={40} />
                    {/* Static title + description */}
                    <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] text-[var(--foreground)]">Vex - Design System</h1>
                    <p className="text-[15px] text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
                        Every visual primitive in one place. Tweak tokens, preview components, and adjust effects.
                    </p>
                </div>



                <div className="flex gap-0 mb-10 border-[var(--color-line)]">
                    {([
                        { key: "brand" as const, label: "Brand", icon: Star },
                        { key: "colors" as const, label: "Colors", icon: Droplet },
                        { key: "type" as const, label: "Type", icon: Type },
                        { key: "buttons" as const, label: "Buttons", icon: MousePointer },
                        { key: "structure" as const, label: "Structure", icon: Layers },
                        { key: "blocks" as const, label: "Blocks", icon: Box },
                        { key: "icons" as const, label: "Icons", icon: Grid },
                        { key: "app" as const, label: "App Interface", icon: Layout },
                    ]).map(({ key, label, icon: TabIcon }) => (
                        <SimpleButton
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`relative flex items-center gap-2 px-5 py-3 text-[10px] font-mono tracking-[0.15em] uppercase transition-colors duration-300 ${activeTab === key
                                ? "text-[var(--foreground)]"
                                : "text-[var(--muted-foreground)] hover:text-[var(--muted-foreground)]"
                                }`}
                        >
                            <TabIcon size={12} className="opacity-60" />
                            {label}
                            {activeTab === key && (
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--primary)]" />
                            )}
                        </SimpleButton>
                    ))}
                </div>

                {/* Dynamic code + tab description */}
                <div className="flex items-center gap-20">
                    <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.2em] uppercase">
                        {activeTab === "brand" && "vex_design-sys_000BND"}
                        {activeTab === "colors" && "vex_design-sys_001CLR"}
                        {activeTab === "type" && "vex_design-sys_002TYP"}
                        {activeTab === "buttons" && "vex_design-sys_003BTN"}
                        {activeTab === "structure" && "vex_design-sys_004STR"}
                        {activeTab === "blocks" && "vex_design-sys_005BLK"}
                        {activeTab === "icons" && "vex_design-sys_006ICO"}
                        {activeTab === "app" && "vex_design-sys_007APP"}
                    </div>
                    <p className="text-[13px] text-[var(--muted-foreground)] max-w-md leading-relaxed">
                        {activeTab === "brand" && "Core brand identity: logo marks and visual assets."}
                        {activeTab === "colors" && "Global color palette, semantic tokens, and gradients."}
                        {activeTab === "type" && "Typography scale and font families."}
                        {activeTab === "buttons" && "Interactive button components and states."}
                        {activeTab === "structure" && "Layout primitives, spacing, and structural elements."}
                        {activeTab === "blocks" && "Content blocks, cards, effects, and animations."}
                        {activeTab === "icons" && "Curated Feather icon set with sizing reference for consistent use across the app."}
                        {activeTab === "app" && "Interactive mockup panels and the Vex app interface."}
                    </p>
                </div>
            </div>

            {activeTab === "brand" && (<>
                {/* ─── 01 · Vex Icon ─── */}
                <DSSection id="vex-icon" label="01 · Vex Icon (Mark)">
                    <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed mb-6 max-w-lg">
                        Primary brand mark used across the app and website. Rendered from <code className="text-[11px] font-mono text-[var(--muted-foreground)]">vex_icon.svg</code>.
                    </p>
                    <div className="flex items-end gap-8 mb-10">
                        {([
                            { size: 16, label: "16px", usage: "Favicon / Meta" },
                            { size: 20, label: "20px", usage: "Server Sidebar" },
                            { size: 28, label: "28px", usage: "Navbar" },
                            { size: 40, label: "40px", usage: "Footer" },
                            { size: 64, label: "64px", usage: "Splash" },
                        ]).map(({ size, label, usage }) => (
                            <div key={size} className="flex flex-col items-center gap-3">
                                <div className="border border-[var(--color-line)] flex items-center justify-center p-4 hover:border-primary/20 transition-colors">
                                    <Image src="/vex_icon.svg" alt="Vex Icon" width={size} height={size} />
                                </div>
                                <div className="text-[10px] font-mono text-[var(--muted-foreground)]">{label}</div>
                                <div className="text-[9px] font-mono text-[var(--muted-foreground)]">{usage}</div>
                            </div>
                        ))}
                    </div>
                </DSSection>

                <DSSection id="vex-logo" label="02 · Vex Logo (Wordmark)">
                    <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed mb-6 max-w-lg">
                        Full wordmark for marketing and headers. <code className="text-[11px] font-mono text-[var(--muted-foreground)]">vex_logo.svg</code>.
                    </p>
                    <div className="flex flex-wrap items-end gap-10 mb-10">
                        {([
                            { height: 24, label: "Small (24px)", usage: "Footer, compact nav" },
                            { height: 32, label: "Medium (32px)", usage: "Standard navigation" },
                            { height: 48, label: "Large (48px)", usage: "Hero, marketing" },
                        ]).map(({ height, label, usage }) => (
                            <div key={height} className="flex flex-col items-start gap-4">
                                <div className="border border-[var(--color-line)] p-6 bg-[var(--background)] hover:border-primary/20 transition-colors">
                                    <Image src="/vex_logo.svg" alt="Vex Logo" width={100} height={height} className="w-auto" style={{ height }} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono text-[var(--muted-foreground)]">{label}</div>
                                    <div className="text-[9px] font-mono text-[var(--muted-foreground)]">{usage}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </DSSection>

                {/* ─── 03 · Favicon ─── */}
                <DSSection id="vex-favicon" label="03 · Favicon (Solid)">
                    <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed mb-6 max-w-lg">
                        Solid background version for browser tabs and app icons. <code className="text-[11px] font-mono text-[var(--muted-foreground)]">vex_favicon.svg</code>.
                    </p>
                    <div className="flex gap-6">
                        <div className="border border-[var(--color-line)] p-4 inline-block">
                            <Image src="/vex_favicon.svg" alt="Vex Favicon" width={32} height={32} />
                        </div>
                        <div className="p-2 inline-block">
                            <Image src="/vex_favicon.svg" alt="Vex Favicon" width={16} height={16} />
                        </div>
                    </div>
                </DSSection>
            </>)}

            {activeTab === "colors" && (<>
                {/* ─── 01 · Color Tokens ─── */}
                <DSSection id="colors" label="01 · Color Tokens">
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-6">Core Palette</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-12">
                        <Swatch label="Background" cssVar="--background" />
                        <Swatch label="Surface" cssVar="--card" />
                        <Swatch label="Foreground" cssVar="--foreground" />
                        <Swatch label="Muted FG" cssVar="--muted-foreground" />
                        <Swatch label="Primary" cssVar="--primary" />
                    </div>

                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-6">Borders & Lines</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-12">
                        <Swatch label="Border" cssVar="--border" />
                        <Swatch label="Line" cssVar="--color-line" />
                        <Swatch label="Line Soft" cssVar="--color-line-soft" />
                    </div>

                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-6">Complementary</h3>
                    <div className="grid grid-cols-4 gap-4 max-w-md">
                        <Swatch label="Lime" cssVar="--complementary-1" />
                        <Swatch label="Cyan" cssVar="--complementary-2" />
                        <Swatch label="Purple" cssVar="--complementary-3" />
                    </div>
                </DSSection>
            </>)}

            {activeTab === "type" && (<>
                {/* ─── 01 · Type Scale ─── */}
                <DSSection id="type-scale" label="01 · Type Scale">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[var(--color-line)]">
                                    {["Element", "Font", "Size", "Weight", "Tracking", "Leading", "Color"].map((h) => (
                                        <th key={h} className="py-3 pr-6 text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase whitespace-nowrap">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {([
                                    { el: "Hero H1", elClass: "text-3xl font-medium tracking-[-0.045em] text-[var(--foreground)]", font: "Inter", size: "clamp(3rem–6rem)", weight: "500", tracking: "−0.045em", leading: "0.9", color: "foreground" },
                                    { el: "Section H2", elClass: "text-2xl tracking-[-0.03em] text-[var(--foreground)]", font: "Inter", size: "2.25rem / 4xl", weight: "400", tracking: "−0.03em", leading: "1.15", color: "foreground" },
                                    { el: "Card Title H3", elClass: "text-base font-medium tracking-tight text-[var(--foreground)]", font: "Inter", size: "1rem / base", weight: "500", tracking: "tight", leading: "1.5", color: "foreground" },
                                    { el: "Body", elClass: "text-[15px] text-[var(--muted-foreground)]", font: "Inter", size: "15px", weight: "400", tracking: "normal", leading: "relaxed", color: "muted-foreground" },
                                    { el: "Small Body", elClass: "text-[13px] text-[var(--muted-foreground)]", font: "Inter", size: "13px", weight: "400", tracking: "normal", leading: "relaxed", color: "muted-foreground" },
                                    { el: "Eyebrow", elClass: "text-[10px] font-mono text-primary tracking-[0.2em] uppercase", font: "Chivo Mono", size: "10px", weight: "400", tracking: "0.2em", leading: "1", color: "primary" },
                                    { el: "Label / Number", elClass: "text-[10px] font-mono text-[var(--color-cross)] tracking-[0.2em]", font: "Chivo Mono", size: "10px", weight: "400", tracking: "0.2em", leading: "1", color: "cross" },
                                    { el: "Stat Label", elClass: "text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase", font: "Chivo Mono", size: "9px", weight: "400", tracking: "0.15em", leading: "1", color: "muted-foreground" },
                                    { el: "Code / Value", elClass: "text-[11px] font-mono text-[var(--muted-foreground)]", font: "Chivo Mono", size: "11px", weight: "400", tracking: "normal", leading: "1.4", color: "muted-foreground" },
                                    { el: "Stat Value", elClass: "text-2xl font-light font-mono tracking-tighter text-[var(--foreground)]", font: "Chivo Mono", size: "2.25rem / 4xl", weight: "300", tracking: "tighter", leading: "1", color: "foreground" },
                                    { el: "Highlight", elClass: "text-xl font-ttnp font-normal text-[var(--foreground)]", font: "TTNP", size: "inherit", weight: "400", tracking: "inherit", leading: "inherit", color: "foreground" },
                                ]).map((row, i) => (
                                    <tr key={i} className="border-b border-[var(--color-line-soft)] hover:bg-white/[0.01] transition-colors">
                                        <td className="py-4 pr-6"><span className={row.elClass}>{row.el}</span></td>
                                        <td className="py-4 pr-6 text-[11px] font-mono text-[var(--muted-foreground)]">{row.font}</td>
                                        <td className="py-4 pr-6 text-[11px] font-mono text-[var(--muted-foreground)]">{row.size}</td>
                                        <td className="py-4 pr-6 text-[11px] font-mono text-[var(--muted-foreground)]">{row.weight}</td>
                                        <td className="py-4 pr-6 text-[11px] font-mono text-[var(--muted-foreground)]">{row.tracking}</td>
                                        <td className="py-4 pr-6 text-[11px] font-mono text-[var(--muted-foreground)]">{row.leading}</td>
                                        <td className="py-4 pr-6 text-[11px] font-mono text-[var(--muted-foreground)]">{row.color}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </DSSection>

                {/* ─── 02 · Font Specimens ─── */}
                <DSSection id="type-specimens" label="02 · Font Specimens">
                    {/* Inter */}
                    <div className="mb-16">
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-6">Inter (--font-sans)</div>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.045em] leading-[0.9] mb-6 text-[var(--foreground)]">Privacy is a Human Right.</h1>
                        <h2 className="text-3xl md:text-4xl tracking-[-0.03em] mb-4 text-[var(--foreground)] leading-[1.15]">Section Heading H2</h2>
                        <h3 className="text-base font-medium mb-2 text-[var(--foreground)] tracking-tight">Card Title H3</h3>
                        <p className="text-[15px] text-[var(--muted-foreground)] leading-relaxed">Body text — 15px, relaxed leading. Section descriptions and card copy.</p>
                        <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed mt-2">Small body — 13px. Card descriptions and secondary text.</p>
                    </div>

                    {/* Chivo Mono */}
                    <div className="mb-16">
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-6">Chivo Mono (--font-mono)</div>
                        <div className="space-y-3">
                            <div className="text-[10px] font-mono text-primary tracking-[0.2em] uppercase">Section Eyebrow — 10px</div>
                            <div className="text-[10px] font-mono text-[var(--color-cross)] tracking-[0.2em]">Label / Number — 10px</div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase">Stat Label — 9px</div>
                            <div className="text-[11px] font-mono text-[var(--muted-foreground)]">Code / value — 11px</div>
                            <div className="text-3xl md:text-4xl font-light text-[var(--foreground)] font-mono tracking-tighter">100% — Stat Value</div>
                        </div>
                    </div>

                    {/* TTNP */}
                    <div className="mb-16">
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-6">ThatThatNewPixel (--font-ttnp) — Highlight</div>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl tracking-[-0.03em] text-[var(--foreground)] leading-[1.15]">
                                Messaging, <span className="font-ttnp font-normal relative z-10 py-4 px-3 -my-4 -mx-2 bg-background/5">Rewritten</span>
                            </h2>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.035em] text-[var(--foreground)] leading-[0.95]">
                                <span className="font-ttnp font-normal relative z-10 py-4 px-3 -my-4 -mx-2 bg-background/5">Free</span> from Surveillance
                            </h2>
                        </div>
                    </div>

                    {/* Scramble Text */}
                    <div>
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-6">Scramble Text</div>
                        <div className="max-w-lg space-y-3">
                            <div className="text-2xl font-medium text-[var(--foreground)]">
                                <ScrambleText text="Privacy is a Human Right." />
                            </div>
                            <div className="text-[13px] text-[var(--muted-foreground)]">
                                <ScrambleText text="End-to-end encrypted messaging for anyone." delay={400} />
                            </div>
                        </div>
                    </div>
                </DSSection>



            </>)}

            {activeTab === "buttons" && (<>
                {/* ─── 01 · Buttons ─── */}
                <DSSection id="buttons" label="01 · Buttons">
                    {/* LineButton variants */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-6">LineButton — Variants × Sizes</h3>
                    <div className="space-y-8 mb-14">
                        {(["primary", "outline", "ghost"] as const).map((variant) => (
                            <div key={variant}>
                                <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">{variant}</div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <LineButton variant={variant} size="sm">Small</LineButton>
                                    <LineButton variant={variant} size="default">Default</LineButton>
                                    <LineButton variant={variant} size="lg">Large</LineButton>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SimpleButton */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-6">SimpleButton</h3>
                    <div className="flex flex-wrap items-center gap-6">
                        <SimpleButton>Text Only</SimpleButton>
                        <SimpleButton>
                            <HugeiconsIcon icon={Shield01Icon} className="mr-1.5 w-4 h-4" />
                            With Icon
                        </SimpleButton>
                    </div>
                </DSSection>
            </>)}

            {activeTab === "structure" && (<>
                {/* ─── 01 · Overlays ─── */}
                <DSSection id="overlays" label="01 · Overlays">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Grain */}
                        <div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-3">Film Grain</div>
                            <div className="relative h-40 border border-[var(--color-line)] bg-background overflow-hidden">
                                <div className="grain-overlay !fixed:none absolute inset-0 !opacity-[0.08]"
                                    style={{ position: "absolute", opacity: 0.08 }} />
                            </div>
                        </div>
                        {/* CRT Scanlines */}
                        <div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-3">CRT Scanlines</div>
                            <div className="relative h-40 border border-[var(--color-line)] bg-background overflow-hidden">
                                <div className="crt-scanlines" />
                            </div>
                        </div>
                        {/* Shader Background */}
                        <div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-3">Shader Background</div>
                            <div className="relative h-40 border border-[var(--color-line)] overflow-hidden">
                                <ShaderBackground />
                            </div>
                        </div>
                        {/* Bracket Glow */}
                        <div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-3">Bracket Glow (hover)</div>
                            <div className="relative h-40 border border-[var(--color-line)] overflow-hidden bracket-glow group cursor-pointer">
                                <div className="absolute -top-px -left-px w-5 h-5 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-px h-full bg-primary/30" />
                                    <div className="absolute top-0 left-0 h-px w-full bg-primary/30" />
                                </div>
                                <div className="absolute -bottom-px -right-px w-5 h-5 pointer-events-none">
                                    <div className="absolute bottom-0 right-0 w-px h-full bg-primary/20" />
                                    <div className="absolute bottom-0 right-0 h-px w-full bg-primary/20" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center text-[11px] font-mono text-[var(--muted-foreground)] group-hover:text-[var(--muted-foreground)] transition-colors">hover me</div>
                            </div>
                        </div>
                    </div>
                </DSSection>

                {/* ─── 02 · Corner Brackets ─── */}
                <DSSection id="brackets" label="02 · Corner Brackets">
                    <div className="flex flex-wrap gap-12 items-end">
                        {/* Small */}
                        <div className="text-center">
                            <div className="relative w-16 h-16 border border-[var(--color-line)] group hover:bg-white/[0.01] transition-colors cursor-pointer">
                                <div className="absolute top-0 left-0 w-3 h-3 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-px h-full bg-primary/30" />
                                    <div className="absolute top-0 left-0 h-px w-full bg-primary/30" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 pointer-events-none">
                                    <div className="absolute bottom-0 right-0 w-px h-full bg-primary/20" />
                                    <div className="absolute bottom-0 right-0 h-px w-full bg-primary/20" />
                                </div>
                            </div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] mt-2">3px / sm</div>
                        </div>
                        {/* Medium */}
                        <div className="text-center">
                            <div className="relative w-24 h-24 border border-[var(--color-line)] group hover:bg-white/[0.01] transition-colors cursor-pointer">
                                <div className="absolute top-0 left-0 w-5 h-5 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-px h-full bg-primary/30" />
                                    <div className="absolute top-0 left-0 h-px w-full bg-primary/30" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none">
                                    <div className="absolute bottom-0 right-0 w-px h-full bg-primary/20" />
                                    <div className="absolute bottom-0 right-0 h-px w-full bg-primary/20" />
                                </div>
                            </div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] mt-2">5px / md</div>
                        </div>
                        {/* Large */}
                        <div className="text-center">
                            <div className="relative w-36 h-36 border border-[var(--color-line)] group hover:bg-white/[0.01] transition-colors cursor-pointer">
                                <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-px h-full bg-primary/30" />
                                    <div className="absolute top-0 left-0 h-px w-full bg-primary/30" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
                                    <div className="absolute bottom-0 right-0 w-px h-full bg-primary/20" />
                                    <div className="absolute bottom-0 right-0 h-px w-full bg-primary/20" />
                                </div>
                            </div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] mt-2">8px / lg</div>
                        </div>
                        {/* 4-corner */}
                        <div className="text-center">
                            <div className="relative w-48 h-32 border border-[var(--color-line)] overflow-hidden bracket-glow group cursor-pointer">
                                <div className="absolute -top-px -left-px w-5 h-5 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-px h-full bg-primary/30" />
                                    <div className="absolute top-0 left-0 h-px w-full bg-primary/30" />
                                </div>
                                <div className="absolute -top-px -right-px w-5 h-5 pointer-events-none">
                                    <div className="absolute top-0 right-0 w-px h-full bg-primary/30" />
                                    <div className="absolute top-0 right-0 h-px w-full bg-primary/30" />
                                </div>
                                <div className="absolute -bottom-px -left-px w-5 h-5 pointer-events-none">
                                    <div className="absolute bottom-0 left-0 w-px h-full bg-primary/20" />
                                    <div className="absolute bottom-0 left-0 h-px w-full bg-primary/20" />
                                </div>
                                <div className="absolute -bottom-px -right-px w-5 h-5 pointer-events-none">
                                    <div className="absolute bottom-0 right-0 w-px h-full bg-primary/20" />
                                    <div className="absolute bottom-0 right-0 h-px w-full bg-primary/20" />
                                </div>
                            </div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] mt-2">4-corner + bracket glow</div>
                        </div>
                    </div>
                </DSSection>

                {/* ─── 03 · Grid Lines ─── */}
                <DSSection id="gridlines" label="03 · Grid Lines">
                    <div className="relative h-48 border border-[var(--color-line-soft)] overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-line)]" />
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--color-line)]" />
                        <div className="absolute top-0 bottom-0 w-px bg-[var(--color-line-soft)]" style={{ left: "33.333%" }} />
                        <div className="absolute top-0 bottom-0 w-px bg-[var(--color-line-soft)]" style={{ left: "66.666%" }} />
                        <div className="absolute left-0 right-0 top-1/2 h-px bg-[var(--color-line)]" />
                        <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--color-cross)]">+</span>
                        <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--color-cross)]">+</span>
                        <span className="absolute top-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--color-cross)]" style={{ left: "33.333%" }}>+</span>
                        <span className="absolute top-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--color-cross)]" style={{ left: "66.666%" }}>+</span>
                    </div>
                </DSSection>

                {/* ─── 04 · Dividers ─── */}
                <DSSection id="dividers" label="04 · Dividers">
                    <div className="space-y-10 max-w-3xl">
                        <div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Section Divider</div>
                            <SectionDivider label="Example Label" />
                        </div>
                        <div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Horizontal Rule</div>
                            <div className="h-px w-full bg-[var(--color-line)]" />
                        </div>
                        <div>
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Soft Rule</div>
                            <div className="h-px w-full bg-[var(--color-line-soft)]" />
                        </div>
                    </div>
                </DSSection>

                {/* ─── 05 · Spacing Scale ─── */}
                <DSSection id="spacing" label="05 · Spacing Scale">
                    <div className="space-y-4 max-w-2xl">
                        {[
                            { label: "Section Padding (py-32)", value: "128px", width: "100%" },
                            { label: "Section Padding L (py-40)", value: "160px", width: "100%" },
                            { label: "Header → Content (mb-16)", value: "64px", width: "50%" },
                            { label: "Content → CTA (mb-14)", value: "56px", width: "44%" },
                            { label: "Eyebrow → Title (mb-3)", value: "12px", width: "9%" },
                            { label: "Title → Desc (mb-4)", value: "16px", width: "12.5%" },
                            { label: "Card Padding (p-8)", value: "32px", width: "25%" },
                            { label: "Component Gap (gap-6)", value: "24px", width: "18.7%" },
                            { label: "Tight Stack (gap-2.5)", value: "10px", width: "7.8%" },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-44 shrink-0 text-[11px] font-mono text-[var(--muted-foreground)]">{s.label}</div>
                                <div className="flex-1 relative h-5">
                                    <div className="absolute inset-y-0 left-0 bg-primary/15 border-l border-primary/40" style={{ width: s.width }} />
                                </div>
                                <div className="w-14 text-right text-[10px] font-mono text-[var(--muted-foreground)]">{s.value}</div>
                            </div>
                        ))}
                    </div>
                </DSSection>
            </>)}

            {activeTab === "blocks" && (<>
                {/* ─── 01 · Feature Row ─── */}
                <DSSection id="feature-row" label="01 · Feature Row">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line-soft)] max-w-4xl">
                        {[
                            { title: "Real-time Messaging", desc: "Instant delivery with minimal latency.", icon: Message01Icon, num: "01" },
                            { title: "Secure One-to-One", desc: "Perfect forward secrecy ensures past messages stay safe.", icon: LockKeyIcon, num: "02" },
                            { title: "Cross-border", desc: "Designed to resist regional blocking and censorship.", icon: Globe02Icon, num: "03" },
                        ].map((f, i) => (
                            <TiltCardDemo key={i} feature={f} index={i} />
                        ))}
                    </div>
                </DSSection>

                {/* ─── 02 · Pillar Row ─── */}
                <DSSection id="pillar-row" label="02 · Pillar Row">
                    <div className="max-w-3xl border-[var(--color-line)]">
                        <div className="group relative flex items-start gap-6 py-7 border-[var(--color-line-soft)] hover:bg-white/[0.008] transition-colors duration-400 px-1">
                            <div className="text-[10px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] shrink-0 pt-1 w-7">01</div>
                            <div className="w-10 h-10 border border-[var(--color-line)] flex items-center justify-center text-[var(--muted-foreground)] group-hover:text-primary group-hover:border-primary/20 transition-all duration-500 shrink-0">
                                <HugeiconsIcon icon={Shield01Icon} size={17} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-[15px] font-medium text-[var(--foreground)] tracking-tight mb-1.5 group-hover:text-[var(--foreground)] transition-colors">End-to-End Encryption</h3>
                                <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed group-hover:text-[var(--muted-foreground)] transition-colors duration-300">Only you and the recipient can read messages.</p>
                            </div>
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-primary/20 group-hover:w-full transition-all duration-700 ease-out" />
                        </div>
                    </div>
                </DSSection>

                {/* ─── 03 · Comparison Row ─── */}
                <DSSection id="comparison-row" label="03 · Comparison Row">
                    <div className="max-w-2xl border border-[var(--color-line)] overflow-hidden">
                        <div className="grid grid-cols-3 py-3.5 px-5 border-[var(--color-line)] bg-white/[0.01]">
                            <div className="text-[10px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase">Feature</div>
                            <div className="text-center text-[10px] font-mono text-[#91E643]/80 tracking-[0.15em] uppercase font-medium">Vex</div>
                            <div className="text-center text-[10px] font-mono text-[#E70000] tracking-[0.15em] uppercase">Others</div>
                        </div>
                        <div className="grid grid-cols-3 items-center py-4 px-5 border-[var(--color-line-soft)] hover:bg-white/[0.01] transition-colors duration-300 group">
                            <div className="text-[13px] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">Open Source</div>
                            <div className="flex justify-center"><div className="flex items-center gap-1.5 text-[#91E643]"><HugeiconsIcon icon={CheckmarkCircle02Icon} size={15} /><span className="text-[11px] font-mono">Yes</span></div></div>
                            <div className="flex justify-center"><div className="flex items-center gap-1.5 text-[#E70000]"><HugeiconsIcon icon={Cancel01Icon} size={15} /><span className="text-[11px] font-mono">No</span></div></div>
                        </div>
                        <div className="grid grid-cols-3 items-center py-4 px-5 hover:bg-white/[0.01] transition-colors duration-300 group">
                            <div className="text-[13px] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">Metadata Retention</div>
                            <div className="flex justify-center"><span className="text-[11px] font-mono text-[#91E643]/80 px-2.5 py-0.5 border border-[#91E643]/15">Minimal</span></div>
                            <div className="flex justify-center"><span className="text-[11px] font-mono text-[#E70000] px-2.5 py-0.5 border border-[#E70000]/15">Extensive</span></div>
                        </div>
                    </div>
                </DSSection>

                {/* ─── 04 · Animations ─── */}
                <DSSection id="animations" label="04 · Animations">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Float */}
                        <div className="text-center">
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Float</div>
                            <div className="flex justify-center">
                                <div className="animate-float w-12 h-12 border border-[var(--color-line)] bg-primary/5" />
                            </div>
                            <div className="text-[10px] font-mono text-[var(--muted-foreground)] mt-3">7s ease-in-out ∞</div>
                        </div>
                        {/* Breathe */}
                        <div className="text-center">
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Breathe</div>
                            <div className="flex justify-center">
                                <div className="animate-breathe w-12 h-12 border border-[var(--color-line)] bg-primary/10" />
                            </div>
                            <div className="text-[10px] font-mono text-[var(--muted-foreground)] mt-3">5s ease-in-out ∞</div>
                        </div>
                        {/* Pulse Glow */}
                        <div className="text-center">
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Pulse Glow</div>
                            <div className="flex justify-center">
                                <div className="animate-pulse-glow w-12 h-12 border border-[var(--color-line)] bg-primary/10" />
                            </div>
                            <div className="text-[10px] font-mono text-[var(--muted-foreground)] mt-3">4s ease-in-out ∞</div>
                        </div>
                        {/* Ping */}
                        <div className="text-center">
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Ping (badge dot)</div>
                            <div className="flex justify-center">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute h-full w-full bg-[#E70000] opacity-75" />
                                    <span className="relative h-3 w-3 bg-[#E70000]" />
                                </span>
                            </div>
                            <div className="text-[10px] font-mono text-[var(--muted-foreground)] mt-3">tailwind ping</div>
                        </div>
                    </div>
                </DSSection>
            </>)}


            {activeTab === "icons" && (<>
                <DSSection id="icons" label="01 · Feather Icons">
                    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
                        {/* LEFT — Icon Sizes */}
                        <div className="md:sticky md:top-8 self-start">
                            <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Icon Sizes</h3>
                            <p className="text-[11px] text-[var(--muted-foreground)] leading-relaxed mb-6">
                                Standard sizes for consistent usage. All icons sit on a 24×24 grid.
                            </p>
                            <div className="flex flex-col gap-5">
                                {([
                                    { size: 12, label: "12px", usage: "Inline labels, meta" },
                            { size: 14, label: "14px", usage: "Compact UI, badges" },
                            { size: 16, label: "16px", usage: "Body text, inputs" },
                            { size: 18, label: "18px", usage: "Default" },
                            { size: 20, label: "20px", usage: "Buttons, nav items" },
                            { size: 24, label: "24px", usage: "Headers, toolbar" },
                            { size: 32, label: "32px", usage: "Hero, empty states" },
                        ]).map(({ size, label, usage }) => (
                            <div key={size} className="flex items-center gap-4">
                                <div className="border border-[var(--color-line)] flex items-center justify-center shrink-0 hover:border-primary/20 transition-colors" style={{ width: size + 20, height: size + 20 }}>
                                    <Home size={size} className="text-[var(--muted-foreground)]" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[10px] font-mono text-[var(--muted-foreground)]">{label}</div>
                                    <div className="text-[9px] font-mono text-[var(--muted-foreground)]">{usage}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a
                        href="https://feathericons.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-mono text-primary hover:text-[var(--foreground)] transition-colors mt-8 group"
                    >
                        Browse full collection
                        <ExternalLink size={11} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>

                {/* RIGHT — Icon Collection */}
                <div className="min-w-0">
                    {/* Navigation */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">Navigation</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 mb-10">
                        {([
                            ["Home", Home], ["Search", Search], ["Menu", Menu], ["X", X],
                            ["ChevronDown", ChevronDown], ["ChevronUp", ChevronUp], ["ChevronLeft", ChevronLeft], ["ChevronRight", ChevronRight],
                            ["ArrowRight", ArrowRight], ["ArrowLeft", ArrowLeft], ["ArrowUp", ArrowUp], ["ArrowDown", ArrowDown],
                            ["ExternalLink", ExternalLink], ["Link", LinkIcon],
                        ] as [string, FeatherIconType][]).map(([name, Icon]) => (
                            <div key={name} className="flex flex-col items-center gap-2">
                                <div className="w-full aspect-square border border-[var(--color-line)] flex items-center justify-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all">
                                    <Icon size={18} className="text-[var(--muted-foreground)]" />
                                </div>
                                <div className="text-[8px] font-mono text-[var(--muted-foreground)] truncate w-full text-center">{name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Communication */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">Communication</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 mb-10">
                        {([
                            ["MessageSquare", MessageSquare], ["MessageCircle", MessageCircle], ["Send", Send], ["Mail", Mail],
                            ["Bell", Bell], ["BellOff", BellOff], ["Phone", Phone], ["Video", Video],
                        ] as [string, FeatherIconType][]).map(([name, Icon]) => (
                            <div key={name} className="flex flex-col items-center gap-2">
                                <div className="w-full aspect-square border border-[var(--color-line)] flex items-center justify-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all">
                                    <Icon size={18} className="text-[var(--muted-foreground)]" />
                                </div>
                                <div className="text-[8px] font-mono text-[var(--muted-foreground)] truncate w-full text-center">{name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Media */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">Media</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 mb-10">
                        {([
                            ["Image", ImageIcon], ["Camera", Camera], ["Film", Film], ["Music", Music],
                            ["Mic", Mic], ["MicOff", MicOff], ["Volume2", Volume2], ["VolumeX", VolumeX],
                        ] as [string, FeatherIconType][]).map(([name, Icon]) => (
                            <div key={name} className="flex flex-col items-center gap-2">
                                <div className="w-full aspect-square border border-[var(--color-line)] flex items-center justify-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all">
                                    <Icon size={18} className="text-[var(--muted-foreground)]" />
                                </div>
                                <div className="text-[8px] font-mono text-[var(--muted-foreground)] truncate w-full text-center">{name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Interface */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">Interface</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 mb-10">
                        {([
                            ["Plus", Plus], ["Minus", Minus], ["Edit2", Edit2], ["Trash2", Trash2],
                            ["Copy", Copy], ["Clipboard", Clipboard], ["Download", Download], ["Upload", Upload],
                            ["Share2", Share2], ["Filter", Filter], ["Sliders", Sliders], ["RefreshCw", RefreshCw],
                            ["Settings", Settings], ["MoreHorizontal", MoreHorizontal], ["MoreVertical", MoreVertical], ["Loader", Loader],
                            ["Maximize2", Maximize2], ["Minimize2", Minimize2], ["ToggleLeft", ToggleLeft], ["ToggleRight", ToggleRight],
                        ] as [string, FeatherIconType][]).map(([name, Icon]) => (
                            <div key={name} className="flex flex-col items-center gap-2">
                                <div className="w-full aspect-square border border-[var(--color-line)] flex items-center justify-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all">
                                    <Icon size={18} className="text-[var(--muted-foreground)]" />
                                </div>
                                <div className="text-[8px] font-mono text-[var(--muted-foreground)] truncate w-full text-center">{name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Users & Social */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">Users &amp; Social</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 mb-10">
                        {([
                            ["User", User], ["Users", Users], ["UserPlus", UserPlus], ["UserCheck", UserCheck],
                            ["Heart", Heart], ["Star", Star], ["Bookmark", Bookmark], ["Flag", Flag],
                            ["ThumbsUp", ThumbsUp], ["Award", Award], ["Eye", Eye], ["EyeOff", EyeOff],
                        ] as [string, FeatherIconType][]).map(([name, Icon]) => (
                            <div key={name} className="flex flex-col items-center gap-2">
                                <div className="w-full aspect-square border border-[var(--color-line)] flex items-center justify-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all">
                                    <Icon size={18} className="text-[var(--muted-foreground)]" />
                                </div>
                                <div className="text-[8px] font-mono text-[var(--muted-foreground)] truncate w-full text-center">{name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Status & Feedback */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">Status &amp; Feedback</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 mb-10">
                        {([
                            ["Check", Check], ["CheckCircle", CheckCircle], ["XCircle", XCircle],
                            ["AlertTriangle", AlertTriangle], ["AlertCircle", AlertCircle],
                            ["Info", Info], ["HelpCircle", HelpCircle],
                            ["Lock", Lock], ["Unlock", Unlock], ["Shield", Shield], ["Key", Key],
                        ] as [string, FeatherIconType][]).map(([name, Icon]) => (
                            <div key={name} className="flex flex-col items-center gap-2">
                                <div className="w-full aspect-square border border-[var(--color-line)] flex items-center justify-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all">
                                    <Icon size={18} className="text-[var(--muted-foreground)]" />
                                </div>
                                <div className="text-[8px] font-mono text-[var(--muted-foreground)] truncate w-full text-center">{name}</div>
                            </div>
                        ))}
                    </div>

                    {/* System & Dev */}
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-4">System &amp; Dev</h3>
                    <div className="grid grid-cols-6 sm:grid-cols-8 gap-4 mb-10">
                        {([
                            ["Globe", Globe], ["Wifi", Wifi], ["WifiOff", WifiOff], ["Zap", Zap],
                            ["Activity", Activity], ["Clock", Clock], ["Calendar", Calendar], ["Hash", Hash],
                            ["Code", Code], ["Terminal", Terminal], ["GitBranch", GitBranch], ["Database", Database],
                            ["Monitor", Monitor], ["Smartphone", Smartphone], ["Grid", Grid], ["Layers", Layers],
                            ["Layout", Layout], ["Sidebar", Sidebar], ["Sun", Sun], ["Moon", Moon],
                            ["LogIn", LogIn], ["LogOut", LogOut], ["Power", Power],
                            ["FileText", FileText], ["Folder", Folder], ["File", File], ["FolderPlus", FolderPlus], ["Archive", Archive],
                        ] as [string, FeatherIconType][]).map(([name, Icon]) => (
                            <div key={name} className="flex flex-col items-center gap-2">
                                <div className="w-full aspect-square border border-[var(--color-line)] flex items-center justify-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all">
                                    <Icon size={18} className="text-[var(--muted-foreground)]" />
                                </div>
                                <div className="text-[8px] font-mono text-[var(--muted-foreground)] truncate w-full text-center">{name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DSSection>
    </>)
}

{
    activeTab === "app" && (<>
        <DSSection id="app-interface" label="01 · App Interface">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
                {/* LEFT — Tree Navigation */}
                <div className="md:sticky md:top-8 self-start">
                    <AppInterfaceTreeNav />
                </div>

                {/* RIGHT — Content Sections */}
                <div className="space-y-20">

                    {/* ═══ ALL (Full Mockup) ═══ */}
                    <div id="sec-full-mockup">
                        <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Full Mockup</h3>
                        <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed mb-4 max-w-lg">
                            All panels composed together as a usable onboarding preview. Click servers, switch channels, and send messages.
                        </p>
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-6">interactive · all four panels assembled</div>
                        <div
                            className="h-[600px] w-full max-w-5xl border border-[var(--color-line)] bg-[var(--background)] overflow-hidden rounded-[5px] transition-all duration-500"
                            style={{ '--server-accent': serverAccent } as React.CSSProperties}
                        >
                            <div className="flex items-start size-full p-[10px] bg-[var(--background)]">
                                <AppMockupServerSidebar onServerChange={setServerAccent} />
                                <AppMockupNavigationSidebar />
                                <AppMockupChatArea />
                                <AppMockupMemberSidebar />
                            </div>
                        </div>
                    </div>

                    {/* ═══ APP COMPONENTS ═══ */}

                    {/* Server Sidebar */}
                    <div id="sec-server-sidebar">
                        <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Server Sidebar</h3>
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-3">45px wide · 4 themed servers · hover to preview color</div>
                        <div className="h-[400px] w-[45px] border border-[var(--color-line)] bg-[var(--background)] overflow-hidden">
                            <AppMockupServerSidebar />
                        </div>
                    </div>

                    {/* Navigation Sidebar */}
                    <div id="sec-nav-sidebar">
                        <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Navigation Sidebar</h3>
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-3">230px wide · channels, links, user profile</div>
                        <div
                            className="h-[500px] w-[230px] border border-[var(--color-line)] bg-[var(--background)] overflow-hidden"
                            style={{ '--server-accent': '#E70000' } as React.CSSProperties}
                        >
                            <AppMockupNavigationSidebar />
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div id="sec-chat-area">
                        <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Chat Area</h3>
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-3">flexible width · message list with functional input</div>
                        <div className="h-[400px] max-w-2xl border border-[var(--color-line)] bg-[var(--background)] overflow-hidden">
                            <AppMockupChatArea />
                        </div>
                    </div>

                    {/* Member Sidebar */}
                    <div id="sec-member-sidebar">
                        <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Member Sidebar</h3>
                        <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-3">148px wide · admin, bot, member 3-col avatar grid</div>
                        <div className="h-[400px] w-[148px] border border-[var(--color-line)] bg-[var(--background)] overflow-hidden">
                            <AppMockupMemberSidebar />
                        </div>
                    </div>

                    {/* ═══ GENERALITIES ═══ */}

                    {/* Taskbar */}
                    <div id="sec-taskbar">
                        <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Taskbar</h3>
                        <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed mb-6 max-w-lg">
                            Platform-specific window chrome and title bar behavior.
                        </p>

                        <div id="sec-taskbar-windows" className="mb-10">
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Windows</div>
                            <div className="h-32 border border-dashed border-[var(--color-line-soft)] flex items-center justify-center">
                                <span className="text-[11px] font-mono text-[var(--muted-foreground)]">Windows taskbar · custom title bar with min/max/close</span>
                            </div>
                        </div>

                        <div id="sec-taskbar-macos" className="mb-10">
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">macOS</div>
                            <div className="h-32 border border-dashed border-[var(--color-line-soft)] flex items-center justify-center">
                                <span className="text-[11px] font-mono text-[var(--muted-foreground)]">macOS traffic lights · native frame integration</span>
                            </div>
                        </div>

                        <div id="sec-taskbar-linux" className="mb-10">
                            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Linux</div>
                            <div className="h-32 border border-dashed border-[var(--color-line-soft)] flex items-center justify-center">
                                <span className="text-[11px] font-mono text-[var(--muted-foreground)]">Linux · GTK / KDE adaptive chrome</span>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    <div id="sec-modal">
                        <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Modal</h3>
                        <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed mb-6 max-w-lg">
                            Overlay dialogs for settings, confirmations, and focused workflows.
                        </p>
                        <div className="h-48 border border-dashed border-[var(--color-line-soft)] flex items-center justify-center">
                            <span className="text-[11px] font-mono text-[var(--muted-foreground)]">Modal component · backdrop blur · escape to close</span>
                        </div>
                    </div>

                    {/* Embed */}
                    <div id="sec-embed">
                        <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">Embed</h3>
                        <p className="text-[13px] text-[var(--muted-foreground)] leading-relaxed mb-6 max-w-lg">
                            Rich content previews for links, images, and media within chat.
                        </p>
                        <div className="h-48 border border-dashed border-[var(--color-line-soft)] flex items-center justify-center">
                            <span className="text-[11px] font-mono text-[var(--muted-foreground)]">Embed card · OG meta · image/video preview</span>
                        </div>
                    </div>

                </div>
            </div>
        </DSSection>
    </>)
}

{/* Bottom padding */ }
<div className="h-32" />
        </main >
    );
}


/* ─── App Interface Tree Nav ─── */

type TreeNode = { label: string; id?: string; children?: TreeNode[] };

const appInterfaceTree: TreeNode[] = [
    {
        label: "Mainframe", id: "sec-full-mockup",
        children: [
            {
                label: "App",
                children: [
                    { label: "Server Sidebar", id: "sec-server-sidebar" },
                    { label: "Navigation Sidebar", id: "sec-nav-sidebar" },
                    { label: "Chat Area", id: "sec-chat-area" },
                    { label: "Member Sidebar", id: "sec-member-sidebar" },
                ],
            },
            {
                label: "Generalities",
                children: [
                    {
                        label: "Taskbar", id: "sec-taskbar",
                        children: [
                            { label: "Windows", id: "sec-taskbar-windows" },
                            { label: "macOS", id: "sec-taskbar-macos" },
                            { label: "Linux", id: "sec-taskbar-linux" },
                        ],
                    },
                    { label: "Modal", id: "sec-modal" },
                    { label: "Embed", id: "sec-embed" },
                ],
            },
        ],
    },
];

function TreeNavItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
    const [open, setOpen] = useState(true);
    const hasChildren = node.children && node.children.length > 0;

    function handleClick() {
        if (node.id) {
            document.getElementById(node.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (hasChildren) setOpen(!open);
    }

    return (
        <div>
            <button
                onClick={handleClick}
                className={`w-full text-left flex items-center gap-1.5 py-1 transition-colors hover:text-[var(--foreground)] ${node.id
                    ? "text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer"
                    : "text-[var(--foreground)] font-medium"
                    }`}
                style={{ paddingLeft: depth * 16 }}
            >
                <ChevronRight
                    size={10}
                    className={`shrink-0 transition-transform duration-200 ${hasChildren && open ? "rotate-90" : ""} ${!hasChildren ? "opacity-40" : ""}`}
                />
                <span className={`text-[11px] font-mono tracking-wide ${depth === 0 ? "text-[10px] uppercase tracking-[0.15em]" : ""}`}>
                    {node.label}
                </span>
            </button>
            {hasChildren && open && (
                <div>
                    {node.children!.map((child) => (
                        <TreeNavItem key={child.label} node={child} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
}

function AppInterfaceTreeNav() {
    return (
        <nav className="space-y-1">
            <div className="text-[9px] font-mono text-[var(--muted-foreground)] tracking-[0.15em] uppercase mb-4">Navigation</div>
            {appInterfaceTree.map((node) => (
                <TreeNavItem key={node.label} node={node} />
            ))}
        </nav>
    );
}

/* ─── Tilt Card Demo (isolated from features.tsx) ─── */

function TiltCardDemo({ feature, index }: { feature: { title: string; desc: string; icon: any; num: string }; index: number }) {
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
        <div className="perspective-container bg-background">
            <motion.div
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
                className="feature-card group relative p-8 border border-[var(--color-line)] bg-transparent hover:bg-white/[0.015] transition-[background-color,border-color,box-shadow] duration-500 overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-5 h-5 group-hover:w-6 group-hover:h-6 pointer-events-none transition-all duration-500">
                    <div className="absolute top-0 left-0 w-px h-full bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
                    <div className="absolute top-0 left-0 h-px w-full bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5 group-hover:w-6 group-hover:h-6 pointer-events-none transition-all duration-500">
                    <div className="absolute bottom-0 right-0 w-px h-full bg-primary/10 group-hover:bg-primary/30 transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 h-px w-full bg-primary/10 group-hover:bg-primary/30 transition-colors duration-500" />
                </div>

                <div className="relative z-10 text-[10px] font-mono text-[var(--color-cross)] tracking-[0.2em] mb-5">{feature.num}</div>
                <div className="relative z-10 w-10 h-10 border border-[var(--color-line)] flex items-center justify-center mb-7 text-primary group-hover:border-primary/25 group-hover:bg-primary/5 transition-all duration-500">
                    <HugeiconsIcon icon={feature.icon} size={18} />
                </div>
                <h3 className="relative z-10 text-base font-medium mb-2 text-[var(--foreground)] tracking-tight">{feature.title}</h3>
                <p className="relative z-10 text-[13px] text-[var(--muted-foreground)] leading-relaxed">{feature.desc}</p>
            </motion.div>
        </div>
    );
}
