import { siteConfig } from '@/lib/config'
import { Metadata } from 'next'
import App from './components/init-page'
import Hero from './components/hero'
import Games from './components/games'
import Learn from './components/learn'

export const metadata: Metadata = {
    title: `${siteConfig.description} - ${siteConfig.name}`,
}

export default function HomePage() {
    return (
        <main>
            <Hero />
            <Games />
            <Learn />
        </main>
    )
}
