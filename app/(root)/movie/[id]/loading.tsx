import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-4 lg:p-20 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start gap-2 lg:gap-6 animate-pulse bg-[#0b0c0f]">
      {/* Image Skeleton */}
      <Skeleton className="rounded-lg object-cover mb-4 w-full lg:min-h-[600px] lg:w-[400px] h-[500px] skeleton " />
      {/* Content Skeletons */}
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        {/* Title */}
        <Skeleton className="h-10 w-3/4 mb-2 skeleton rounded" />
        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Skeleton className="h-6 w-16 skeletonrounded-full" />
          <Skeleton className="h-6 w-12 skeletonrounded-full" />
          <Skeleton className="h-6 w-20 skeletonrounded-full" />
        </div>
        {/* Rating, runtime, release date */}
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <Skeleton className="h-6 w-12 skeleton rounded" />
          <Skeleton className="h-6 w-16 skeleton rounded" />
          <Skeleton className="h-6 w-20 skeleton rounded" />
        </div>
        {/* Overview */}
        <Skeleton className="h-20 w-full mb-4 skeleton rounded" />
        {/* Director */}
        <Skeleton className="h-6 w-32 mb-4 skeleton rounded" />
        {/* Top Cast */}
        <div className="mb-4">
          <Skeleton className="h-5 w-24 mb-1 skeleton rounded" />
          <div className="flex flex-wrap gap-2 mt-1">
            <Skeleton className="h-6 w-16 skeleton rounded" />
            <Skeleton className="h-6 w-14 skeleton rounded" />
            <Skeleton className="h-6 w-20 skeleton rounded" />
          </div>
        </div>
        {/* Full Cast */}
        <div>
          <Skeleton className="h-5 w-24 mb-1 skeleton rounded" />
          <div className="flex flex-wrap gap-2 mt-1">
            <Skeleton className="h-6 w-16 skeleton rounded" />
            <Skeleton className="h-6 w-14 skeleton rounded" />
            <Skeleton className="h-6 w-20 skeleton rounded" />
            <Skeleton className="h-6 w-12 skeleton rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
