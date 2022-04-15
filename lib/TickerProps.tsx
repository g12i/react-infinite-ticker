import type { PropsWithChildren } from "react";

export type TickerProps = PropsWithChildren<{
  duration: KeyframeAnimationOptions["duration"];
  easing?: KeyframeAnimationOptions["easing"];
  delay?: KeyframeAnimationOptions["delay"];
}>;
