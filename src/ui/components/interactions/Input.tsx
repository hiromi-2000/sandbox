import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputVariants = tv({
  base: "bg-base-50 border border-color rounded-md px-3 py-2 text-text placeholder:text-text-lighter focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 disabled:opacity-50 disabled:cursor-not-allowed",
  variants: {
    variant: {
      default: "",
      filled: "bg-base-100",
      outline: "bg-transparent",
    },
    size: {
      sm: "text-sm px-2 py-1",
      md: "text-base px-3 py-2",
      lg: "text-lg px-4 py-3",
    },
    fullWidth: {
      true: "w-full",
    },
    state: {
      error: "border-error focus:ring-error focus:border-error",
      success: "border-success focus:ring-success focus:border-success",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: false,
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, size, fullWidth, state, label, error, ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-text">{label}</label>
        )}
        <input
          className={inputVariants({
            variant,
            size,
            fullWidth,
            state,
            className,
          })}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
