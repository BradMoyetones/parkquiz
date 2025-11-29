import { siteConfig } from '@/lib/config'
import { Metadata } from 'next'
import Hero from './components/hero'
import Games from './components/games'
import Learn from './components/learn'
import Run from './components/run'

export const metadata: Metadata = {
    title: `${siteConfig.description} - ${siteConfig.name}`,
}

export default function HomePage() {
    return (
        <main>
            <Hero />
            <Games />
            <Learn />
            <Run />
            
        </main>
    )
}
