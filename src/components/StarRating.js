import React, { useState } from "react";
import Star from "./Star";
import { createArray } from "./lib";
import { useColors } from "../color-hooks/useColors";

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  const { rateColor } = useColors();
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => rateColor(i + 1)}
        />
      ))}
    </>
  );
}
