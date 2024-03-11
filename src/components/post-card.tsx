"use client";

import type { FC } from "react";
import Link from "next/link";

import { cn, formatDate } from "@/lib/utils";
import { FileWarningIcon } from "@/components/icons";
import type { Post } from "@/app/types/sanity";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface PostCardProps {
  posts: Post[];
}
const PostCard: FC<PostCardProps> = ({ posts }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {posts?.length > 0 ? (
          posts?.map((post: Post) => (
            <Card key={post._id}>
              <CardHeader>
                <Link href={`/blog/${post.slug}`}>
                  <CardTitle
                    className={cn("my-2 line-clamp-2 text-2xl font-bold")}
                  >
                    <span>{post.title}</span>
                  </CardTitle>
                </Link>
                <div className="mt-0 md:mt-2">
                  <div className="flex flex-wrap gap-4">
                    <span>{formatDate(post._createdAt)}</span>
                    <div className="flex flex-wrap gap-3">
                      {post.categories.map((category) => (
                        <Badge
                          className={cn(
                            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                          )}
                          key={category.title}
                        >
                          {category.title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {post.description}
                </p>
              </CardHeader>
              <CardContent>{post.author.name}</CardContent>
            </Card>
          ))
        ) : (
          <section className="flex flex-col items-center justify-center">
            <FileWarningIcon className="mb-5 mt-7 size-10 text-primary" />

            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              No posts found
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
              Try changing the filters or reloading the page
            </p>
          </section>
        )}
      </div>
    </div>
  );
};
export default PostCard;
