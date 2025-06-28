"use client";

import { formatRuntime } from "@/lib/utils";
import { MetaProps } from "@/types";
import React from "react";
import { motion } from "framer-motion";

const MetaBar = ({ vote_average, runtime, release_date }: MetaProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-4 flex-wrap"
    >
      <span className="text-[#1ce783] font-bold text-lg">
        ⭐ {vote_average}
      </span>
      <span className="text-gray-300">{formatRuntime(runtime)}</span>
      <span className="text-gray-300">{release_date}</span>
    </motion.div>
  );
};

export default MetaBar;
