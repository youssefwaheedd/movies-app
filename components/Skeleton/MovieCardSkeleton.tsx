import React from "react";
import { Skeleton } from "../ui/skeleton";

const MovieCardSkeleton = () => {
  return (
    <div className="rounded-lg flex flex-col shadow-lg p-2 ">
      <div className="w-full aspect-[2/3] relative mb-2">
        <Skeleton className="absolute inset-0 rounded object-cover skeleton" />
      </div>
      <Skeleton className="h-6 w-full mb-2 rounded skeleton" />
      <Skeleton className="h-4 w-1/2 mb-1 rounded skeleton" />
      <Skeleton className="h-4 w-1/3 rounded skeleton" />
    </div>
  );
};

export default MovieCardSkeleton;
