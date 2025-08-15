# React useMemo hooks explain.

## **What is `useMemo`?**

`useMemo` is a **React hook** that **memoizes a value** — meaning it **remembers the result of a computation** and only recomputes it when its dependencies change. This is useful for **expensive calculations** that you don’t want to run on every render.

#### Syntax:

```javascript
const memoizedValue = useMemo(() => {
  // Expensive computation here
  return result;
}, [dependencies]);
```

* **First argument:** A function that returns the value you want to memoize.
* **Second argument:** An array of dependencies. The function will  **re-run only if one of these dependencies changes** .

## Why use `useMemo`?

* To **optimize performance** for expensive calculations.
* To **prevent unnecessary recalculations** on every render.
* Helps when passing **derived data** to child components to avoid re-renders.

#### Example:

```javascript
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const calculateFactorial = (n) => {
      return n <= 1 ? 1 : n * calculateFactorial(n - 1);
    };
    return calculateFactorial(count);
  }, [count]); // Only recalc if `count` changes

  return (
    <div>
      <h1>Factorial of {count} is {factorial}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something"
      />
    </div>
  );
}

export default App;
```

##### **Explanation:**

* The factorial calculation runs  **only when `count` changes** .
* Typing in the input does  **not recalculate factorial** , saving performance.

## **Key Points**

1. `useMemo` is for  **memoizing values** .
2. Don’t use it for **side effects** (use `useEffect` for that).
3. Overusing `useMemo` can actually **slow down** your app if the memoization itself is expensive. Use it only when needed.
4. Commonly used with  **derived data, filtering, sorting, or expensive calculations** .
