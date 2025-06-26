import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-4 animate-pulse">
      <Skeleton className="rounded-lg w-full h-[400px] bg-gray-300 mb-4" />

      <Skeleton className="h-8 bg-gray-300 rounded w-3/4 mb-2" />
      <Skeleton className="h-4 bg-gray-200 rounded w-full mb-4" />

      <div className="text-sm space-y-2 mt-4">
        <Skeleton className="h-4 bg-gray-200 rounded w-1/2" />
        <Skeleton className="h-4 bg-gray-200 rounded w-1/3" />
        <Skeleton className="h-4 bg-gray-200 rounded w-1/4" />
        <Skeleton className="h-4 bg-gray-200 rounded w-2/3" />
        <Skeleton className="h-4 bg-gray-200 rounded w-1/2" />
        <Skeleton className="h-4 bg-gray-200 rounded w-3/5" />
      </div>
    </div>
  );
}
