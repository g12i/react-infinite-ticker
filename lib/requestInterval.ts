export enum NextState {
  Stop,
  Continue,
}

type CleanupFunction = () => void;

export function requestInterval(next: () => void): CleanupFunction {
  let i: number;

  const loop = () => {
    next();

    i = requestAnimationFrame(loop);
  };

  i = requestAnimationFrame(loop);

  return () => cancelAnimationFrame(i);
}
