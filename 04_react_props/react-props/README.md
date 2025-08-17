# React Props

Overview and Guide.

## What are Props in React?

Props (short for "properties") are a way to pass data from a parent component to a child component in React. They are read-only and help make components reusable by allowing dynamic data to be injected into them.

## Why Use Props?

* Reusable Components: Pass different data to the same component to render dynamic content.
* Component Communication: Props allow parent components to communicate and configure child components.
* Immutability: Props are immutable in the child component, preventing accidental changes to the passed data.

## How to Use Props

### Passing Props from Parent to Child

In the parent component, you pass data as attributes to the child component. The child component receives them as a single object called `props`.

### Using Destructuring for Cleaner Code

You can extract props values directly in the function parameters for cleaner code.

## Important Notes About Props

* Props are read-only inside the child component.
* To update data, the parent component must change the props it passes.
* Props can be any JavaScript data type: strings, numbers, objects, arrays, functions, etc.
* Default props can be set using `defaultProps` or default parameter values.
* Use `PropTypes` for runtime type checking of props in development.

## Example: Passing a Function as a Prop

You can also pass functions as props to allow child components to invoke actions defined in the parent.

## Summary

| Concept       | Description                                            |
| ------------- | ------------------------------------------------------ |
| Props         | Read-only data passed from parent to child components. |
| Immutability  | Props cannot be changed by the child component.        |
| Data Types    | Can be string, number, object, array, function, etc.   |
| Default Props | Provide default values if no props are passed.         |
| PropTypes     | Type checking during development to avoid bugs.        |

## Further Reading

* React Official Docs - Components and Props: [https://reactjs.org/docs/components-and-props.html]()
* React PropTypes: [https://reactjs.org/docs/typechecking-with-proptypes.html]()

## Keep Learning, Keep Practicing.
