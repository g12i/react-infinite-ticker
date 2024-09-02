import useResizeObserver from "@react-hook/resize-observer";
import React, { useLayoutEffect, useState } from "react";

type ElementSize = {
  width: number | undefined;
  height: number | undefined;
};

export function useElementSize(
  element: React.RefObject<HTMLDivElement>
): ElementSize {
  const [size, setSize] = useState<ElementSize>({
    width: undefined,
    height: undefined,
  });

  useLayoutEffect(() => {
    if (element.current) {
      const { width, height } = element.current.getBoundingClientRect();

      setSize({ width, height });
    }
  }, [element]);

  useResizeObserver(element, (entry) => {
    const { width, height } = entry.contentRect;

    setSize({ width, height });
  });

  return size;
}
