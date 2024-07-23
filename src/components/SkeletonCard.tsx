import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SkeletonCard() {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0 md:flex md:flex-row justify-between gap-3 lg:gap-8 grid grid-cols-1">
        <div className="w-full">
          <div className="flex flex-col space-y-2.5">
            <Skeleton className="h-4 w-24 rounded" />
            <Skeleton className="h-6 w-36 rounded" />
            <Skeleton className="h-4 w-full rounded" />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {Array.from({ length: 3 }).map((_, techIndex) => (
              <Skeleton className="h-6 w-12 rounded" key={techIndex} />
            ))}
          </div>
          <CardFooter className="p-0 mt-6 flex items-center justify-between">
            <Skeleton className="h-4 w-16 rounded" />
            <div className="flex items-center gap-x-6">
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-4 w-20 rounded" />
            </div>
          </CardFooter>
        </div>
        <Skeleton className="w-full lg:w-80 h-48 lg:h-28 rounded-xl" />
      </CardContent>
      <Separator className="mt-7 bg-neutral-200 dark:bg-neutral-800" />
    </Card>
  );
}
