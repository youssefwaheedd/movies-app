import { RotateCcwIcon } from "lucide-react";
import React from "react";

const LoadingSpanner = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <RotateCcwIcon className="text-white animate-spin h-8 w-8" />
    </div>
  );
};

export default LoadingSpanner;
