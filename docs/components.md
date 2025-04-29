# UIコンポーネントシステム

## 概要

このドキュメントでは、Timeプロジェクトで使用されているUIコンポーネントシステムについて説明します。テーマシステムと連携したカスタムコンポーネントの実装と使用方法について解説します。

## 目次

1. [コンポーネント構造](#コンポーネント構造)
2. [スタイリングアプローチ](#スタイリングアプローチ)
3. [利用可能なコンポーネント](#利用可能なコンポーネント)
4. [コンポーネントの拡張方法](#コンポーネントの拡張方法)
5. [ベストプラクティス](#ベストプラクティス)

## コンポーネント構造

UIコンポーネントは `src/ui/components` ディレクトリに格納されており、以下のような構造になっています：

```
src/ui/components/
├── containers/     # レイアウト関連のコンポーネント
├── interactives/   # インタラクティブなコンポーネント（ボタン、入力など）
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   └── index.ts    # エクスポート用
└── display/        # 表示専用コンポーネント
```

## スタイリングアプローチ

コンポーネントのスタイリングには `tailwind-variants` ライブラリを使用しています。このライブラリを使用することで、型安全なバリアントと条件付きクラスの適用が可能になります。

### 基本的な実装パターン

```tsx
import { tv } from 'tailwind-variants';

// スタイル定義
const componentVariants = tv({
  base: "共通のスタイル",
  variants: {
    variant: {
      primary: "primaryバリアント用のスタイル",
      secondary: "secondaryバリアント用のスタイル",
    },
    size: {
      sm: "小サイズ用のスタイル",
      md: "中サイズ用のスタイル",
      lg: "大サイズ用のスタイル",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "lg",
      class: "複合バリアント用の追加スタイル",
    },
  ],
});

// コンポーネント実装
export function Component({ variant, size, className, ...props }) {
  return (
    <div className={componentVariants({ variant, size, className })} {...props} />
  );
}
```

## 利用可能なコンポーネント

### Button

ボタンコンポーネントは、アクションのトリガーに使用されます。

#### 実装例

```tsx
import { tv } from 'tailwind-variants';
import { forwardRef } from 'react';

const buttonVariants = tv({
  base: "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2",
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-primary-600",
      secondary: "bg-base-100 text-text hover:bg-base-200",
      outline: "border border-primary text-primary hover:bg-primary-50",
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, fullWidth, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, fullWidth, className })}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
```

#### 使用例

```tsx
<Button>デフォルトボタン</Button>
<Button variant="secondary" size="lg">大きい二次ボタン</Button>
<Button variant="outline" fullWidth>幅いっぱいのアウトラインボタン</Button>
```

### Input

入力コンポーネントは、ユーザーからのテキスト入力を受け付けます。

#### 実装例

```tsx
import { tv } from 'tailwind-variants';
import { forwardRef } from 'react';

const inputVariants = tv({
  base: "block rounded-md border border-color bg-base transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
  variants: {
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
    fullWidth: {
      true: "w-full",
    },
    error: {
      true: "border-error focus:border-error focus:ring-error",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size, fullWidth, error, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={inputVariants({ size, fullWidth, error, className })}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
```

#### 使用例

```tsx
<Input placeholder="名前を入力" />
<Input size="lg" fullWidth placeholder="メールアドレス" />
<Input error placeholder="エラー状態の入力欄" />
```

### Badge

バッジコンポーネントは、ステータスや情報を表示するために使用されます。

#### 実装例

```tsx
import { tv } from 'tailwind-variants';
import { forwardRef } from 'react';

const badgeVariants = tv({
  base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  variants: {
    variant: {
      default: "bg-base-200 text-text",
      primary: "bg-primary-100 text-primary-700",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={badgeVariants({ variant, className })}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
```

#### 使用例

```tsx
<Badge>デフォルト</Badge>
<Badge variant="primary">プライマリ</Badge>
<Badge variant="success">成功</Badge>
<Badge variant="warning">警告</Badge>
<Badge variant="danger">危険</Badge>
```

## コンポーネントの拡張方法

### 既存コンポーネントの拡張

1. コンポーネントの型定義を拡張する
   ```tsx
   // オリジナルのButtonPropsを拡張
   interface CustomButtonProps extends ButtonProps {
     icon?: React.ReactNode;
   }
   
   // 新しいコンポーネントを作成
   const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
     ({ icon, children, ...props }, ref) => {
       return (
         <Button ref={ref} {...props}>
           {icon && <span className="mr-2">{icon}</span>}
           {children}
         </Button>
       );
     }
   );
   ```

### 新しいコンポーネントの追加

1. 適切なディレクトリに新しいコンポーネントファイルを作成
2. `tailwind-variants`を使用してスタイルを定義
3. Reactコンポーネントを実装
4. 必要に応じて`index.ts`からエクスポート

```tsx
// src/ui/components/interactives/Switch.tsx
import { tv } from 'tailwind-variants';
import { forwardRef } from 'react';

const switchVariants = tv({
  base: "relative inline-flex h-6 w-11 items-center rounded-full",
  variants: {
    checked: {
      true: "bg-primary",
      false: "bg-base-300",
    },
  },
  defaultVariants: {
    checked: false,
  },
});

const thumbVariants = tv({
  base: "inline-block h-4 w-4 rounded-full bg-white transform transition-transform",
  variants: {
    checked: {
      true: "translate-x-6",
      false: "translate-x-1",
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked = false, onChange, className, ...props }, ref) => {
    const handleClick = () => {
      onChange?.(!checked);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        className={switchVariants({ checked, className })}
        onClick={handleClick}
        {...props}
      >
        <span className={thumbVariants({ checked })} />
      </button>
    );
  }
);

Switch.displayName = "Switch";

// index.tsへの追加
// import { Switch } from './Switch';
// export { Switch };
```

## ベストプラクティス

### テーマシステムとの連携

- グローバルCSS変数の代わりにカスタムユーティリティクラスを使用する
  ```tsx
  // 良い例
  "bg-primary text-white"
  
  // 避けるべき例
  "bg-[color:var(--primary)] text-[color:var(--text)]"
  ```

### アクセシビリティ

- 適切なARIA属性を使用する
- キーボード操作をサポートする
- コントラスト比を考慮したカラー設計を行う

### パフォーマンス

- 不必要な再レンダリングを避けるため、メモ化を検討する
  ```tsx
  // メモ化されたコンポーネント
  export const MemoizedButton = React.memo(Button);
  ```

### 型安全性

- すべてのコンポーネントプロパティに適切な型定義を提供する
- TypeScriptのジェネリックを活用して柔軟性を高める 
