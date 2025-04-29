import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none",
  variants: {
    variant: {
      primary:
        "bg-primary text-white shadow-sm hover:bg-primary-600 active:bg-primary-700 focus-visible:ring-primary-300",
      secondary:
        "bg-base-100 text-text border border-border shadow-sm hover:bg-base-200 active:bg-base-300 focus-visible:ring-primary-300",
      accent:
        "bg-accent text-text shadow-sm hover:bg-accent-600 active:bg-accent-700 focus-visible:ring-accent-300",
      outline:
        "bg-transparent border border-primary text-primary hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-300",
      ghost:
        "bg-transparent text-text hover:bg-base-100 active:bg-base-200 focus-visible:ring-primary-300",
      link: "bg-transparent text-primary underline-offset-4 hover:underline focus-visible:ring-primary-300 shadow-none p-0 h-auto",
    },
    size: {
      xs: "text-xs px-2.5 py-1.5 rounded-md",
      sm: "text-sm px-3 py-2 rounded-md",
      md: "text-sm px-4 py-2 rounded-md",
      lg: "text-base px-5 py-2.5 rounded-md",
      xl: "text-lg px-6 py-3 rounded-md",
    },
    fullWidth: {
      true: "w-full",
    },
    iconOnly: {
      true: "p-0 flex items-center justify-center",
      false: "",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  compoundVariants: [
    {
      iconOnly: true,
      size: "xs",
      class: "h-7 w-7",
    },
    {
      iconOnly: true,
      size: "sm",
      class: "h-8 w-8",
    },
    {
      iconOnly: true,
      size: "md",
      class: "h-9 w-9",
    },
    {
      iconOnly: true,
      size: "lg",
      class: "h-10 w-10",
    },
    {
      iconOnly: true,
      size: "xl",
      class: "h-12 w-12",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: false,
    iconOnly: false,
    rounded: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  iconOnly?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      fullWidth,
      iconOnly,
      rounded,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={buttonVariants({
          variant,
          size,
          fullWidth,
          iconOnly,
          rounded,
          className,
        })}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
