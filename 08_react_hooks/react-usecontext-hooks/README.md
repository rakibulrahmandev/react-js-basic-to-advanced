# React useContext hooks explain.

## What is `useContext`?

`useContext` is a **React hook** that lets you **access the value of a Context** directly in a functional component **without having to pass props down manually** at every level.

Think of it as a way to **share data globally** in a component tree, like a theme, user info, or settings.

## Context vs Props:

Normally, if you want to pass data from a parent to a deeply nested child, you do something like:

```javascript
<Parent>
  <Child data={data} />
</Parent>
```

But if `Child` is nested many layers deep, passing props through every intermediate component becomes tedious.

`useContext` solves this problem.

## How to use `useContext`?

#### Step 1: Create a Context

```javascript
import React, { createContext } from 'react';

export const MyContext = createContext();
```

#### Step 2: Provide the Context value

```javascript
import React from 'react';
import { MyContext } from './MyContext';
import Child from './Child';

function App() {
  const user = { name: 'Rakibul', age: 25 };

  return (
    <MyContext.Provider value={user}>
      <Child />
    </MyContext.Provider>
  );
}

export default App;
```

#### Step 3: Consume the Context in a child component

```javascript
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function Child() {
  const user = useContext(MyContext); // Access context value directly

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default Child;
```

#### ✅ Key points:

* `createContext()` creates a context object.
* `<Context.Provider>` wraps components that need access to the context and provides the value.
* `useContext(Context)` allows consuming the context **directly** in any functional component.

## When to use `useContext`?

* Sharing **theme** (dark/light mode)
* User authentication info (like logged-in user)
* Settings or preferences across many components
* Avoid **prop drilling** through many levels

## Things to remember

1. `useContext` only works in  **functional components** .
2. The component consuming context will **re-render automatically** when the context value changes.
3. If a component is  **outside the provider** , `useContext` will get the default value you passed to `createContext()`.
