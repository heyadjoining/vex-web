"use client";

import { useState } from "react";
import Image from "next/image";
import { Home, Calendar, FileText, Grid, Hash, ChevronDown, ChevronRight, Plus, Mic, Settings } from "react-feather";

interface Channel {
    id: string;
    name: string;
    type: "text" | "voice";
}

export function AppMockupNavigationSidebar() {
    const [selectedChannel, setSelectedChannel] = useState("general");

    const channels: Channel[] = [
        { id: "general", name: "general", type: "text" },
        { id: "memes", name: "memes", type: "text" },
    ];

    const navItems = [
        { label: "Home", icon: Home },
        { label: "2 Events", icon: Calendar },
        { label: "news", icon: FileText },
        { label: "Channels & Roles", icon: Grid },
    ];

    return (
        <div className="mockup-nav-sidebar bg-white/[0.02] flex flex-col h-full shrink-0 w-[230px]">
            <div className="flex-1 min-h-0 relative overflow-hidden">
                <div className="flex flex-col size-full overflow-auto" style={{ scrollbarWidth: 'none' }}>
                    {/* Banner */}
                    <div className="h-[120px] relative shrink-0 w-full">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src="/app-mockup/84af07e5b5945abd518f011e0c5755e89583b692.png"
                                    alt="Server banner"
                                    fill
                                    className="object-cover"
                                    sizes="230px"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                        </div>
                        <div className="relative flex items-start p-2 size-full z-10">
                            <div className="flex flex-1 gap-[7px] items-center overflow-hidden">
                                <svg className="size-3 shrink-0" viewBox="0 0 12 12" fill="var(--server-accent)">
                                    <circle cx="6" cy="6" r="5" />
                                </svg>
                                <p className="flex-1 font-mono font-light text-[10px] text-[var(--foreground)] truncate tracking-wide">YUKI&apos;S LAIR</p>
                                <ChevronDown size={12} className="text-[var(--foreground)] shrink-0" />
                            </div>
                        </div>
                        <div className="absolute inset-0 border-b border-[var(--server-accent)] opacity-50 pointer-events-none" />
                    </div>

                    {/* Navigation Links */}
                    <div className="shrink-0 w-full">
                        <div className="flex flex-col px-2 py-4">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="flex gap-[10px] items-center py-1 cursor-pointer hover:opacity-80 transition-opacity overflow-hidden">
                                        <Icon size={12} className="text-[var(--muted-foreground)] shrink-0" />
                                        <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Channels Section */}
                    <div className="shrink-0 w-full">
                        <div className="flex flex-col px-2 py-4">
                            <div className="flex gap-[10px] items-center py-1">
                                <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">Main</span>
                                <div className="flex-1 h-px bg-[var(--muted-foreground)] opacity-15" />
                                <ChevronRight size={10} className="text-[var(--muted-foreground)]" />
                            </div>

                            {channels.map((channel) => (
                                <div
                                    key={channel.id}
                                    className={`relative shrink-0 w-full cursor-pointer hover:opacity-80 transition-opacity ${selectedChannel === channel.id ? "bg-[var(--server-accent)]/10" : ""}`}
                                    onClick={() => setSelectedChannel(channel.id)}
                                >
                                    <div className="flex items-center gap-[10px] p-1">
                                        <Hash size={12} className={`shrink-0 ${selectedChannel === channel.id ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`} />
                                        <span className={`font-mono font-light text-[10px] ${selectedChannel === channel.id ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`}>
                                            {channel.name}
                                        </span>
                                    </div>
                                    {selectedChannel === channel.id && (
                                        <>
                                            <div className="absolute bottom-0 right-0 size-1">
                                                <div className="absolute inset-0 border-b border-r border-[var(--server-accent)] pointer-events-none" />
                                            </div>
                                            <div className="absolute left-0 top-0 size-1">
                                                <div className="absolute inset-0 border-l border-t border-[var(--server-accent)] pointer-events-none" />
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="shrink-0 w-full">
                        <div className="flex flex-col px-2 py-4">
                            <div className="flex gap-[10px] items-center py-1">
                                <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">Links</span>
                                <div className="flex-1 h-px bg-[var(--muted-foreground)] opacity-15" />
                                <ChevronDown size={12} className="text-[var(--muted-foreground)] shrink-0" />
                            </div>

                            <div className="flex gap-[10px] items-center py-1">
                                <div className="bg-[var(--server-accent)]/10 flex items-center justify-center shrink-0 relative">
                                    <div className="absolute inset-0 border border-[var(--server-accent)] pointer-events-none" />
                                    <Plus size={12} className="text-[var(--server-accent)]" />
                                </div>
                                <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">AI</span>
                            </div>
                            <div className="flex gap-[10px] items-center py-1">
                                <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">Events</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
            </div>

            {/* User Profile */}
            <div className="h-[40px] relative shrink-0 w-full">
                <div className="flex gap-2 items-center size-full overflow-hidden">
                    <div className="relative size-[40px] shrink-0">
                        <Image
                            src="/app-mockup/4d1efbde78c9d114a06a8cd8bba31c1c73baa724.png"
                            alt="Yuki"
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                        <div className="absolute bottom-0 right-0 size-3 bg-[var(--server-accent)]">
                            <div className="absolute inset-0 border border-[var(--server-accent)] opacity-50 pointer-events-none" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0 justify-center overflow-hidden">
                        <p className="font-sans font-bold text-[12px] text-[var(--foreground)] truncate">Yuki</p>
                        <p className="font-mono font-light text-[10px] text-[var(--foreground)]">online</p>
                    </div>
                    <div className="flex gap-4 items-center px-2 shrink-0">
                        <Mic size={16} className="text-[var(--muted-foreground)]" />
                        <Settings size={16} className="text-[var(--muted-foreground)]" />
                    </div>
                </div>
                <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
            </div>
        </div>
    );
}
