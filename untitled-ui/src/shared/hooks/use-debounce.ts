"use client";
import { useEffect } from "react";

export const useDebounce = (callback: () => unknown, delay: number) => {
  useEffect(() => {
    const getValue = setTimeout(() => {
      callback();
    }, delay);
    return () => clearTimeout(getValue);
  }, [callback, delay]);
};
