"use client";
import React, { useEffect, useState } from "react";

export default function Timeline(props: { children: React.ReactNode[] }) {
  const { children } = props;

  // Start with all children hidden
  const [visibleArr, setVisibleArr] = useState(
    new Array(children.length).fill(false)
  );

  // Reveal each child after a delay
  useEffect(() => {
    const delay = 1000;
    let timeout = 0;

    children.forEach((_, index) => {
      setTimeout(() => {
        setVisibleArr((prevState) => {
          const nextState = [...prevState];
          nextState[index] = true;
          return nextState;
        });
      }, timeout);

      timeout += delay;
    });
  }, [children]);

  return (
    <div className="timeline">
      {children.map((child, i) => {
        return (
          <div
            key={i}
            className={`container transition-opacity duration-500 ease-in-out 
            ${i % 2 === 0 ? "left" : "right"} ${
              visibleArr[i] ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="content">{child}</div>
          </div>
        );
      })}
    </div>
  );
}
