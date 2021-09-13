import { useCallback, useEffect, useRef } from "react";

type Measurement = {
  height: number;
  width: number;
};

type ClientCallback = (measure: Measurement) => void;

export function useMeasure<T extends HTMLElement>(
  callback: ClientCallback
): React.RefCallback<T> {
  const clientCallback = useRef<ClientCallback>(callback);
  const resizeObserver = useRef<ResizeObserver>(null);

  useEffect(() => {
    clientCallback.current = callback;
  }, [callback]);

  return useCallback((node) => {
    if (node !== null) {
      const handleResize = (entries: ResizeObserverEntry[]): void => {
        const entry = entries.find((it) => it.target === node);
        if (entry) {
          clientCallback.current(entry.contentRect);
        }
      };
      requestAnimationFrame(() =>
        clientCallback.current(node.getBoundingClientRect())
      );
      resizeObserver.current = new ResizeObserver(handleResize);
      resizeObserver.current.observe(node);
    } else {
      resizeObserver.current.disconnect();
      resizeObserver.current = null;
    }
  }, []);
}
