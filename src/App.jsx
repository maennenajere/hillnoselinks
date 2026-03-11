import Avatar from './components/Avatar.jsx'
import Bio from './components/Bio.jsx'
import Card from './components/Card.jsx'
import Socials from './components/Socials.jsx'
import Footer from './components/Footer.jsx'
import LanguageToggle from './components/LanguageToggle.jsx'
import Badge from './components/Badge.jsx'
import { useTranslation } from 'react-i18next'
import Snowfall from 'react-snowfall'

export default function App() {
    const { t } = useTranslation()
    const showSnowflakes = false
    return (
        <div className="relative min-h-dvh bg-app-background">
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                <LanguageToggle />
            </div>

            <main className="relative z-10 grid min-h-dvh place-items-center px-4 text-white p-10">
                <div className="w-full max-w-md text-center flex flex-col items-center gap-6">
                    <Avatar />
                    <Bio />
                    <Badge />
                    <Socials />
                    <Card />
                    <Footer />
                </div>
            </main>
            {showSnowflakes && (
                <Snowfall
                    snowflakeCount={30}
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                    }}
                />
            )}
        </div>
    )
}