import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "UI/Interactions/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
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
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    rounded: {
      control: { type: "select" },
      options: ["full", "md"],
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
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "人気",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "保留中",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "完了",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "警告",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "エラー",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "情報",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">小</Badge>
      <Badge size="md">中</Badge>
      <Badge size="lg">大</Badge>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge rounded="full">丸型</Badge>
      <Badge rounded="md">角丸</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
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
};
