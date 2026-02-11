"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*<>{}[]!?/\\|~^";

export function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
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
