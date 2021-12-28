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
      <VerticalTicker>
        <div>Put anything you want</div>
        <img src="/images/as/well.png" />
        <h1>All good</h1>
      </VerticalTicker>
      <HorizontalTicker speed={1.5}>
        <div>Put anything you want</div>
        <img src="/images/as/well.png" />
        <h1>All good</h1>
      </HorizontalTicker>
    </div>
  );
}
```

## Configuration

### `speed` _(optional)_

Both `VerticalTicker` and `HorizontalTicker` take `speed` props, which is a
**number** of pixels by which elements are scrolled on each animation frame.
