"use client";
import React, { useEffect, useRef, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
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