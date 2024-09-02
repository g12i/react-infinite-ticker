export function animationPromise(
  animation: Animation,
  signal: AbortSignal
): Promise<void> {
  return new Promise((resolve) => {
    const onAbort = () => {
      animation.cancel();
    };

    const onFinish = () => {
      signal.removeEventListener("abort", onAbort);
      animation.removeEventListener("finish", onFinish);
      resolve();
    };

    signal.addEventListener("abort", onAbort);
    animation.addEventListener("finish", onFinish);
  });
}

export function animate(
  element: HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
  signal: AbortSignal
): Promise<void> {
  return new Promise((resolve) => {
    const animation = element.animate(keyframes, options);

    const onAbort = () => {
      animation.cancel();
    };

    const onFinish = () => {
      signal.removeEventListener("abort", onAbort);
      animation.removeEventListener("finish", onFinish);
      resolve();
    };

    signal.addEventListener("abort", onAbort);
    animation.addEventListener("finish", onFinish);
  });
}
