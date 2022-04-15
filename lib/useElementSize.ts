import React, { useEffect, useRef, useState } from "react";

function useResize(callback: () => void): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const onResize = () => {
      if (typeof callbackRef.current === "function") {
        callbackRef.current();
      }
    };

    requestAnimationFrame(onResize);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
}

export function useElementSize(element: React.RefObject<HTMLDivElement>): {
  width: number | undefined;
  height: number | undefined;
} {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useResize(() => {
    setWidth((previousWidth) => {
      const nextWidth = element.current?.getBoundingClientRect().width;
      return previousWidth !== nextWidth ? nextWidth : previousWidth;
    });
    setHeight((previousHeight) => {
      const nextHeight = element.current?.getBoundingClientRect().height;
      return previousHeight !== nextHeight ? nextHeight : previousHeight;
    });
  });

  return { width, height };
}
