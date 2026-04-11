import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "section" | "div";
};

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  as: Tag = "section",
}: SectionShellProps) {
  return (
    <Tag id={id} className={cn("scroll-mt-24", className)}>
      <div className={cn("container mx-auto max-w-6xl px-4", innerClassName)}>{children}</div>
    </Tag>
  );
}
