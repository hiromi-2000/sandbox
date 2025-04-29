import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "UI/Interactions/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ボタンコンポーネントは、アクションのトリガーに使用されます。",
      },
      page: () => import("./Button.mdx"),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "outline", "ghost", "link"],
      description: "ボタンの外観バリアント",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "ボタンのサイズ",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
      description: "ボタンの角丸の程度",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    iconOnly: {
      control: { type: "boolean" },
      description: "アイコンのみのボタンかどうか（正方形になります）",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
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
    disabled: {
      control: { type: "boolean" },
      description: "ボタンを無効状態にするかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    children: {
      description: "ボタンのコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "ボタン",
  },
  parameters: {
    docs: {
      description: {
        story:
          "プライマリバリアントは最も目立つボタンで、主要なアクションに使用します。",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "ボタン",
  },
  parameters: {
    docs: {
      description: {
        story: "セカンダリバリアントは、補助的なアクションに使用します。",
      },
    },
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "ボタン",
  },
  parameters: {
    docs: {
      description: {
        story:
          "アクセントバリアントは、特に目立たせたい補助的なアクションに使用します。",
      },
    },
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "ボタン",
  },
  parameters: {
    docs: {
      description: {
        story: "アウトラインバリアントは、背景が透明で枠線のみのボタンです。",
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "ボタン",
  },
  parameters: {
    docs: {
      description: {
        story:
          "ゴーストバリアントは、背景が透明で枠線もないボタンです。ホバー時に背景色が表示されます。",
      },
    },
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "リンクボタン",
  },
  parameters: {
    docs: {
      description: {
        story:
          "リンクバリアントは、テキストリンクのようなスタイルのボタンです。",
      },
    },
  },
};

export const Sizes: Story = {
  args: {
    children: "サイズサンプル",
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "ボタンは5つのサイズから選べます。",
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    children: "角丸サンプル",
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Button rounded="none">角なし</Button>
      <Button rounded="sm">小</Button>
      <Button rounded="md">中</Button>
      <Button rounded="lg">大</Button>
      <Button rounded="full">最大</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "ボタンの角丸の度合いをカスタマイズできます。",
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    children: "アイコンサンプル",
    iconOnly: true,
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Button iconOnly size="xs">
        +
      </Button>
      <Button iconOnly size="sm">
        +
      </Button>
      <Button iconOnly size="md">
        +
      </Button>
      <Button iconOnly size="lg">
        +
      </Button>
      <Button iconOnly size="xl">
        +
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "iconOnlyプロパティを使用すると、アイコン専用の正方形ボタンになります。",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "無効ボタン",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "disabledプロパティを設定すると、ボタンが非アクティブ状態になります。",
      },
    },
  },
};
