# ディレクトリ構成

以下のディレクトリ構造に従って実装を行います：

```
/
├── app/                          # Next.jsのアプリケーションディレクトリ
│   ├── components/              # アプリケーションコンポーネント
│   │   ├── ui/                 # 基本UI
│   │   │   ├── link-card.tsx   # リンクカードコンポーネント
│   │   │   ├── profile.tsx     # プロフィールコンポーネント
│   │   │   ├── theme-switch.tsx # テーマ切り替えボタン
│   │   │   └── share-button.tsx # シェアボタン
│   │   └── layout/             # レイアウト関連
│   │       └── header.tsx      # ヘッダーコンポーネント
│   ├── hooks/                  # カスタムフック
│   │   ├── use-links.ts       # リンク関連のカスタムフック
│   │   └── use-theme.ts       # テーマ関連のカスタムフック
│   ├── lib/                    # ユーティリティ
│   │   └── utils/             # 共通関数
│   │       ├── constants.ts    # 定数定義
│   │       └── metadata.ts     # メタデータ関連の処理
│   ├── styles/                 # スタイル定義
│   │   └── globals.css        # グローバルスタイル
│   ├── favicon.ico            # ファビコン
│   ├── opengraph-image.png    # OGP用デフォルト画像
│   ├── layout.tsx             # ルートレイアウト
│   └── page.tsx               # ホームページ
├── public/                    # 静的ファイル
│   ├── images/               # 画像ファイル
│   │   ├── profile/         # プロフィール画像
│   │   └── links/           # リンクのサムネイル画像
│   └── icons/               # アイコン
│       ├── social/          # SNSアイコン
│       └── ui/              # UIアイコン
├── config/                   # 設定ファイル
│   ├── site.ts              # サイト全体の設定
│   ├── links.ts             # リンク設定
│   └── theme.ts             # テーマ設定
└── types/                   # 型定義
    └── index.ts             # 共通の型定義
```

### 配置ルール
- UIコンポーネント → `app/components/ui/`
- 共通処理 → `app/lib/utils/`
- 設定ファイル → `config/`
- 型定義 → `types/`
- 画像ファイル → `public/images/`
- アイコン → `public/icons/`