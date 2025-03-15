export type LinkType = {
  title: string
  url: string
  icon: string
  description?: string
}

export const links: LinkType[] = [
  {
    title: "X（Twitter）",
    url: "https://x.com/capytan_el34",
    icon: "twitter",
    description: "日々の開発や技術的な話題について投稿しています",
  },
  {
    title: "GitHub",
    url: "https://github.com/capytan",
    icon: "github",
    description: "ソースコードやプロジェクトを公開しています",
  },
  {
    title: "Blog",
    url: "https://blog.capytan.net",
    icon: "blog",
    description: "技術ブログを書いています",
  },
] 