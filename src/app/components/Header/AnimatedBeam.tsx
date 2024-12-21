"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@libs/utils";
import { useTheme } from "next-themes";

function Beam({ index }: { index: number }) {
    const { theme } = useTheme()
    const flag = index % 8 === 0;

    const beamColor = theme === 'dark'
        ? "bg-gradient-to-b from-neutral-50/50 via-neutral-100 to-neutral-50"
        : "bg-gradient-to-b from-black/50 via-gray-900 to-black";

    return (
        <div
            className={cn("h-full animate-meteor", {
                "[--duration:7s]": flag,
                "[--duration:11s]": !flag,
            })}
            style={{
                width: "6px",
                transform: "translateY(-20%)",
                // @ts-ignore 
                "--delay": `${index * 0.5}s`,
            }}
        >
            <div
                style={{
                    clipPath: "polygon(54% 0, 54% 0, 60% 100%, 40% 100%)",
                }}
                className={cn("w-full", {
                    "h-8": flag,
                    "h-12": !flag,
                })}
            >
                <div className={`size-full ${beamColor}`} />
            </div>
        </div>
    );
}

function useGridCount() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) {
                return;
            }
            const width = rect.width;
            const cellSize = 40;
            setCount(Math.ceil(width / cellSize));
        };

        updateCount();

        // Can be debounced if needed
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);

    return {
        count,
        containerRef,
    };
}

function Background() {
    const { count, containerRef } = useGridCount();

    return (
        <div
            ref={containerRef}
            className="-z-1 absolute inset-0 flex size-full flex-row justify-between bg-gradient-to-t from-ring-slate-900 to-ring-slate-950"
        >
            {Array.from({ length: count }, (_, i) => (
                <div key={i} className="relative h-full w-px rotate-12">
                    {(1 + i) % 4 === 0 && <Beam index={i + 1} />}
                </div>
            ))}
        </div>
    );
}

export default function AnimatedBeam({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("storybook-fix relative w-full overflow-hidden", className)}>
            <Background />
            <div className="relative size-full">{children}</div>
        </div>
    );
}
