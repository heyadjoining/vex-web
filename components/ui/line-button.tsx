"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * LineButton — standardized button matching the card/box aesthetic.
 * Uses real DOM elements for corner brackets (no ::before/::after conflicts).
 *
 * Variants: primary | outline | ghost
 * Sizes:    sm | default | lg
 */

type LineButtonVariant = "primary" | "outline" | "ghost";
type LineButtonSize = "sm" | "default" | "lg";

interface LineButtonProps {
    children: React.ReactNode;
    variant?: LineButtonVariant;
    size?: LineButtonSize;
    href?: string;
    external?: boolean;
    className?: string;
    onClick?: () => void;
}

const sizeClasses: Record<LineButtonSize, string> = {
    sm: "h-8 px-5 text-[13px]",
    default: "h-11 px-8 text-[13px]",
    lg: "h-[3.25rem] px-10 text-sm",
};

const variantClasses: Record<LineButtonVariant, string> = {
    primary:
        "bg-transparent text-zinc-400 border-[var(--color-line)] hover:bg-primary/[0.03] hover:text-white hover:border-primary/[0.2]",
    outline:
        "bg-transparent text-zinc-400 border-[var(--color-line)] hover:bg-primary/[0.03] hover:text-white hover:border-primary/[0.2]",
    ghost:
        "bg-transparent text-zinc-600 border-transparent hover:text-zinc-300 hover:bg-primary/[0.02]",
};

/* Bracket opacity per variant */
const bracketOpacity: Record<LineButtonVariant, { tl: string; br: string; tlHover: string; brHover: string }> = {
    primary: { tl: "bg-primary/50", br: "bg-primary/35", tlHover: "group-hover:bg-primary/80", brHover: "group-hover:bg-primary/70" },
    outline: { tl: "bg-primary/25", br: "bg-primary/15", tlHover: "group-hover:bg-primary/60", brHover: "group-hover:bg-primary/50" },
    ghost: { tl: "bg-primary/0", br: "bg-primary/0", tlHover: "group-hover:bg-primary/30", brHover: "group-hover:bg-primary/20" },
};

export function LineButton({
    children,
    variant = "outline",
    size = "default",
    href,
    external = false,
    className,
    onClick,
}: LineButtonProps) {
    const b = bracketOpacity[variant];

    const inner = (
        <>
            {/* Corner bracket — top-left */}
            <span className={cn(
                "corner-bracket corner-bracket--tl absolute top-0 left-0 w-2 h-2 pointer-events-none transition-all duration-500 group-hover:w-3.5 group-hover:h-3.5",
            )}>
                <span className={cn("absolute top-0 left-0 w-px h-full transition-colors duration-500", b.tl, b.tlHover)} />
                <span className={cn("absolute top-0 left-0 h-px w-full transition-colors duration-500", b.tl, b.tlHover)} />
            </span>
            {/* Corner bracket — bottom-right */}
            <span className={cn(
                "corner-bracket corner-bracket--br absolute bottom-0 right-0 w-2 h-2 pointer-events-none transition-all duration-500 group-hover:w-3.5 group-hover:h-3.5",
            )}>
                <span className={cn("absolute bottom-0 right-0 w-px h-full transition-colors duration-500", b.br, b.brHover)} />
                <span className={cn("absolute bottom-0 right-0 h-px w-full transition-colors duration-500", b.br, b.brHover)} />
            </span>
            {children}
        </>
    );

    const baseClass = cn(
        "line-btn group relative inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap border transition-all duration-400 overflow-hidden",
        sizeClasses[size],
        variantClasses[variant],
        className,
    );

    if (href) {
        return (
            <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={baseClass}
            >
                {inner}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseClass}>
            {inner}
        </button>
    );
}
