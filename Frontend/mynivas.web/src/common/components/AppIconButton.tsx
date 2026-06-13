import { ActionIcon, type ActionIconProps } from "@mantine/core";
import { cn } from "../utils/tailwindutils";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

type Appearance = "primary" | "outline" | "ghost" | "neutral";

type Size = "sm" | "md" | "lg";

type AppIconButtonProps = Omit<ActionIconProps, "size"> & ComponentPropsWithoutRef<'button'> & {
  icon: ReactNode;
  appearance?: Appearance;
  size?: Size;
  className?: string;
  ariaLabel?: string;
};

const appearanceClasses: Record<Appearance, string> = {
  primary: "bg-red-600 hover:bg-red-700 text-white",
  outline: "border border-red-600 text-red-600 bg-transparent hover:bg-red-50",
  ghost: "bg-transparent hover:bg-red-50 text-red-600",
  neutral: "bg-gray-100 hover:bg-gray-200 text-gray-900",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
};

const AppIconButton = ({ icon, appearance = "primary", size = "md", className, ariaLabel, ...rest }: AppIconButtonProps) => {
  const unstyledProp = (rest as ActionIconProps).unstyled ?? true;

  return (
    <ActionIcon
      {...(rest as ActionIconProps)}
      unstyled={unstyledProp}
      aria-label={ariaLabel}
      className={cn("rounded-lg flex items-center justify-center", sizeClasses[size], appearanceClasses[appearance], className)}
    >
      {icon}
    </ActionIcon>
  );
};

export default AppIconButton;
