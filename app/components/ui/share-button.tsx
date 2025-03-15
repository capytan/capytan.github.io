'use client'

import { siteConfig } from '@/config/site'

export const ShareButton = () => {
  const handleShare = () => {
    const text = `${siteConfig.title}\n${siteConfig.description}`
    const url = siteConfig.url
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      '_blank'
    )
  }

  return (
    <button
      onClick={handleShare}
      className="fixed bottom-4 right-4 p-2 rounded-lg bg-[#1DA1F2] hover:bg-[#1a91da] text-white transition-colors"
      aria-label="Xでシェア"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </button>
  )
} 