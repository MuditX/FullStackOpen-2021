import React from "react";
import Part from "./Part";

export const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      {parts &&
        parts.map((part, index) => {
          return (
            <Part key={index} part={part.name} exercises={part.exercises} />
          );
        })}
    </div>
  );
};
