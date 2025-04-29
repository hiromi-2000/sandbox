import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "UI/Interactions/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "outlined"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "invalid", "valid", "disabled"],
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "テキストを入力",
  },
};

export const WithLabel: Story = {
  args: {
    label: "メールアドレス",
    placeholder: "example@example.com",
  },
};

export const WithError: Story = {
  args: {
    label: "パスワード",
    type: "password",
    error: "8文字以上入力してください",
    state: "invalid",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Input size="sm" placeholder="小サイズ" />
      <Input size="md" placeholder="中サイズ" />
      <Input size="lg" placeholder="大サイズ" />
    </div>
  ),
};

export const States: Story = {
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
};

export const FullWidth: Story = {
  args: {
    placeholder: "幅100%の入力欄",
    fullWidth: true,
  },
};
