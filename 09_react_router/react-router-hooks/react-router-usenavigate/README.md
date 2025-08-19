# React Router useNavigate Hooks

## What is `useNavigate` in React Router?

`useNavigate` is a **hook** provided by **React Router v6+** that lets you **navigate programmatically** between routes in your React application.

Normally, you use `<Link>` or `<NavLink>` components to move between pages. But sometimes, you want to navigate when **an event happens** (like button click, form submission, or after an API response). In such cases, `useNavigate` is the solution.

## 📌 Basic Usage

```javascript
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about"); // navigates to the /about page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default HomePage;
```

## 📌 Navigate with Parameters

```javascript
const goToUser = () => {
  navigate("/user/10"); // Example: navigate to /user/10
};
```

## 📌 Navigate Back or Forward

```javascript
const goBack = () => {
  navigate(-1); // go back to previous page
};

const goForward = () => {
  navigate(1); // go forward
};
```

## 📌 Navigate with State

You can pass **state** while navigating:

```javascript
navigate("/profile", { state: { username: "Rakibul" } });
```

Access this state in the target component:

```javascript
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const { username } = location.state || {};

  return <h1>Welcome, {username}</h1>;
}
```

## 📌 Replace Navigation

By default, `useNavigate` pushes a new entry into history.

You can use `replace: true` to replace the current entry:

```javascript
navigate("/login", { replace: true });
```

## Key Features of `useNavigate`

---

1. **Navigate to a route**

```javascript
navigate("/about");
```

2. **Navigate back/forward in history**

```javascript
navigate(-1); // go back
navigate(1);  // go forward
```

3. **Navigate with state (pass data)**

```javascript
navigate("/profile", { state: { user: "Rakib" } });
```

4. **Replace history (don’t keep previous page)**

```javascript
navigate("/login", { replace: true });
```

## 👉 In short:

`useNavigate` = **programmatic navigation hook** in React Router that gives you more control than static `<Link>` components.

## ✅ Summary

* `useNavigate` is used for programmatic navigation.
* You can:
  * Navigate to a path (`navigate("/about")`).
  * Navigate back/forward (`navigate(-1)`, `navigate(1)`).
  * Pass data using `state`.
  * Replace history using `{ replace: true }`.
