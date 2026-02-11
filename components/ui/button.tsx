"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Button — second-level button.
 * No background, just content.
 * On hover a red bottom line expands from the center.
 */

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export function SimpleButton({ children, href, external, className, onClick }: ButtonProps) {
  const base = cn(
    "button group relative inline-flex items-center justify-center gap-2 text-[13px] font-medium text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer py-2 px-1",
    className,
  );

  const underline = (
    <span className="button__underline absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-400 ease-out group-hover:w-full" />
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={base}
      >
        {children}
        {underline}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
      {underline}
    </button>
  );
}
