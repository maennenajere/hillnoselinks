import Avatar from './components/Avatar.jsx'
import Bio from './components/Bio.jsx'
import Card from './components/Card.jsx'
import Socials from './components/Socials.jsx'
import Footer from './components/Footer.jsx'
import Quote from './components/Quote.jsx'
import LanguageToggle from './components/LanguageToggle.jsx'
import { useTranslation } from 'react-i18next'

export default function App() {
    const { t } = useTranslation()

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

            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
            {/*<ThemeToggle />*/}
                <LanguageToggle />
            </div>

            <main className="relative z-10 grid min-h-dvh place-items-center px-4 text-white p-10">
                <div className="w-full max-w-md text-center flex flex-col items-center gap-6">
                    <Avatar />
                    <Bio />
                    <Socials />
                    <Card />

                    <p className="text-gray-400 text-sm mb-4">
                        {t('cta.web')}
                    </p>

                    <Quote />
                    <Footer />
                </div>
            </main>
        </div>
    )
}