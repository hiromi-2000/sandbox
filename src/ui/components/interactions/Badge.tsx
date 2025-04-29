import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  variants: {
    variant: {
      primary:
        "bg-primary-100 text-primary-700 dark:bg-primary-100 dark:text-primary-500",
      accent:
        "bg-accent-100 text-accent-700 dark:bg-accent-100 dark:text-accent-500",
      neutral: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
      success:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      warning:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    },
    size: {
      sm: "text-[10px] px-2 py-0.5",
      md: "text-xs px-2.5 py-0.5",
      lg: "text-sm px-3 py-1",
    },
    rounded: {
      full: "rounded-full",
      md: "rounded-md",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    rounded: "full",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant, size, rounded, className, ...props }, ref) => {
    return (
      <span
        className={badgeVariants({ variant, size, rounded, className })}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
