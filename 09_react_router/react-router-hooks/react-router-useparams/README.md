# React Router useParams Hook

## What is `useParams`?

* `useParams` is a hook provided by  **React Router** .
* It allows you to access **URL parameters** from the current route.
* Useful when you have **dynamic routes** (e.g., `/users/:id`, `/products/:productId`).

## Syntax

```javascript
import { useParams } from "react-router-dom";

const params = useParams();
```

* `params` will be an object containing key-value pairs of the dynamic segments.

## Example 1: Basic Usage

**App.js**

```javascript
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
```

**User.js**

```javascript
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // Accessing URL parameter

  return <h2>User ID: {id}</h2>;
}

export default User;
```

✅ **When you visit `/user/1`, it shows:**

```sql
User ID: 1
```

**✅ When you visit `/user/2`, it shows:**

```sql
User ID: 2
```

## Example 2: Multiple Parameters

```javascript
<Route path="/product/:category/:id" element={<Product />} />
```

```javascript
import { useParams } from "react-router-dom";

function Product() {
  const { category, id } = useParams();

  return (
    <div>
      <h2>Category: {category}</h2>
      <h2>Product ID: {id}</h2>
    </div>
  );
}

export default Product;
```

👉 Visiting `/product/electronics/55` will show:

```yaml
Category: electronics
Product ID: 55
```

## When to Use `useParams`?

* When you need to fetch data based on  **route parameters** .
* For building **dynamic pages** like user profiles, blog posts, or product details.

## Quick Recap:

* `useParams` returns an **object** of URL parameters.
* Useful in **dynamic routes** (`/route/:param`).
* Helps in **fetching data** and rendering dynamic content.
