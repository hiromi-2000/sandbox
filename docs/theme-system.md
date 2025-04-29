# Timeプロジェクト テーマシステム

## 目次

1. [概要](#概要)
2. [CSS変数](#css変数)
3. [Tailwindとの統合](#tailwindとの統合)
4. [テーマの切り替え](#テーマの切り替え)
5. [カスタムテーマの作成](#カスタムテーマの作成)
6. [ベストプラクティス](#ベストプラクティス)

## 概要

Timeプロジェクトのテーマシステムは、CSS変数とTailwind CSSを組み合わせて、ダークモードとライトモードの切り替えをサポートします。このシステムは以下の特徴を持っています：

- CSS変数によるテーマカラーの定義
- `data-theme`属性を使用したテーマの切り替え
- Tailwind CSSとの統合によるユーティリティクラスの活用
- ローカルストレージを使用したユーザー設定の保存
- システム設定の自動検出と適用

## CSS変数

テーマシステムの基盤はCSS変数です。これらの変数は`src/app/globals.css`で定義されています。

```css
:root {
  /* ライトモードのデフォルト値 */
  --background: #ffffff;
  --foreground: #1a202c;
  --primary: #0ea5e9;
  --primary-foreground: #ffffff;
  --secondary: #f1f5f9;
  --secondary-foreground: #1e293b;
  --accent: #22d3ee;
  --accent-foreground: #0f172a;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --border: #e2e8f0;
  --input: #e2e8f0;
  --ring: #0ea5e9;
  --radius: 0.5rem;
}

[data-theme="dark"] {
  /* ダークモードの値 */
  --background: #0f172a;
  --foreground: #f8fafc;
  --primary: #0ea5e9;
  --primary-foreground: #ffffff;
  --secondary: #1e293b;
  --secondary-foreground: #f1f5f9;
  --accent: #0d9488;
  --accent-foreground: #f1f5f9;
  --muted: #1e293b;
  --muted-foreground: #94a3b8;
  --border: #334155;
  --input: #334155;
  --ring: #0ea5e9;
}
```

## Tailwindとの統合

CSS変数をTailwind CSSと統合するには、`tailwind.config.js`ファイルを編集します。これにより、CSS変数を直接Tailwindのユーティリティクラスで使用できるようになります。

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
};
```

この設定により、以下のようなTailwindクラスが使用できるようになります：

```html
<div class="bg-background text-foreground">
  <button class="bg-primary text-primary-foreground">
    ボタン
  </button>
</div>
```

## テーマの切り替え

テーマの切り替えは`data-theme`属性を変更することで実現します。以下はクライアントサイドでの実装例です：

```tsx
// src/components/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // ローカルストレージからテーマを取得
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    // システム設定の確認
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    
    // 保存されたテーマまたはシステム設定を適用
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary text-secondary-foreground"
      aria-label={theme === 'light' ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
}
```

## カスタムテーマの作成

プロジェクト内で新しいテーマを作成するには、以下の手順に従います：

1. `globals.css`にテーマのCSS変数を追加

```css
[data-theme="custom-theme"] {
  --background: #f0f4f8;
  --foreground: #2d3748;
  --primary: #4c51bf;
  --primary-foreground: #ffffff;
  /* 他の変数も同様に定義 */
}
```

2. テーマ切り替え機能に新しいテーマを追加

```tsx
// テーマの型定義を拡張
type Theme = 'light' | 'dark' | 'custom-theme';

// テーマ選択コンポーネントの例
function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>('light');

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeTheme('light')}>ライト</button>
      <button onClick={() => changeTheme('dark')}>ダーク</button>
      <button onClick={() => changeTheme('custom-theme')}>カスタム</button>
    </div>
  );
}
```

## ベストプラクティス

### 1. コンポーネント内でのテーマ利用

コンポーネントのスタイリングではTailwindのユーティリティクラスを活用します：

```tsx
function Card({ children }) {
  return (
    <div className="bg-background border border-border rounded-lg p-4 shadow-sm">
      <div className="text-foreground">{children}</div>
    </div>
  );
}
```

### 2. レスポンシブなテーマ対応

メディアクエリを活用して、画面サイズに応じたテーマの調整を行うことができます：

```css
@media (max-width: 768px) {
  :root {
    --radius: 0.25rem; /* モバイルデバイスでは角丸を小さくする */
  }
}
```

### 3. アクセシビリティへの配慮

テーマ切り替えにはARIA属性を適切に設定し、キーボード操作にも対応させます：

```tsx
<button
  onClick={toggleTheme}
  className="p-2 rounded-full bg-secondary"
  aria-label={theme === 'light' ? 'ダークモードに切り替え' : 'ライトモードに切り替え'}
  tabIndex={0}
>
  {/* アイコン */}
</button>
```

### 4. テーマ変更時のアニメーション

スムーズな移行のためのトランジションを追加します：

```css
/* globals.css */
:root, [data-theme] {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### 5. カスタムテーマの管理

複数のカスタムテーマを効率的に管理するための関数：

```tsx
// src/lib/theme.ts
type ThemeColors = {
  [key: string]: string;
};

type ThemeOption = {
  name: string;
  label: string;
  colors: ThemeColors;
};

const themes: ThemeOption[] = [
  {
    name: 'light',
    label: 'ライト',
    colors: { /* 色の定義 */ },
  },
  {
    name: 'dark',
    label: 'ダーク',
    colors: { /* 色の定義 */ },
  },
  // 他のテーマ
];

export function applyTheme(themeName: string): void {
  const theme = themes.find(t => t.name === themeName);
  if (!theme) return;

  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
}
```

これらのベストプラクティスを適用することで、保守性が高く、ユーザーフレンドリーなテーマシステムを構築できます。
 