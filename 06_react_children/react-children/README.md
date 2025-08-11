# React children

**Overview,**

In React, **children** is a special prop that contains the content placed between a component's opening and closing tags. It lets components act as flexible containers or slots where any JSX, elements, strings, or other components can be inserted.

# What is children?

In React, children is a special prop that contains the content placed between a component's opening and closing tags.

Example:

```javascript
function Box(props) {
return <div>{props.children}</div>;
}
```

```javascript
// Usage
<Box>Hello World</Box>
```

In the example above, "Hello World" is passed as props.children and displayed inside the `<div>`.

# Why use children?

* To make components that can wrap any content.
* To reuse the same component with different inner content.
* To keep code flexible and simple.

# How works React children?

React **children** works by letting you pass content **inside** a component’s opening and closing tags, and React automatically makes that content available as the `props.children` property inside the component.

### Step-by-step how it works:

📍**You pass content into a component:**

```javascript
<Box>Hello World</Box>
```

Here, **Hello World** is the content between `<Box>` and `</Box>`.

📍**React stores that content in `props.children`:**

Inside the `Box` component, you can access it like:

```javascript
function Box(props) {
  console.log(props.children); // "Hello World"
  return <div>{props.children}</div>;
}
```

**📍React inserts that content in the returned JSX:**

Whatever is in `props.children` will be rendered in the place where you put `{props.children}`.

# Tips for React children:

### Key points:

* If you write `<MyComponent>Something</MyComponent>`, React wraps `"Something"` (or any JSX) into `props.children` and gives it to `MyComponent`.
* children is passed automatically by React.
* It can be text, elements, or other components.
* Useful for creating wrapper or layout components.


# Motivate

Keep Learning, Keep Practicing.
