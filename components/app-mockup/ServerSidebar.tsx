"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, BarChart2 } from "react-feather";

interface Server {
    id: number;
    type: "brand" | "avatar" | "icon";
    image?: string;
    label?: string;
    accent: string; // CSS color value
}

// Colors from colors.css mapped to globals.css variables
const SERVER_THEMES = {
    red: "var(--primary)",
    lime: "var(--complementary-1)",
    cyan: "var(--complementary-2)",
    purple: "var(--complementary-3)",
    green: "var(--complementary-4)",
} as const;

interface Props {
    onServerChange?: (accent: string) => void;
}

export function AppMockupServerSidebar({ onServerChange }: Props) {
    const [activeServer, setActiveServer] = useState(1);
    const [hoveredServer, setHoveredServer] = useState<number | null>(null);

    const servers: Server[] = [
        { id: 0, type: "avatar", image: "/app-mockup/84af07e5b5945abd518f011e0c5755e89583b692.png", label: "Yuki's Lair", accent: SERVER_THEMES.red },
        { id: 2, type: "avatar", image: "/app-mockup/092a28cefac460d7f224528c32e939ea003cd45c.png", label: "Chill Zone", accent: SERVER_THEMES.lime },
        { id: 3, type: "avatar", image: "/app-mockup/23d6bc79fb16acdd5f8fcf16070d7fb6c901c68a.png", label: "Dev Hub", accent: SERVER_THEMES.cyan },
        { id: 4, type: "avatar", image: "/app-mockup/fc2adae4b89d8055eb9a5d0f324fcd6122191472.png", label: "Creative", accent: SERVER_THEMES.purple },
        { id: 5, type: "icon", label: "VH", accent: SERVER_THEMES.green },
    ];

    useEffect(() => {
        const active = servers.find(s => s.id === activeServer);
        if (active && onServerChange) {
            onServerChange(active.accent);
        }
    }, [activeServer]);

    return (
        <div className="mockup-server-sidebar flex flex-col h-full shrink-0 border-l border-t border-[var(--border)]">
            {/* Brand Icon */}
            <div className="flex items-center justify-center size-[45px] bg-[var(--background)]">
                <Image
                    src="/vex_icon.svg"
                    alt="Vex"
                    width={20}
                    height={19}
                    className="opacity-80"
                />
            </div>

            {/* Server Icons */}
            <div className="flex flex-col flex-1 min-h-0 overflow-auto" style={{ scrollbarWidth: 'none' }}>
                {servers.map((server) => {
                    const isActive = activeServer === server.id;
                    const isHovered = hoveredServer === server.id;
                    return (
                        <div
                            key={server.id}
                            className="relative size-[45px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setActiveServer(server.id)}
                            onMouseEnter={() => setHoveredServer(server.id)}
                            onMouseLeave={() => setHoveredServer(null)}
                        >
                            <div className="flex items-center justify-center size-full overflow-hidden p-[10px]">
                                {server.type === "avatar" && server.image ? (
                                    <div className="relative size-[32px] rounded-[5px] overflow-hidden">
                                        <Image
                                            src={server.image}
                                            alt={server.label || ""}
                                            fill
                                            className="object-cover"
                                            sizes="32px"
                                        />
                                    </div>
                                ) : (
                                    <div className="size-[32px] rounded-[5px] bg-[var(--muted)] flex items-center justify-center">
                                        <span className="text-[10px] font-mono text-[var(--muted-foreground)]">{server.label}</span>
                                    </div>
                                )}
                            </div>
                            <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
                            {/* Active indicator — uses server accent color */}
                            {isActive && (
                                <div
                                    className="absolute inset-0 border-l-2 pointer-events-none transition-colors duration-300"
                                    style={{ borderColor: server.accent }}
                                />
                            )}
                            {/* Hover indicator — shows target server color */}
                            {!isActive && isHovered && (
                                <div
                                    className="absolute inset-0 border-l-2 pointer-events-none opacity-40 transition-opacity duration-200"
                                    style={{ borderColor: server.accent }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Bottom Utility Icons */}
            <div className="h-[10px] shrink-0" />
            <div className="flex flex-col shrink-0">
                <div className="h-[20px] relative w-[45px]">
                    <div className="flex items-center justify-center size-full">
                        <Plus size={12} className="text-[var(--muted-foreground)]" />
                    </div>
                    <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
                </div>
                <div className="h-[20px] relative w-[45px]">
                    <div className="flex items-center justify-center size-full">
                        <BarChart2 size={12} className="text-[var(--muted-foreground)]" />
                    </div>
                    <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
                </div>
            </div>
        </div>
    );
}
