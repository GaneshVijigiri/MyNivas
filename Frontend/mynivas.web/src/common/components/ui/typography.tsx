import { cn } from "@/common/utils/utils";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children?: React.ReactNode;
  className?: string;
}
const Typography = ({ variant, children, className }: TypographyProps) => {
  const variants = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
    h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    h5: "scroll-m-20 text-lg font-semibold tracking-tight",
    h6: "scroll-m-20 text-base font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
  };
  const Component = variant;
  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
