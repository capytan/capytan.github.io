import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          dark: '#60A5FA',
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        text: {
          light: '#1F2937',
          dark: '#F3F4F6',
        },
        accent: {
          light: '#F59E0B',
          dark: '#FBBF24',
        },
      },
    },
  },
  plugins: [],
}

export default config 