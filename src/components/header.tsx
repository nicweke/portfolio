import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string | null;
  page?: boolean;
  size?: "default" | "sm";
}
export function Header({
  title,
  description,
  page = false,
  className,
  ...props
}: HeaderProps) {
  return (
    <div>
      <div
        className={cn(
          "mx-auto my20 justify-center",
          className,
          page ? "my-10" : "my:20"
        )}
      >
        <h3
          className={cn(
            "flex flex-col justify-center text-3xl font-bold tracking-tight md:text-5xl ",
            !description && "flex flex-row"
          )}
        >
          {title}
        </h3>
        {description ? (
          <p
            className={cn(
              "mt-3 line-clamp-2 text-lg text-muted-foreground md:text-xl  ",
              !description && "hidden"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
