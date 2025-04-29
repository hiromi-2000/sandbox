import { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta = {
  title: "Card",
  component: Card,
  args: {
    children: "Card",
  },
  argTypes: {
    radius: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AsLink: Story = {
  args: {
    as: "a",
    href: "https://www.google.com",
  },
};

export const AsButton: Story = {
  args: {
    as: "button",
    type: "button",
  },
};
