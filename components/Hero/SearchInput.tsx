"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput({
  initialQuery,
}: {
  initialQuery: string;
}) {
  const [input, setInput] = useState(initialQuery);
  const router = useRouter();

  // Update input when initialQuery changes (e.g., when navigating)
  useEffect(() => {
    setInput(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const query = input.trim();
      const url = query ? `/?query=${encodeURIComponent(query)}` : "/";
      router.replace(url);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input, router]);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="border p-2 rounded w-full mb-4"
      placeholder="Search for a movie..."
      aria-label="Search movies"
      role="searchbox"
    />
  );
}
