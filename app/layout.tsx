import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Footer from "@/components/partials/Footer"
import Navbar from "@/components/partials/Navbar"
import './styles/globals.css'

// Font configuration
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
})

// SEO Metadata
export const metadata: Metadata = {
    title: {
        default: 'NoVibers - AI Code Quality Analysis | Pay Per Scan, No Subscriptions',
        template: '%s | NoVibers - AI Code Quality'
    },
    description: 'NoVibers uses AI to detect "vibe coding" and unprofessional patterns in your code. From individual scans to complete GitHub candidate assessments. Pay per scan with the strongest AI models available.',
    keywords: [
        'code quality',
        'AI code analysis',
        'GitHub candidate screening',
        'HR developer assessment', 
        'professional coding',
        'clean code',
        'pay per scan',
        'no subscription',
        'vibe coding detection',
        'AI slop detection',
        'developer tools',
        'GitHub integration',
        'TypeScript',
        'JavaScript',
        'Python',
        'code review automation',
        'variable naming',
        'debug code detection',
        'console.log removal',
        'candidate evaluation',
        'developer hiring'
    ],
    authors: [{ name: 'NoVibers Team' }],
    creator: 'NoVibers',
    publisher: 'NoVibers',
    category: 'Developer Tools',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    metadataBase: new URL('https://novibers.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://novibers.com',
        siteName: 'NoVibers',
        title: 'NoVibers - AI Code Quality Analysis | HR GitHub Screening',
        description: 'AI-powered code quality analysis for developers and HR teams. Scan individual projects or assess GitHub candidates at scale. Pay per scan, no subscriptions.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'NoVibers - AI Code Quality Analysis and GitHub Candidate Screening',
                type: 'image/png',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@TheGoldenBoyle',
        creator: '@TheGoldenBoyle',
        title: 'NoVibers - AI Code Quality Analysis',
        description: 'Clean up your code with AI analysis. Perfect for developers and HR teams screening GitHub candidates. Pay per scan, no subscriptions.',
        images: ['/og-image.png'],
    },
    other: {
        'theme-color': '#f62681',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
            suppressHydrationWarning
        >
            <head>
                {/* Essential Performance Hints */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                
                {/* Basic Favicons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>

            <body className="bg-x-dark text-x-text antialiased min-h-screen">
                {/* Skip Navigation for Accessibility */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-x-primary text-x-dark px-4 py-2 rounded-lg z-[9999] focus:outline-none focus:ring-2 focus:ring-x-primary transition-all"
                >
                    Skip to main content
                </a>

                <Navbar />

                <main id="main-content" role="main">
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    )
}