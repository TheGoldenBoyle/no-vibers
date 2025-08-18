import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './styles/globals.css'
import { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"


const spaceGrotesk = Space_Grotesk({ 
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({ 
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
    display: 'swap'
})

export const metadata: Metadata = {
    title: 'NoVibers - Real Full-Stack Devs Powered by AI',
    description: 'When real-world full-stack expertise meets AI, we build unstoppable software with speed and passion. Join @thegoldenbolyes army of builders who ship fast and deliver software that lasts.',
    keywords: [
        'full-stack development',
        'AI-powered coding',
        'real-world experience',
        'software development',
        'build with passion',
        'AI and development',
        'no gatekeepers',
        '10x engineers',
        'coding army',
        'software that lasts',
        'real developers',
        'fast shipping code',
        'AI-driven development',
        'full-stack skills',
        'developer community'
    ],
    authors: [{ name: 'TheGoldenBoyle', url: 'https://novibers.com' }],
    creator: 'TheGoldenBoyle',
    publisher: 'TheGoldenBoyle',

    verification: {
        google: 'jo0KUpPdyrmwlo2k0yA7n8eGfoDddzpCwvAB3TW9aOo',
    },

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://novibers.com',
        siteName: 'NoVibers',
        title: 'NoVibers - Real Full-Stack Devs Powered by AI',
        description: 'Join @thegoldenbolyes army of full-stack devs who blend real-world grit with AI to build software that lasts. No gatekeepers, just builders with speed and passion.',
        images: [
            {
                url: '/assets/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'NoVibers - Real Full-Stack Devs Powered by AI',
                type: 'image/jpeg',
            }
        ],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@TheGoldenBoyle',
        creator: '@TheGoldenBoyle',
        title: 'NoVibers - Real Full-Stack Devs Powered by AI',
        description: 'When full-stack meets AI, we build with speed, passion, and real-world experience. Join @thegoldenbolyes army to ship software that lasts.',
        images: ['/assets/images/og-image.png'],
    },

    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#c2410c' },
        ],
    },

    metadataBase: new URL('https://novibers.com'),
    alternates: {
        canonical: 'https://novibers.com',
    },
    category: 'technology',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
                <Analytics/> 
                {children}

            </body>
        </html>
    )
}