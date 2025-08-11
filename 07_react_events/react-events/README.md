# React Event Handlers

In React, **events** are handled using **event handlers** that you pass as props to elements. These handlers are functions that get called when the event happens.

## How to Use Event Handlers in React

1. **Attach event handlers as props**

   React uses camelCase event names, e.g., `onClick`, `onChange`, `onSubmit`.
2. **Pass a function as the event handler**

   You can define the handler as a function and pass it directly or as an arrow function.
3. **Prevent default behavior if needed**

   Use `event.preventDefault()` inside your handler to stop default browser behavior.

---

## Example: Handling a Click Event

```javascript
import React from 'react';

function Button() {
  // Event handler function
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default Button;
```


## Common React Events

* `onClick` — When an element is clicked
* `onChange` — When input value changes
* `onSubmit` — When form is submitted
* `onMouseOver` — When mouse hovers over an element
* `onKeyDown` — When a key is pressed

---

## Passing Event Handler Using Props

You can pass an event handler function from a parent component to a child component via props.

```javascript
function Parent() {
  function handleChildClick() {
    alert('Child clicked!');
  }

  return <Child onClick={handleChildClick} />;
}

function Child(props) {
  return <button onClick={props.onClick}>Click Child</button>;
}
```

## Note:

* Use camelCase event names like `onClick` in JSX
* Pass a function as event handler, not a string
* Use `event.preventDefault()` to stop default browser behavior
* You can pass event handlers via props between components

# React keyboard, mouse events.

1. **Keyboard Events in React**

   These events are triggered by keyboard actions:

* `onKeyDown` — Fired when a key is pressed down
* `onKeyPress` — Fired when a key that produces a character is pressed (deprecated in React)
* `onKeyUp` — Fired when a key is released

Example: Detecting Enter Key

```javascript
function Input() {
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      alert('Enter key pressed!');
    }
  }

  return <input type="text" onKeyDown={handleKeyDown} />;
}
```

2. **Mouse Events in React**

    These events respond to mouse actions:

* `onClick` — Mouse click
* `onDoubleClick` — Double click
* `onMouseDown` — Mouse button pressed
* `onMouseUp` — Mouse button released
* `onMouseEnter` — Mouse enters an element (no bubbling)
* `onMouseLeave` — Mouse leaves an element (no bubbling)
* `onMouseMove` — Mouse moves over an element

Example: Tracking Mouse Enter and Leave

```javascript
function HoverBox() {
  function handleMouseEnter() {
    console.log('Mouse entered');
  }

  function handleMouseLeave() {
    console.log('Mouse left');
  }

  return (
    <div
      style={{ width: 200, height: 100, backgroundColor: 'lightblue' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover over me
    </div>
  );
}
```


## Note:

| Event Type | React Event Name  | Description                  |
| ---------- | ----------------- | ---------------------------- |
| Keyboard   | `onKeyDown`     | Key pressed down             |
| Keyboard   | `onKeyUp`       | Key released                 |
| Mouse      | `onClick`       | Mouse click                  |
| Mouse      | `onDoubleClick` | Mouse double click           |
| Mouse      | `onMouseEnter`  | Mouse enters element         |
| Mouse      | `onMouseLeave`  | Mouse leaves element         |
| Browser    | `onScroll`      | Scrolling event              |
| Browser    | N/A (use window)  | `resize`(window event)     |
| Browser    | `onLoad`        | Content loaded (e.g. images) |

# Motivate

Keep Learning, Keep Practicing.
