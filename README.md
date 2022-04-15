# react-infinite-ticker

React component that scrolls children infinitely.

## Demo

[See here](https://g12i.github.io/react-infinite-ticker/).

## Quick start

```bash
npm install react-infinite-ticker
```

```jsx
import React from "react";
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";

function App() {
  return (
    <div>
      <VerticalTicker duration={15000}>
        <div>Put anything you want</div>
        <img src="/images/as/well.png" />
        <h1>All good</h1>
      </VerticalTicker>
      <HorizontalTicker duration={25000}>
        <div>Put anything you want</div>
        <img src="/images/as/well.png" />
        <h1>All good</h1>
      </HorizontalTicker>
    </div>
  );
}
```

## Configuration

Both `VerticalTicker` and `HorizontalTicker` take following props.

### `duration` **REQUIRED**

The **number** of milliseconds it should take to complete one one full animation iteration.

### `delay` _(optional)_

The **number** of milliseconds it should wait before each iterations.

### `easing` _(optional)_

The rate of the animation's change over time. Accepts the pre-defined values "linear", "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value like "cubic-bezier(0.42, 0, 0.58, 1)". Defaults to "linear". [(source)](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#easing)

### `reverse` _(optional)_

The **boolean** indicating whether the animation should run forward or backward. Defaults to `false`
