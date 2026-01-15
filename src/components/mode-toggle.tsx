"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-9 h-9 border border-gray-200 dark:border-gray-800"
            >
                <Sun className="h-[1.2rem] w-[1.2rem] opacity-0" />
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            className="rounded-full w-9 h-9 border border-border"
        >
            {resolvedTheme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
