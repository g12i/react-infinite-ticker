import React, { useEffect, useMemo, useRef } from "react";
import { animate } from "./animate";
import { TickerProps } from "./TickerProps";
import { useElementSize } from "./useElementSize";

export const HorizontalTicker: React.FC<TickerProps> = ({
  children,
  duration,
  easing,
  delay,
  reverse = false,
}) => {
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);
  const options = useMemo<KeyframeAnimationOptions>(
    () => ({
      duration,
      easing,
      delay,
      iterations: 1,
      fill: "forwards",
      direction: reverse ? "reverse" : "normal",
    }),
    [duration, easing, delay, reverse]
  );

  const { width: trackWidth } = useElementSize(track1);

  useEffect(() => {
    if (!trackWidth || !track1.current || !track2.current) {
      return;
    }

    const width = trackWidth;
    const track1El = track1.current;
    const track2El = track2.current;
    const controller = new AbortController();

    async function toggle(): Promise<void> {
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
  }, [trackWidth, options]);

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
