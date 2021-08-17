import React from "react";

export default function Part({ part, exercises }) {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  );
}
