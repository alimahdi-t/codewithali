"use client";
import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(node);

    return () => {
      scrollObserver.unobserve(node);
    };
  }, []);

  const classes = `transition-opacity duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};