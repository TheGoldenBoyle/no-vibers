import Footer from "@/components/partials/Footer"
import Navbar from "@/components/partials/Navbar"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
        
            <Navbar />

            <main className="bg-gradient-to-br from-background via-secondary to-primary">
                {children}
            </main>

            <Footer />
        </>
    )
}