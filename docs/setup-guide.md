# Timeプロジェクト セットアップガイド

## 目次

1. [前提条件](#前提条件)
2. [プロジェクトのセットアップ](#プロジェクトのセットアップ)
3. [環境変数の設定](#環境変数の設定)
4. [開発サーバーの起動](#開発サーバーの起動)
5. [ビルドと本番環境](#ビルドと本番環境)
6. [テストの実行](#テストの実行)
7. [トラブルシューティング](#トラブルシューティング)

## 前提条件

Timeプロジェクトを開発するには、以下のソフトウェアが必要です：

- Node.js (v18.0.0以上)
- npm (v8.0.0以上) または yarn (v1.22.0以上)
- Git

バージョンの確認は以下のコマンドで行えます：

```bash
node -v
npm -v
git --version
```

## プロジェクトのセットアップ

### リポジトリのクローン

```bash
git clone https://github.com/yourusername/Time.git
cd Time
```

### 依存関係のインストール

npmを使用する場合：

```bash
npm install
```

yarnを使用する場合：

```bash
yarn
```

## 環境変数の設定

1. プロジェクトルートディレクトリに`.env.local`ファイルを作成します。
2. 必要な環境変数を設定します。サンプルとして`.env.example`を参照してください。

```
# .env.local の例
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=postgresql://username:password@localhost:5432/Time
```

## 開発サーバーの起動

### フロントエンドの開発サーバー

```bash
npm run dev
# または
yarn dev
```

これにより、開発サーバーが起動し、通常は`http://localhost:3000`でアクセスできます。

### ビルドと本番環境

本番環境用のビルドを作成するには：

```bash
npm run build
# または
yarn build
```

ビルドを実行するには：

```bash
npm run start
# または
yarn start
```

## テストの実行

### ユニットテスト

```bash
npm run test
# または
yarn test
```

### E2Eテスト

```bash
npm run test:e2e
# または
yarn test:e2e
```

## テーマシステムの設定

Timeプロジェクトのテーマシステムを設定するには、`tailwind.config.js`ファイルを編集する必要があります。

1. カスタムカラーの追加

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          // ...他の色調
          900: 'var(--primary-900)',
        },
        // 他のカラーも同様に追加
      }
    }
  },
  // ...その他の設定
}
```

2. Tailwindビルドスクリプトの実行

```bash
npm run tailwind:build
# または
yarn tailwind:build
```

詳細については、[テーマシステムドキュメント](./theme-system.md)を参照してください。

## コンポーネントライブラリの使用

Timeプロジェクトでは、カスタムUIコンポーネントライブラリが提供されています。

```tsx
import { Button, Input, Badge } from '@/ui/components';

function MyComponent() {
  return (
    <div>
      <h1>コンポーネント例</h1>
      <Button variant="primary">クリック</Button>
      <Input placeholder="入力してください" />
      <Badge variant="success">完了</Badge>
    </div>
  );
}
```

詳細については、[コンポーネントドキュメント](./components.md)を参照してください。

## トラブルシューティング

### 一般的な問題と解決策

#### 「モジュールが見つかりません」エラー

依存関係を再インストールしてみてください：

```bash
rm -rf node_modules
npm install
# または
yarn
```

#### 開発サーバーの問題

ポートの競合が発生している場合は、別のポートで試してみてください：

```bash
npm run dev -- -p 3001
# または
yarn dev -p 3001
```

#### テーマ関連の問題

CSSの変数やスタイルが適用されない場合：

1. キャッシュをクリアする：
```bash
npm run clean
# または
yarn clean
```

2. Tailwindの設定ファイルを確認する
3. グローバルCSSファイルでテーマ変数が正しく定義されているか確認する

### サポートの取得

さらにサポートが必要な場合は、以下の方法でヘルプを求めることができます：

1. GitHubのIssueを作成する
2. プロジェクトのSlackチャンネルで質問する
3. プロジェクト管理者に直接連絡する

## 貢献ガイドライン

プロジェクトに貢献する際は、以下のガイドラインに従ってください：

1. 新しい機能やバグ修正のための新しいブランチを作成する
2. コミットメッセージは明確に記述する
3. プルリクエストを作成する前にテストが通ることを確認する
4. プルリクエストには変更内容の詳細な説明を含める

詳細な貢献ガイドラインについては、[CONTRIBUTING.md](../CONTRIBUTING.md)を参照してください。 
