import React, { useEffect, useMemo, useRef } from "react";
import { animate } from "./animate";
import { TickerProps } from "./TickerProps";
import { useElementSize } from "./useElementSize";

export const VerticalTicker: React.FC<TickerProps> = ({
  children,
  duration,
  easing,
  delay,
}) => {
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);
  const options = useMemo<KeyframeAnimationOptions>(
    () => ({
      duration,
      easing,
      delay,
      iterations: 1,
      fill: "forwards" as const,
    }),
    [duration, easing, delay]
  );

  const { height: trackHeight } = useElementSize(track1);

  useEffect(() => {
    if (!trackHeight || !track1.current || !track2.current) {
      return;
    }

    const height = trackHeight;
    const track1El = track1.current;
    const track2El = track2.current;
    const controller = new AbortController();

    async function toggle(): Promise<void> {
      const zeroToMinusOne = [
        { transform: "translateY(0px)" },
        { transform: `translateY(${-1 * height}px)` },
      ];

      const oneToZero = [
        { transform: `translateY(${height}px)` },
        { transform: `translateY(${0}px)` },
      ];

      const minusOneToMinusTwo = [
        { transform: `translateY(${-1 * height}px)` },
        { transform: `translateY(${-2 * height}px)` },
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
  }, [trackHeight, options]);

  return (
    <div
      style={{
        overflow: "hidden",
        height: "100%",
      }}
    >
      <div ref={track1}>{children}</div>
      <div ref={track2}>{children}</div>
    </div>
  );
};
