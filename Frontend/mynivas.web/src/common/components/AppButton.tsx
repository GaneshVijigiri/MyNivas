import { Button, type ButtonProps } from "@mantine/core";
import { cn } from "../utils/tailwindutils";
import type { ComponentPropsWithoutRef } from "react";

type Appearance = "primary" | "outline" | "ghost" | "neutral";

type AppButtonProps = ButtonProps & ComponentPropsWithoutRef<'button'> & {
  className?: string;
  appearance?: Appearance;
};

const appearanceClasses: Record<Appearance, string> = {
  primary: "bg-red-600 hover:bg-red-700 text-white",
  outline: "border border-red-600 text-red-600 bg-transparent hover:bg-red-50",
  ghost: "bg-transparent hover:bg-red-50 text-red-600",
  neutral: "bg-gray-100 hover:bg-gray-200 text-gray-900",
};

const AppButton = ({ appearance = "primary", className, children, ...rest }: AppButtonProps) => {
  // Prefer user-provided unstyled value, default to true so Tailwind backgrounds apply
  const unstyledProp = (rest as ButtonProps).unstyled ?? true;

  return (
    <Button
      {...(rest as ButtonProps)}
      unstyled={unstyledProp}
      className={cn(
        "rounded-xl px-6 h-10",
        "font-medium",
        appearanceClasses[appearance],
        className,
      )}
    >
      {children}
    </Button>
  );
};

export default AppButton;
