import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
      <div className="rounded-lg flex flex-col shadow-lg p-2 animate-pulse ">
        <div className="w-full aspect-[2/3] relative mb-2">
          <Skeleton className="absolute inset-0 rounded object-cover skeleton" />
        </div>
        <Skeleton className="h-6 w-full mb-2 rounded skeleton" />
        <Skeleton className="h-4 w-1/2 mb-1 rounded skeleton" />
        <Skeleton className="h-4 w-1/3 rounded skeleton" />
      </div>
      <div className="rounded-lg flex flex-col shadow-lg p-2 animate-pulse ">
        <div className="w-full aspect-[2/3] relative mb-2">
          <Skeleton className="absolute inset-0 rounded object-cover skeleton" />
        </div>
        <Skeleton className="h-6 w-full mb-2 rounded skeleton" />
        <Skeleton className="h-4 w-1/2 mb-1 rounded skeleton" />
        <Skeleton className="h-4 w-1/3 rounded skeleton" />
      </div>
      <div className="rounded-lg flex flex-col shadow-lg p-2 animate-pulse ">
        <div className="w-full aspect-[2/3] relative mb-2">
          <Skeleton className="absolute inset-0 rounded object-cover skeleton" />
        </div>
        <Skeleton className="h-6 w-full mb-2 rounded skeleton" />
        <Skeleton className="h-4 w-1/2 mb-1 rounded skeleton" />
        <Skeleton className="h-4 w-1/3 rounded skeleton" />
      </div>
      <div className="rounded-lg flex flex-col shadow-lg p-2 animate-pulse ">
        <div className="w-full aspect-[2/3] relative mb-2">
          <Skeleton className="absolute inset-0 rounded object-cover skeleton" />
        </div>
        <Skeleton className="h-6 w-full mb-2 rounded skeleton" />
        <Skeleton className="h-4 w-1/2 mb-1 rounded skeleton" />
        <Skeleton className="h-4 w-1/3 rounded skeleton" />
      </div>
    </div>
  );
};

export default Loading;
