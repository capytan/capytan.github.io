# 技術スタック

## コア技術
- TypeScript: ^5.0.0
- Node.js: ^20.0.0

## フロントエンド
- Next.js: ^15.1.3
- React: ^19.0.0
- Tailwind CSS: ^3.4.17
- shadcn/ui: ^2.1.8
- next-themes: ^0.2.1  # ダークモード対応

## 開発ツール
- npm: ^10.0.0
- ESLint: ^9.0.0
- Prettier: ^3.2.0

## デプロイメント
- GitHub Pages
- GitHub Actions（自動デプロイ）

---

# 開発ガイドライン

## コーディング規約
- TypeScriptの型定義を厳密に行う
- コンポーネントはatomicデザインの原則に従う
- CSSはTailwind CSSを優先して使用

## パフォーマンス最適化
- 画像の最適化（Next.jsのImage componentを使用）
- 適切なキャッシュ戦略の実装
- バンドルサイズの最適化

## アクセシビリティ
- WAI-ARIAガイドラインの遵守
- キーボード操作のサポート
- 適切なコントラスト比の維持

## SEO対策
- OGP（Open Graph Protocol）の実装
- 適切なメタデータの設定
- 構造化データの実装

## カラーテーマ
### ライトモード
- Primary: #3B82F6 (Blue-500)
- Background: #FFFFFF
- Text: #1F2937 (Gray-800)
- Accent: #F59E0B (Amber-500)

### ダークモード
- Primary: #60A5FA (Blue-400)
- Background: #111827 (Gray-900)
- Text: #F3F4F6 (Gray-100)
- Accent: #FBBF24 (Amber-400)

# API バージョン管理
## 重要な制約事項
- APIクライアントは `app/lib/api/client.ts` で一元管理
- AI モデルのバージョンは client.ts 内で厳密に管理
- これらのファイルは変更禁止（変更が必要な場合は承認が必要）：
  - client.ts  - AIモデルとAPI設定の中核
  - types.ts   - 型定義の一元管理
  - config.ts  - 環境設定の一元管理

## 実装規則
- AIモデルのバージョンは client.ts でのみ定義
- 型定義は必ず types.ts を参照
- 環境変数の利用は config.ts 経由のみ許可