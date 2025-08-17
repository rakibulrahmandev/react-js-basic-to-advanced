# React custom hooks explain.

## **What is a Custom Hook?**

In React, a **custom hook** is a JavaScript function whose name starts with `use` and that **can call other hooks** like `useState`, `useEffect`, etc.

It allows you to **reuse stateful logic** across multiple components without repeating code.

Think of it as a way to **extract logic from components** and make it reusable.

## **Why use Custom Hooks?**

* **Code Reusability:** Avoid duplicating the same logic in multiple components.
* **Clean Components:** Keeps components cleaner by moving logic into hooks.
* **Encapsulation:** Logic can be packaged and shared without exposing unnecessary details.

## **Rules of Custom Hooks**

Custom hooks follow the same rules as React hooks:

1. Only call hooks at the **top level** (not inside loops or conditions).
2. Only call hooks from **React functions** (components or other hooks).

#### Example:

Suppose you want to track **window width** in multiple components.

**Without Custom Hook:**

```javascript
import { useState, useEffect } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>Window width: {width}</div>;
}
```

If you had another component doing the same, you’d have to copy this logic.

**With Custom Hook:**

```javascript
import { useState, useEffect } from "react";

// Custom Hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// Using the custom hook in a component
function MyComponent() {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
}

function AnotherComponent() {
  const width = useWindowWidth();
  return <div>Current width: {width}</div>;
}
```

Now the logic is **reusable** and clean.

## Another Example Fetching Data

```javascript
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Usage in component
function App() {
  const { data, loading } = useFetch("https://api.example.com/items");

  if (loading) return <p>Loading...</p>;

  return <div>{JSON.stringify(data)}</div>;
}
```

## **Key Takeaways**

* Custom hooks are **just functions** but can use other hooks inside.
* They  **start with `use`** .
* They  **encapsulate reusable logic** .
* They make your components  **cleaner and easier to maintain** .
