# Next.jsプロジェクト

このプロジェクトは[Next.js](https://nextjs.org)を使用し、[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)でブートストラップされています。

## 技術スタック

- [Next.js 15](https://nextjs.org/) - Reactフレームワーク
- [React 19](https://react.dev/) - UIライブラリ
- [TypeScript](https://www.typescriptlang.org/) - 型付きJavaScript
- [TanStack Query](https://tanstack.com/query/latest) - データフェッチングライブラリ
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [Biome](https://biomejs.dev/) - リンターとフォーマッター
- [Vitest](https://vitest.dev/) - テストフレームワーク
- [Storybook](https://storybook.js.org/) - UIコンポーネント開発ツール

## 環境設定

このプロジェクトはNode.js v22.15.0とpnpm v10.10.0を使用しています。

### corepackの設定（推奨）

corepackを使うと、プロジェクトごとに適切なパッケージマネージャのバージョンを自動的に使用できます：

```bash
# corepackを有効化（Node.js 16.9.0以上が必要）
corepack enable pnpm

# または、npmスクリプトを使用
pnpm setup:corepack
```

### 手動インストール

corepackを使用しない場合は、以下のコマンドでpnpmをインストールできます：

```bash
npm install -g pnpm@10.10.0
```

## 始め方

開発サーバーを起動するには:

```bash
pnpm dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開くと結果が表示されます。

`app/page.tsx`を編集することでページの編集を始めることができます。ファイルを編集すると、ページは自動的に更新されます。

このプロジェクトでは[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)を使用して、Vercelの新しいフォントファミリーである[Geist](https://vercel.com/font)を自動的に最適化して読み込んでいます。
