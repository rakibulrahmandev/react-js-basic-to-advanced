# React useLayoutEffect hooks explain.

## **What is `useLayoutEffect`?**

`useLayoutEffect` is a **React Hook** that works similarly to `useEffect`, but it fires **synchronously after all DOM mutations** and  **before the browser paints the screen** .

In simpler terms:

* It runs **after React has updated the DOM** but  **before the user sees it on the screen** .
* It’s mainly used for **reading layout from the DOM** and **making DOM adjustments** before the browser paints.

#### Syntax:

```javascript
import { useLayoutEffect } from 'react';

useLayoutEffect(() => {
  // Your code here
  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);
```

* **Callback function** : The code you want to run.
* **Dependencies array** : Works like `useEffect`, only re-runs when dependencies change.

## Key Differences Between `useEffect` and `useLayoutEffect`

| Feature     | `useEffect`                               | `useLayoutEffect`                        |
| ----------- | ------------------------------------------- | ------------------------------------------ |
| Timing      | After paint (asynchronous)                  | Before paint (synchronous)                 |
| Use Case    | Side effects (fetching data, subscriptions) | DOM measurements, animations, layout fixes |
| Blocking UI | Doesn’t block paint                        | Blocks paint until done                    |

#### Example:

Imagine you want to **measure a DOM element’s size** and adjust something based on it:

```javascript
import React, { useRef, useLayoutEffect, useState } from 'react';

function Box() {
  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // Measure the width of the div after DOM update
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    setWidth(boxWidth);
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ width: '50%' }}>Hello Box</div>
      <p>The box width is: {width}px</p>
    </div>
  );
}

export default Box;
```

* Here, `useLayoutEffect` ensures that the width is measured  **before the browser paints** , avoiding flickering.

## **When to Use `useLayoutEffect`**

* Measuring DOM elements (`getBoundingClientRect()`, scroll positions)
* Synchronously applying styles or layout changes
* Animations that depend on DOM measurements

**Rule of thumb:** Use `useEffect` by default. Only use `useLayoutEffect` when you  **must read or write DOM before paint** .
