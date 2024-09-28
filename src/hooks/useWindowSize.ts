"use client";

import { useLayoutEffect, useState } from "react";

export const useWindowSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const getWindowSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    getWindowSize();

    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, []);
  return screenSize;
};

