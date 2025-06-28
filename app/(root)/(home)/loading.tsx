import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="rounded-lg flex flex-col shadow-lg p-2 bg-[#0b0c0f]">
      <div className="w-full aspect-[2/3] relative mb-2">
        <Skeleton className="absolute inset-0 w-full h-full rounded object-cover" />
      </div>
      <Skeleton className="h-6 w-full mb-2" />
      <Skeleton className="h-4 w-1/2 mb-1" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  );
};

export default loading;
