import Image from 'next/image'
import { siteConfig } from '@/config/site'

export const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-primary-light dark:border-primary-dark">
        <Image
          src={siteConfig.profile.image}
          alt={siteConfig.profile.name}
          width={120}
          height={120}
          priority
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
          {siteConfig.profile.name}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {siteConfig.profile.description}
        </p>
      </div>
    </div>
  )
} 