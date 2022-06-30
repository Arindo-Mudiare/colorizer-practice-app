import React, { useState } from "react";
import Star from "./Star";
import { createArray } from "./lib";

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
    </>
  );
}
