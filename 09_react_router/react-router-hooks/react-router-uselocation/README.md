# React Router useLocation Hooks

## What is `useLocation`?

* `useLocation` is a **React Router hook** that gives you access to the current  **location object** .
* The `location` object represents where the app is now, where you want it to go, or even where it was.
* Useful for:
  * Reading the current URL.
  * Triggering effects when the route changes.
  * Passing state between routes.

## Syntax

```javascript
import { useLocation } from "react-router-dom";

const location = useLocation();
```

The `location` object has:

* `pathname` → Current URL path (e.g. `/about`)
* `search` → Query string (e.g. `?id=5&name=rakib`)
* `hash` → Hash fragment (e.g. `#section2`)
* `state` → Extra state passed via navigation
* `key` → Unique ID for location (changes on navigation)

## 📌 Example: Display Current Path

```javascript
import React from "react";
import { useLocation } from "react-router-dom";

function CurrentPath() {
  const location = useLocation();

  return (
    <div>
      <h2>Current Path:</h2>
      <p>{location.pathname}</p>
    </div>
  );
}

export default CurrentPath;
```

## 📌 Example: Using Query Parameters

```javascript
import React from "react";
import { useLocation } from "react-router-dom";

function UserPage() {
  const location = useLocation();

  // Example URL: /user?id=101&name=Rakib
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");

  return (
    <div>
      <h2>User Info</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default UserPage;
```

## 📌 Example: Detect Route Change

```javascript
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RouteChangeLogger() {
  const location = useLocation();

  useEffect(() => {
    console.log("Route changed:", location.pathname);
  }, [location]);

  return <h2>Check console when route changes!</h2>;
}

export default RouteChangeLogger;
```

## When to use `useLocation`?

* To **get current path** (`pathname`) in components.
* To **read query parameters** from URL.
* To **listen to route changes** inside `useEffect`.
* To **access state** passed via navigation (e.g. `navigate("/page", { state: { id: 5 } })`).
