"use client";

import React from "react";
import type { CreditListProps } from "@/types";

const CreditList = ({ title, credits, type }: CreditListProps) => {
  return (
    <div className="mb-4 animate-fade-in">
      <strong className="text-[#1ce783]">{title}:</strong>
      <div className="flex flex-wrap gap-2 mt-1">
        {credits.map((credit) => (
          <span
            key={`${credit.id}-${
              "character" in credit ? credit.character : credit.job
            }`}
            className="bg-gray-800 px-3 py-2 rounded text-sm text-gray-100 flex flex-col gap-2"
          >
            <span className="font-medium text-white">{credit.name}</span>
            {type === "cast" && "character" in credit && credit.character && (
              <span className="text-gray-400 text-xs">
                as {credit.character}
              </span>
            )}
            {type === "crew" && "job" in credit && credit.job && (
              <span className="text-gray-400 text-xs">{credit.job}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CreditList;
