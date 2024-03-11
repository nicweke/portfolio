"use client";

import { useCallback, useTransition, type FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn, slugify } from "@/lib/utils";
import type { Category } from "@/app/types/sanity";

import { Button } from "./ui/button";

interface CategoryButtonsProps {
  categories: Category[];
}

const CategoryButtons: FC<CategoryButtonsProps> = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const categoryParam = searchParams.get("category");

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex flex-row flex-wrap gap-5  md:flex-col  ">
      <div>
        <Button
          onClick={() => {
            startTransition(() => {
              router.push(
                `${pathname}?${createQueryString({
                  category: null,
                })}`
              );
            });
          }}
          disabled={isPending}
          className={cn(
            !categoryParam &&
              "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90"
          )}
          variant="outline"
          size="sm"
        >
          All posts
        </Button>
      </div>

      {categories.map((category: Category) => (
        <div key={category.title}>
          <Button
            onClick={() => {
              startTransition(() => {
                router.push(
                  `${pathname}?${createQueryString({
                    category: slugify(category.title),
                  })}`
                );
              });
            }}
            disabled={isPending}
            className={cn(
              slugify(category.title) == categoryParam &&
                "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90"
            )}
            variant="outline"
            size="sm"
          >
            {category.title}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CategoryButtons;
