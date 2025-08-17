# React useState hooks explain.

## What is useState?

`useState` is a **React Hook** that lets you add state (data that changes over time) to a functional component.

Think of it like a **box** where you store a value, and React re-renders the component whenever that value changes.

## Syntax

```javascript
const [state, setState] = useState(initialValue);
```

* **`state`** → The current value stored.
* **`setState`** → A function to update the value.
* **`initialValue`** → The starting value for the state.

## Example:

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count starts at 0

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

### How it works:

* `useState(0)` creates a `count` variable starting at `0`.
* When you click the button, `setCount(count + 1)` changes the value.
* React **re-renders** the component with the new value.

## Key Points

* You can store  **any type** : number, string, array, object, boolean, etc.
* State updates are **asynchronous** — React may batch updates for performance.
* When state changes → component re-renders → UI updates automatically.
* `useState` can be used multiple times in the same component.

## Example with Multiple States:

```javascript
function Profile() {
  const [name, setName] = useState("Rakibul");
  const [age, setAge] = useState(20);

  return (
    <div>
      <p>{name}, {age} years old</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}
```
