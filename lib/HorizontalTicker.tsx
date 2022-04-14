import React, { useEffect, useRef } from "react";
import { animate } from "./animate";

export const HorizontalTicker: React.FC<{ duration?: number }> = ({
  children,
  duration = 10000,
}) => {
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trackWidth = track1.current?.getBoundingClientRect().width;

    if (!trackWidth || !track1.current || !track2.current) {
      return;
    }

    const width = trackWidth;
    const track1El = track1.current;
    const track2El = track2.current;
    const controller = new AbortController();

    async function toggle(): Promise<void> {
      const options = {
        duration,
        iterations: 1,
        fill: "forwards" as const,
      };

      const zeroToMinusOne = [
        { transform: "translateX(0px)" },
        { transform: `translateX(${-1 * width}px)` },
      ];

      const oneToZero = [
        { transform: `translateX(${width}px)` },
        { transform: `translateX(${0}px)` },
      ];

      const minusOneToMinusTwo = [
        { transform: `translateX(${-1 * width}px)` },
        { transform: `translateX(${-2 * width}px)` },
      ];

      const promise1 = animate(
        track1El,
        zeroToMinusOne,
        options,
        controller.signal
      ).then(() => animate(track1El, oneToZero, options, controller.signal));

      const promise2 = animate(
        track2El,
        zeroToMinusOne,
        options,
        controller.signal
      ).then(() =>
        animate(track2El, minusOneToMinusTwo, options, controller.signal)
      );

      return Promise.all([promise1, promise2]).then(() => toggle());
    }

    toggle();

    return () => {
      controller.abort();
    };
  }, [duration]);

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
      }}
    >
      <div
        ref={track1}
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
      <div
        ref={track2}
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
};
