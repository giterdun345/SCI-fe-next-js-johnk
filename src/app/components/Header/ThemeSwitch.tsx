"use client"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import Image from 'next/image';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className='h-[135px] w-100 animate-pulse rounded-full bg-gray-400' /> // TODO: needs skeleton
    }

    if (resolvedTheme === 'dark') {
        return (
            <div className="cursor-pointer h-[135px]" onClick={() => setTheme('light')} >
                <Image className="rounded-full" src="https://www.pngfind.com/pngs/m/325-3253888_yoda-svg-master-outline-star-wars-yoda-silhouette.png" alt="The light side" width={100} height={100} />
            </div>
        )
    }

    if (resolvedTheme === 'light') {
        return (
            <div className="cursor-pointer h-[135px]" onClick={() => setTheme('dark')} >
                <Image className="rounded-full" src="https://www.pngfind.com/pngs/m/673-6730630_darth-vader-vector-icon-template-clipart-free-transparent.png" alt="The dark side" width={100} height={100} />
            </div>
        )
    }
}