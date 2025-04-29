import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "UI/Interactions/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "入力コンポーネントは、ユーザーからのテキスト入力を受け付けます。",
      },
      page: () => import("./Input.mdx"),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "outlined"],
      description: "入力フィールドの外観バリアント",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "入力フィールドのサイズ",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    state: {
      control: { type: "select" },
      options: ["default", "invalid", "valid", "disabled"],
      description: "入力フィールドの状態",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "親要素の幅いっぱいに広がるかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    label: {
      control: { type: "text" },
      description: "入力フィールドのラベル",
      table: {
        type: { summary: "string" },
      },
    },
    error: {
      control: { type: "text" },
      description: "エラーメッセージ",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "入力フィールドを無効状態にするかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "プレースホルダーテキスト",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "テキストを入力",
  },
  parameters: {
    docs: {
      description: {
        story: "シンプルな入力フィールドです。",
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    label: "メールアドレス",
    placeholder: "example@example.com",
  },
  parameters: {
    docs: {
      description: {
        story: "ラベル付きの入力フィールドです。",
      },
    },
  },
};

export const WithError: Story = {
  args: {
    label: "パスワード",
    type: "password",
    error: "8文字以上入力してください",
    state: "invalid",
  },
  parameters: {
    docs: {
      description: {
        story:
          "エラーメッセージ付きの入力フィールドです。state='invalid'と組み合わせて使用します。",
      },
    },
  },
};

export const Sizes: Story = {
  args: {
    placeholder: "サイズサンプル",
  },
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Input size="sm" placeholder="小サイズ" />
      <Input size="md" placeholder="中サイズ" />
      <Input size="lg" placeholder="大サイズ" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "入力フィールドは3つのサイズから選べます。",
      },
    },
  },
};

export const States: Story = {
  args: {
    placeholder: "状態サンプル",
  },
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Input state="default" placeholder="デフォルト" />
      <Input state="valid" placeholder="有効な入力" />
      <Input
        state="invalid"
        placeholder="無効な入力"
        error="エラーメッセージ"
      />
      <Input state="disabled" placeholder="無効" disabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "入力フィールドには4つの状態があります：デフォルト、有効、無効、無効化。",
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: "幅100%の入力欄",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "fullWidthプロパティを使用すると、入力フィールドが親要素の幅いっぱいに広がります。",
      },
    },
  },
};
