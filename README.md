# Linktree Clone

## 概要
Next.jsで構築されたシンプルな個人用リンク集サイトです。PCやスマートフォンのブラウザから閲覧可能な静的サイトとして設計されています。

## 主な機能
- プロフィール表示（画像、名前、説明文）
- SNS、ブログ、ポートフォリオへのリンク
- アイコン付きリンクカード
- ダークモード対応
- Xシェアボタン
- Google Analytics 4による解析
- モバイルファーストのレスポンシブデザイン
- SEO対策（OGP、メタデータ）

## 技術スタック
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes（ダークモード）
- @vercel/analytics（GA4）

## 開発環境のセットアップ

### 必要条件
- Node.js (v20.0.0以上)
- npm (v10.0.0以上)

### インストール手順
1. リポジトリのクローン
```bash
git clone [repository-url]
cd [repository-name]
```

2. 依存パッケージのインストール
```bash
npm install
```

3. 環境変数の設定
```bash
cp .env.example .env.local
```
`.env.local`ファイルを編集し、必要な環境変数を設定：
- `NEXT_PUBLIC_GA_ID`: Google Analytics 4の測定ID

4. 開発サーバーの起動
```bash
npm run dev
```

5. ブラウザでアクセス
```
http://localhost:3000
```

## カスタマイズ方法

### リンクの追加・編集
`config/links.ts`を編集してリンクを管理します：
```typescript
export const links = [
  {
    title: "X（Twitter）",
    url: "https://x.com/yourusername",
    icon: "twitter",
  },
  // 他のリンクを追加
];
```

### プロフィールの編集
`config/site.ts`でプロフィール情報を管理します：
```typescript
export const siteConfig = {
  profile: {
    name: "Your Name",
    description: "Your description",
    image: "/images/profile/avatar.jpg",
  },
  // その他の設定
};
```

## デプロイ
GitHub Actionsを使用して、mainブランチへのプッシュ時に自動的にGitHub Pagesへデプロイされます。

## ライセンス
MIT

## 作者
[Your Name]
