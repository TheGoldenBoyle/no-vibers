import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './styles/globals.css'
import Navbar from '../components/partials/Navbar'
import Footer from '../components/partials/Footer'

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
    title: 'NoVibers - Prove Your Real Skills | When AI Can\'t Help You',
    description: 'Test your real-world problem-solving skills with challenges that AI can\'t solve for you. Perfect for professionals wanting exposure, learners filling knowledge gaps, and companies seeking to identify genuine talent.',
    keywords: [
        'skills test',
        'problem solving',
        'real world challenges',
        'skill verification',
        'learning gaps',
        'practical skills',
        'AI resistant test',
        'skill assessment',
        'knowledge verification',
        'professional exposure',
        'talent identification',
        'candidate screening',
        'genuine skills',
        'hiring assessment'
    ],
    authors: [{ name: 'NoVibers', url: 'https://novibers.com' }],
    creator: 'NoVibers',
    publisher: 'NoVibers',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://novibers.com',
        siteName: 'NoVibers',
        title: 'NoVibers - Prove Your Real Skills When AI Can\'t Help',
        description: 'Test your real-world problem-solving abilities, gain professional exposure, and help companies identify genuine talent. Perfect for learners filling gaps and professionals proving their skills.',
        images: [
            {
                url: '/assets/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'NoVibers - Prove Your Real Skills When AI Can\'t Help',
                type: 'image/jpeg',
            }
        ],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@TheGoldenBoyle',
        creator: '@TheGoldenBoyle',
        title: 'NoVibers - Prove Your Real Skills When AI Can\'t Help',
        description: 'Test your real-world problem-solving abilities, gain professional exposure, and help companies identify genuine talent. Perfect for learners and professionals alike.',
        images: ['/assets/images/og-image.png'],
    },

    // Icons (NEED TO ADD)
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
    category: 'education',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>

                <Navbar />

                <main className="bg-gradient-to-br from-background via-secondary to-primary pb-8">
                    {children}
                </main>

                <Footer />

            </body>
        </html>
    )
}