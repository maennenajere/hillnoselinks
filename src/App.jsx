import Avatar from './components/Avatar.jsx'
import Bio from './components/Bio.jsx'
import Card from './components/Card.jsx'
import Socials from './components/Socials.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
    return (
        <div className="relative bg-black min-h-dvh">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 90% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
                }}
            />

            <main className="relative z-10 grid min-h-dvh place-items-center px-4 text-white">
                <div className="w-full max-w-md text-center flex flex-col items-center gap-6">
                    <Avatar />
                    <Bio />
                    <Socials />
                    <Card />
                    <Footer />
                </div>
            </main>
        </div>
    )
}