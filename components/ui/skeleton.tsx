import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-accent animate-pulse rounded-md bg-[#0b0c0f]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
