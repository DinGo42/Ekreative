'use client';
import { useState, useCallback, useMemo } from 'react';
import { twJoin } from 'tailwind-merge';
import { AnimationsTimingKeys, animationsTimings } from '../utils';

type UseOptionalStyleProps = {
  timing: AnimationsTimingKeys;
  initialIsEnabled?: boolean;
  style: (isOpen: boolean) => string;
  onEnable?: () => void;
  onDisable?: () => void;
};

export const useOptionalStyle = ({
  timing,
  initialIsEnabled,
  style,
  onEnable,
  onDisable,
}: UseOptionalStyleProps) => {
  const [isEnabled, setIsEnabled] = useState(initialIsEnabled ?? true);

  const disableStyle = useCallback(() => {
    setTimeout(() => {
      setIsEnabled(false);
      onDisable && onDisable?.();
    }, animationsTimings[timing].ms);
  }, [timing, onDisable]);

  const enableStyle = useCallback(() => {
    setIsEnabled(true);
    onEnable &&
      setTimeout(() => {
        onEnable?.();
      }, animationsTimings[timing].ms);
  }, [onEnable, timing]);

  const className = useMemo(
    () => twJoin(style(isEnabled), animationsTimings[timing].className),
    [timing, isEnabled, style]
  );

  return { enableStyle, disableStyle, className };
};
