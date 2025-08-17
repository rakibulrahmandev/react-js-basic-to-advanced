# React useCallback hooks explain.

## **What is `useCallback`?**

`useCallback` is a **React hook** that  **memoizes a function** .

It returns a **memoized version** of the callback function that only changes if one of the dependencies changes.

In simple words: it  **prevents a function from being recreated on every render** , unless its dependencies change.

#### Syntax:

```javascript
const memoizedCallback = useCallback(
  () => {
    // your function logic
  },
  [dependencies]
);
```

* **First argument:** The function you want to memoize.
* **Second argument:** An array of dependencies. The function will only be recreated if one of these changes.

## **Why use `useCallback`?**

1. **Performance optimization:**
   * Helps prevent unnecessary re-renders when passing functions to child components.
2. **Stable function reference:**
   * Useful if a child component depends on reference equality (`React.memo`, `useEffect`, or `useMemo`).

#### Example:

```javascript
import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // No dependencies, function reference is stable

  return (
    <div>
      <p>Count: {count}</p>
      <Child handleClick={increment} />
    </div>
  );
}

export default App;
```

##### **Explanation:**

* Without `useCallback`, the `increment` function is recreated on every render.
* With `useCallback`, the function reference stays the same, so `Child` doesn’t re-render unnecessarily (thanks to `React.memo`).

## **Key Notes**

* `useCallback(fn, [])` → memoizes `fn` **forever** until component unmounts.
* Only useful if:
  * Function is passed to **memoized child components**
  * Function is used in **dependencies of `useEffect` or `useMemo`**
* Overusing `useCallback` can make code  **more complex without performance benefits** .
