import localFont from "next/font/local"
import { JetBrains_Mono as FontMono } from 'next/font/google'


export const Satoshi = localFont({
    src: "../fonts/Satoshi.ttf",
    display: "swap",
    fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
    variable: "--font-sans",

})

export const fontmono = FontMono({
    weight: ['300', '400', '500', '700'],
    variable: "--font-mono",
    display: "swap",
    preload: true,
    subsets: ["latin"],
    fallback: ["ui-monospace", "monospace"]


})