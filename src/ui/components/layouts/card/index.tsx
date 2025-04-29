import { tv, VariantProps } from "tailwind-variants";
const cardVariants = tv({
  base: "rounded-lg border border-gray-200 bg-white",
  variants: {
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      "4xl": "rounded-4xl",
      "5xl": "rounded-5xl",
    },
  },
});

type CardProps<T extends React.ElementType = "div"> = {
  as?: T;
} & React.ComponentProps<T> &
  VariantProps<typeof cardVariants>;

export function Card<T extends React.ElementType>({
  children,
  as = "div",
  radius = "md",
  className,
  ...props
}: CardProps<T>) {
  const Component = as || "div";
  const base = cardVariants({ radius, className });
  return (
    <Component className={base} {...props}>
      {children}
    </Component>
  );
}
