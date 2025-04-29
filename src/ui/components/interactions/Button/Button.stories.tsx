import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "UI/Interactions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "outline", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
    },
    iconOnly: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
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
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "ボタン",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "ボタン",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "ボタン",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "ボタン",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "リンクボタン",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button rounded="none">角なし</Button>
      <Button rounded="sm">小</Button>
      <Button rounded="md">中</Button>
      <Button rounded="lg">大</Button>
      <Button rounded="full">最大</Button>
    </div>
  ),
};

export const IconOnly: Story = {
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
};

export const Disabled: Story = {
  args: {
    children: "無効ボタン",
    disabled: true,
  },
};
