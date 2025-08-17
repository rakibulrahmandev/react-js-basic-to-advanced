# React Hooks

## What is React hooks ?

React Hooks are special functions in **React** that let you use features like  **state** ,  **lifecycle methods** , and **context** inside **function components** — without writing a class.

## Why Hooks Exist ?

Before hooks, if you wanted:

* **State** → you had to use `class` components.
* **Lifecycle logic** → you had to rely on methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

Hooks remove this limitation — now function components can do it all.

## Common React Hooks:

| Hook                  | Purpose                                                   | Example                                                    |
| --------------------- | --------------------------------------------------------- | ---------------------------------------------------------- |
| **useState**    | Adds local state to a function component.                 | `const [count, setCount] = useState(0);`                 |
| **useEffect**   | Runs side effects (e.g., fetching data, DOM updates).     | `useEffect(() => { document.title = count; }, [count]);` |
| **useContext**  | Accesses values from React Context without prop drilling. | `const user = useContext(UserContext);`                  |
| **useRef**      | Stores a mutable value that persists between renders.     | `const inputRef = useRef();`                             |
| **useMemo**     | Memoizes a computed value for performance.                | `const result = useMemo(() => heavyCalc(), [deps]);`     |
| **useCallback** | Memoizes a function to prevent unnecessary re-renders.    | `const memoFn = useCallback(() => {...}, [deps]);`       |

## 💡 **Key Points About Hooks**

1. Only call hooks **at the top level** of your component (not inside loops, conditions, or nested functions).
2. Only call hooks **inside React function components or custom hooks** (not in normal JavaScript functions).
3. Hook names always start with `"use"` (like `useState`).
