'use client';
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState <'light'|'dark'>('light')

    useEffect(() => {
        const saved = 
            (localStorage.getItem('cc-theme') as 'light'|'dark') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        
        setTheme(saved)
        document.documentElement.setAttribute('data-theme', saved)
    }, [])

    const toggle = () => {
        const next = theme === 'light' ? 'dark' : 'light'
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
        localStorage.setItem('cc-theme', next)
    }

    return (
        <button
            onClick={toggle}
            className="rounded-md border px-3 py-1 text-sm hover:bg-[color-mix(in_oklab,var(--foreground)_10%,transparent)]"
            aria-label="Cambiar tema"
            >
                {theme === 'light' ? '🌙' : '☀️'}
        </button>
    )
}