import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "UI/Interactions/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "バッジコンポーネントは、ステータスや情報を表示するために使用されます。",
      },
      page: () => import("./Badge.mdx"),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "accent",
        "neutral",
        "success",
        "warning",
        "error",
        "info",
      ],
      description: "バッジの外観バリアント",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "バッジのサイズ",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
    },
    rounded: {
      control: { type: "select" },
      options: ["full", "md"],
      description: "バッジの角丸の程度",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "full" },
      },
    },
    children: {
      description: "バッジに表示するテキスト",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "新機能",
  },
  parameters: {
    docs: {
      description: {
        story:
          "プライマリバリアントは、新機能や特に強調したい情報に使用します。",
      },
    },
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "人気",
  },
  parameters: {
    docs: {
      description: {
        story:
          "アクセントバリアントは、人気の項目や注目してほしい情報に使用します。",
      },
    },
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "保留中",
  },
  parameters: {
    docs: {
      description: {
        story:
          "ニュートラルバリアントは、比較的重要度の低い情報やステータスに使用します。",
      },
    },
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "完了",
  },
  parameters: {
    docs: {
      description: {
        story:
          "サクセスバリアントは、正常に完了した処理や肯定的な情報に使用します。",
      },
    },
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "警告",
  },
  parameters: {
    docs: {
      description: {
        story: "ワーニングバリアントは、注意が必要な情報や警告に使用します。",
      },
    },
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "エラー",
  },
  parameters: {
    docs: {
      description: {
        story: "エラーバリアントは、エラー状態や問題がある情報に使用します。",
      },
    },
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "情報",
  },
  parameters: {
    docs: {
      description: {
        story: "インフォバリアントは、一般的な情報提供に使用します。",
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
      <Badge size="sm">小</Badge>
      <Badge size="md">中</Badge>
      <Badge size="lg">大</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "バッジは3つのサイズから選べます。",
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
      <Badge rounded="full">丸型</Badge>
      <Badge rounded="md">角丸</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "バッジの角丸を完全な丸（full）または角丸（md）から選べます。",
      },
    },
  },
};

export const AllVariants: Story = {
  args: {
    children: "バリアントサンプル",
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="primary">プライマリ</Badge>
      <Badge variant="accent">アクセント</Badge>
      <Badge variant="neutral">中立</Badge>
      <Badge variant="success">成功</Badge>
      <Badge variant="warning">警告</Badge>
      <Badge variant="error">エラー</Badge>
      <Badge variant="info">情報</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "バッジには7つのバリアントがあります。目的に応じて使い分けることができます。",
      },
    },
  },
};
