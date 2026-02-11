/**
 * Architectural grid lines — the structural backbone of the page.
 * Scrolls with content (absolute, not fixed).
 * 4 vertical rails: 2 outer edges + 2 inner thirds.
 * 
 * The rails sit inside the px-6 padding area of max-w-7xl,
 * matching the SectionDivider crosshair positions exactly.
 */
export function GridLines() {
    return (
        <div className="grid-lines absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="grid-lines__container max-w-7xl mx-auto h-full px-6 relative">
                {/* These use the same coordinate space as the content inside px-6.
                    left-0 / right-0 here = inside the padding = where content starts.
                    The SectionDivider's horizontal line spans this same area. */}
                {/* Outer rails — start from hero corner bracket position (top-20 = 80px) */}
                <div className="grid-rail grid-rail--left absolute left-6 top-30 bottom-0 w-px bg-[var(--color-line)]" />
                <div className="grid-rail grid-rail--right absolute right-6 top-30 bottom-0 w-px bg-[var(--color-line)]" />

                {/* Inner third-lines */}
                <div className="grid-rail grid-rail--third-1 absolute top-30 bottom-0 w-px bg-[var(--color-line-soft)]" style={{ left: "calc(1.5rem + (100% - 3rem) * 0.33333)" }} />
                <div className="grid-rail grid-rail--third-2 absolute top-30 bottom-0 w-px bg-[var(--color-line-soft)]" style={{ left: "calc(1.5rem + (100% - 3rem) * 0.66666)" }} />
            </div>
        </div>
    );
}
