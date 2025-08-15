# React useRef hooks explain.

## **What is `useRef`?**

`useRef` is a **React Hook** that allows you to create a **mutable reference** that persists across re-renders of your component.

It can be used for  **two main purposes** :

1. **Accessing DOM elements directly** .
2. **Storing mutable values without causing re-renders** .

## Accessing DOM Elements

Sometimes you need to interact with a DOM element directly, e.g., focusing an input field.

```javascript
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Directly focus the input
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

#### **Explanation:**

* `useRef(null)` creates a reference object.
* `ref={inputRef}` attaches the ref to the input element.
* `inputRef.current` points to the actual DOM element.
* Clicking the button focuses the input directly.

## Storing Mutable Values

Sometimes you want to store a value that **doesn’t trigger a re-render** when it changes. `useRef` is perfect for that.

```javascript
import React, { useRef, useState } from "react";

function Timer() {
  const countRef = useRef(0);
  const [ignored, setIgnored] = useState(0);

  const incrementRef = () => {
    countRef.current += 1;
    console.log("Ref value:", countRef.current);
  };

  const forceRender = () => {
    setIgnored(prev => prev + 1); // Just to trigger re-render
  };

  return (
    <div>
      <button onClick={incrementRef}>Increment Ref</button>
      <button onClick={forceRender}>Force Re-render</button>
      <p>Check console for ref value</p>
    </div>
  );
}

export default Timer;
```

#### **Explanation:**

* `countRef.current` changes won’t trigger a re-render.
* Unlike `useState`, updating `.current` is instant and cheap.
* Useful for storing previous state, timers, or interval IDs.

## **Key Points**

* `useRef` returns an object: `{ current: initialValue }`.
* Updating `.current`  **does not trigger a re-render** .
* Perfect for DOM access and persisting values across renders.
* Works in  **functional components only** .
