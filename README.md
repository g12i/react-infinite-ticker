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

### `duration` _(optional)_

Both `VerticalTicker` and `HorizontalTicker` take `duration` props, which is a
**number** of milliseconds it should take to scroll the whole children content.
