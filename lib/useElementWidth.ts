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

export function useElementWidth(
  element: React.RefObject<HTMLDivElement>
): number | undefined {
  const [trackWidth, setTrackWidth] = useState<number>();

  useResize(() => {
    const next = element.current?.getBoundingClientRect().width;
    setTrackWidth((previous) => {
      return previous !== next ? next : previous;
    });
  });

  return trackWidth;
}
