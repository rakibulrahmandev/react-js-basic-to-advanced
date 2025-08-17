# React useEffect hooks explain.

## **What is `useEffect`?**

`useEffect` is a **React hook** that lets you perform **side effects** in function components.

**Side effects** are operations that affect something outside the scope of your function, such as:

* Fetching data from an API
* Updating the DOM manually
* Setting up subscriptions or timers
* Logging

In class components, these were usually done in lifecycle methods like `componentDidMount`, `componentDidUpdate`, or `componentWillUnmount`. `useEffect` replaces all of those in function components.

## **Basic Syntax**

```javascript
import React, { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called!");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Explanation:**

* `useEffect` takes a **function** as the first argument.
* By default, it **runs after every render** (after the component renders initially and after any update).

## **Controlling When `useEffect` Runs**

You can control when the effect runs using the **dependency array** (second argument).

### 1. Run effect  **once on mount** :

```javascript
useEffect(() => {
  console.log("Component mounted!");
}, []); // empty array means "run only once"
```

✅ This is like `componentDidMount`.

### 2. Run effect  **when specific variables change** :

```javascript
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]); // only runs when "count" changes
```

✅ This is like `componentDidUpdate` for specific variables.

### 3. Cleanup function (like `componentWillUnmount`):

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup on unmount
    console.log("Timer cleared");
  };
}, []); // empty array, so cleanup runs only on unmount
```

* The function you **return** inside `useEffect` is used for  **cleanup** .
* Useful for timers, subscriptions, or event listeners.

## **Key Points to Remember**

1. `useEffect` runs  **after the render** .
2. It can run:
   * On **every render** (no dependency array)
   * Only **once on mount** (empty array `[]`)
   * When **specific values change** (`[dep1, dep2]`)
3. Return a **cleanup function** if you need to clean side effects.
4. Avoid putting **state updates in useEffect without dependencies** carefully, because it can create an  **infinite loop** .
