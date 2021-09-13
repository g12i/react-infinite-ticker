import type { ReactElement } from "react";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useMeasure } from "./useMeasure";

enum Phase {
  First,
  Second,
}

export const VerticalTicker: React.FC<{ speed?: number }> = ({
  children,
  speed = 1,
}) => {
  // This causes re-render
  const [, setTick] = useState(0);

  // This doesn't change
  const contentHeight = useRef(0);
  const transform1 = useRef(0);
  const transform2 = useRef(0);
  const phase = useRef(Phase.First);

  const measureContentHeight = useMeasure(({ height }) => {
    contentHeight.current = height;
  });

  const swap1 = () => {
    transform1.current = Math.abs(transform1.current);
  };

  const swap2 = () => {
    transform2.current = 0;
  };

  useLayoutEffect(() => {
    let i: number;

    const loop = () => {
      if (
        phase.current === Phase.First &&
        Math.abs(transform1.current) >= contentHeight.current
      ) {
        phase.current = Phase.Second;
        swap1();
      }

      if (
        phase.current === Phase.Second &&
        Math.abs(transform2.current) >= contentHeight.current * 2
      ) {
        phase.current = Phase.First;
        swap2();
      }

      transform1.current = transform1.current - speed;
      transform2.current = transform2.current - speed;

      setTick((old) => (old === 0 ? 1 : 0));

      i = requestAnimationFrame(loop);
    };

    i = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(i);
  }, [speed]);

  return (
    <div
      style={{
        overflow: "hidden",
        height: "100%",
        maxHeight: `${contentHeight.current}px`,
      }}
    >
      <div
        ref={measureContentHeight}
        style={{
          willChange: "transform",
          transform: `translate3d(0,${transform1.current}px,0)`,
        }}
      >
        {children}
      </div>
      <div
        style={{
          willChange: "transform",
          transform: `translate3d(0,${transform2.current}px,0)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
