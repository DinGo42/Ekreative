"use client";
import { useState, useCallback, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { AnimationsTimingKeys, animationsTimings } from "../utils";

type UseOptionalStyleProps = {
  timing: AnimationsTimingKeys;
  initialIsEnabled?: boolean;
  style: (isOpen: boolean) => string;
  onEnable?: () => void;
  onDisable?: () => void;
};

export const useOptionalStyle = ({ timing, initialIsEnabled, style, onEnable, onDisable }: UseOptionalStyleProps) => {
  const [isEnabled, setIsEnabled] = useState(initialIsEnabled ?? true);

  const disableStyle = useCallback(() => {
    onDisable &&
      setTimeout(() => {
        onDisable();
      }, animationsTimings[timing].ms);
    setIsEnabled(false);
  }, [onDisable, timing]);

  const enableStyle = useCallback(() => {
    setIsEnabled(true);
    onEnable && onEnable();
  }, [onEnable]);

  const autoCloseEnable = useCallback(() => {
    enableStyle();
    setTimeout(() => {
      disableStyle();
    }, animationsTimings[timing].ms);
  }, [disableStyle, enableStyle, timing]);

  const className = useMemo(
    () => twMerge(style(isEnabled), animationsTimings[timing].className),
    [timing, isEnabled, style],
  );

  return { enableStyle, disableStyle, className, autoCloseEnable };
};
