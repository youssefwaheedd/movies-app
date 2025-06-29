"use client";

import { formatRuntime } from "@/lib/utils";
import { MetaProps } from "@/types";
import React from "react";

const MetaBar = ({ vote_average, runtime, release_date }: MetaProps) => {
  return (
    <div className="flex items-center gap-4 mb-4 flex-wrap animate-fade-in">
      <span className="text-[#1ce783] font-bold text-lg">
        ⭐ {vote_average}
      </span>
      <span className="text-gray-300">{formatRuntime(runtime)}</span>
      <span className="text-gray-300">{release_date}</span>
    </div>
  );
};

export default MetaBar;
