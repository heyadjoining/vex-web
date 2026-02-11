/**
 * Section divider — a horizontal line with crosshairs positioned
 * at exactly the same coordinates as the GridLines vertical rails.
 */
export function SectionDivider({ label }: { label?: string }) {
    return (
        <div className="section-divider max-w-7xl mx-auto px-6 pointer-events-none select-none" aria-hidden="true">
            {/* Full-width horizontal line */}
            <div className="section-divider__line relative h-px bg-[var(--color-line)]">
                {/* Crosshairs — aligned exactly to GridLines rails */}
                {/* Left rail (left: 0 within the px-6 container) */}
                <span className="crosshair crosshair--left absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--color-cross)] leading-none">+</span>
                {/* 1/3 rail */}
                <span className="crosshair crosshair--third-1 absolute left-[33.333%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--color-cross)] leading-none">+</span>
                {/* 2/3 rail */}
                <span className="crosshair crosshair--third-2 absolute left-[66.666%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--color-cross)] leading-none">+</span>
                {/* Right rail */}
                <span className="crosshair crosshair--right absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-[var(--color-cross)] leading-none">+</span>
                {/* Optional label — sits just after left cross */}
                {label && (
                    <span className="section-divider__label absolute left-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-[var(--color-cross)] tracking-[0.2em] uppercase leading-none">{label}</span>
                )}
            </div>
        </div>
    );
}
