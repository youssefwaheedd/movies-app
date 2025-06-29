import SectionSkeleton from "@/components/Skeleton/SectionSkeleton";
import LoadingSpanner from "@/components/ui/loadingSpanner";

export default function Loading() {
  return (
    <main className="min-h-screen ">
      <LoadingSpanner />

      <div className="movie-section">
        <strong className="movie-section-title">Favorite Movies</strong>
        <SectionSkeleton />
      </div>

      <div className="movie-section">
        <strong className="movie-section-title">Featured Movies</strong>
        <SectionSkeleton />
      </div>

      <div className="movie-section">
        <strong className="movie-section-title">Trending This Week</strong>
        <SectionSkeleton />
      </div>
    </main>
  );
}
