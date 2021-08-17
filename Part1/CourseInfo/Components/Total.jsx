import React from "react";

export default function Total({ parts }) {
  let total = 0;
  if (parts) {
    parts.forEach((part) => {
      total += part.exercises;
    });
  }
  return (
    <div>
      <p>
        Number of exercises
        {total}
      </p>
    </div>
  );
}
