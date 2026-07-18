import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-white/10 bg-white/5 text-foreground backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-white",
        ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium:
          "bg-white text-background shadow-sm hover:bg-white/90 hover:shadow-md active:scale-[0.98]",
        wavy: [
          "relative overflow-hidden",
          "bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400",
          "text-white font-semibold",
          "shadow-lg shadow-cyan-500/25",
          "border border-white/10",
          "hover:shadow-xl hover:shadow-cyan-500/40",
          "hover:scale-[1.02]",
          "active:scale-[0.98]",
          "before:absolute before:inset-0",
          "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-200%] hover:before:translate-x-[200%]",
          "before:transition-transform before:duration-700 before:ease-in-out",
        ],
        "wavy-outline": [
          "relative",
          "border border-cyan-500/30",
          "bg-cyan-500/5 backdrop-blur-sm",
          "text-cyan-100",
          "hover:bg-cyan-500/10 hover:border-cyan-400/50",
          "hover:shadow-lg hover:shadow-cyan-500/20",
          "hover:text-white",
          "active:scale-[0.98]",
        ],
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && <Loader2 className="animate-spin" />}
            {children}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
