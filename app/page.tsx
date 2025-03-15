import { Profile } from '@/app/components/ui/profile'
import { LinkCard } from '@/app/components/ui/link-card'
import { ThemeSwitch } from '@/app/components/ui/theme-switch'
import { ShareButton } from '@/app/components/ui/share-button'
import { links } from '@/config/links'

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <ThemeSwitch />
        <Profile />
        <div className="space-y-4">
          {links.map((link) => (
            <LinkCard key={link.url} link={link} />
          ))}
        </div>
        <ShareButton />
      </div>
    </main>
  )
} 