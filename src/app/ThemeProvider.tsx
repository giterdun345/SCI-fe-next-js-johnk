'use client'

import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { PropsWithChildren } from "react";

export default function ThemeProvider({ children }: PropsWithChildren) {
    return (
        <NextThemeProvider attribute="class" defaultTheme='system' enableSystem>
            {children}
        </NextThemeProvider>
    )
}
