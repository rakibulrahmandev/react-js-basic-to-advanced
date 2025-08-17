# React useReducer hooks explain.

## **What is `useReducer`?**

`useReducer` is a **React hook** used for  **state management** . It's similar to `useState` but is more powerful for  **complex state logic** , especially when the next state depends on the previous state or when there are multiple state values to manage together.

You can think of it as a  **Redux-like reducer** , but built into React.

#### Syntax:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

* `state` → Current state value.
* `dispatch` → Function to send an **action** to the reducer.
* `reducer` → Function that updates the state based on the action.
* `initialState` → Initial state value.

## Reducer Function

A reducer function has this signature:

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

* `state` → Current state.
* `action` → Object describing what to do (must have a `type`).

#### Example: Counter with `useReducer`

```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default Counter;
```

##### **Explanation:**

1. `useReducer` gives us `state` and `dispatch`.
2. Clicking buttons calls `dispatch` with an action (`type: 'INCREMENT'` or `'DECREMENT'`).
3. The reducer function calculates the new state based on the action.
4. React re-renders the component with the updated state.

## **When to Use `useReducer`**

* When the state logic is **complex** (many state variables that depend on each other).
* When the next state depends on the  **previous state** .
* When you want **centralized state updates** similar to Redux but without extra libraries.

## Advantages over `useState`

* Easier to manage complex state transitions.
* Predictable state updates with a single reducer function.
* Scales better for larger apps.
