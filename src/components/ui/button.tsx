import * as React from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg" | "icon"

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", type = "button", ...props }, ref) => {
    const variants: Record<ButtonVariant, string> = {
      default: "bg-blue-700 text-white shadow-sm hover:bg-blue-800 active:bg-blue-900",
      outline: "border border-slate-300 bg-white text-slate-900 shadow-sm hover:border-slate-400 hover:bg-slate-50 active:bg-slate-100",
      ghost: "text-slate-700 hover:bg-slate-100 active:bg-slate-200",
    }
    const sizes: Record<ButtonSize, string> = {
      sm: "min-h-9 px-3 text-sm",
      md: "min-h-10 px-4 text-sm",
      lg: "min-h-12 px-6 text-base",
      icon: "h-10 w-10 p-0",
    }

    return (
      <button
        className={cn(
          "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-semibold tracking-[0.01em] transition duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button }
