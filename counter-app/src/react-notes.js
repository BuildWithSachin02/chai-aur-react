// ======================================================
// REACT USESTATE NOTES - BY SACHIN YADAV
// ======================================================

// ------------------------------------------------------
// WHAT IS REACT ?
// ------------------------------------------------------

// React is a JavaScript library used to build User Interfaces (UI).

// React updates the UI automatically when data changes.

// React follows a Component-Based Architecture.

// Example:
// Navbar
// Hero Section
// About Section
// Footer

// Every section can be created as a separate component.


// ======================================================
// WHAT IS A HOOK ?
// ======================================================

// A Hook is a special React function.

// Hooks allow Functional Components to use React features.

// Common Hooks:

// useState()
// useEffect()
// useRef()
// useContext()

// Example:

// import { useState } from "react";


// ======================================================
// WHAT IS useState ?
// ======================================================

// useState is a React Hook.

// It stores data and updates the UI automatically
// whenever that data changes.

// Syntax:

// const [state, setState] = useState(defaultValue);

// Example:

// const [counter, setCounter] = useState(5);

// Breakdown:

// counter
// Current value of state

// setCounter
// Function used to update state

// useState(5)
// Default value = 5


// ======================================================
// WHY DO WE NEED useState ?
// ======================================================

// Example without useState:

// let count = 5;

// const increase = () => {
//   count++;
// }

// Value changes:
// 5 -> 6

// But UI DOES NOT update.

// Why?

// Because React does not track normal variables.


// Example with useState:

// const [count, setCount] = useState(5);

// const increase = () => {
//   setCount(count + 1);
// }

// Now React knows state changed.

// UI automatically updates.


// ======================================================
// BOOLEAN STATE
// ======================================================

// Example:

// const [hide, setHide] = useState(false);

// Boolean values:

// true
// false

// Useful for:

// Hide / Show
// Login / Logout
// Open / Close Modal
// Dark Mode / Light Mode


// ======================================================
// YOUR COUNTER STATE
// ======================================================

// const [counter, setCounter] = useState(5);

// Initial value:

// counter = 5


// ======================================================
// INCREASE FUNCTION
// ======================================================

// const increase = () => {
//   if(counter < 20){
//      setCounter(counter + 1);
//   }else{
//      alert("20 is maximum");
//   }
// }

// Flow:

// Current Value = 5

// Click Button

// 5 + 1 = 6

// setCounter(6)

// React Re-render

// UI Updated


// ======================================================
// BETTER WAY TO UPDATE STATE
// ======================================================

// Instead of:

// setCounter(counter + 1);

// Use:

// setCounter(prev => prev + 1);

// Why?

// React may batch updates.

// Using previous state is safer.


// ======================================================
// DECREASE FUNCTION
// ======================================================

// const decrease = () => {
//   if(counter > 0){
//      setCounter(prev => prev - 1);
//   }else{
//      alert("0 is minimum");
//   }
// }

// Flow:

// 5
// ↓
// 4
// ↓
// 3
// ↓
// 2
// ↓
// 1
// ↓
// 0

// Alert appears when counter reaches 0.


// ======================================================
// EVENT HANDLING
// ======================================================

// React handles events using onClick.

// Example:

// <button onClick={increase}>
//    +
// </button>

// Flow:

// User Click
// ↓
// Function Runs
// ↓
// State Changes
// ↓
// UI Updates


// ======================================================
// CONDITIONAL STYLING
// ======================================================

// Example:

// style={{
//   visibility: hide ? "hidden" : ""
// }}

// Ternary Operator Syntax:

// condition ? trueValue : falseValue

// Example:

// hide ? "hidden" : "visible"

// Means:

// If hide = true
// Hide element

// Else
// Show element


// ======================================================
// NOT OPERATOR (!)
// ======================================================

// Example:

// !true

// Output:

// false

// Example:

// !false

// Output:

// true

// Your Code:

// setHide(!hide)

// Before Click:

// hide = false

// After Click:

// hide = true

// Element Hidden

// Click Again:

// hide = false

// Element Visible


// ======================================================
// REACT FLOW
// ======================================================

// User Clicks Button
// ↓
// Function Runs
// ↓
// setState Called
// ↓
// State Changes
// ↓
// Component Re-renders
// ↓
// Virtual DOM Updates
// ↓
// Real DOM Updates
// ↓
// UI Updates


// ======================================================
// WHAT IS STATE ?
// ======================================================

// State is data that can change over time.

// Examples:

// count
// name
// email
// password
// theme
// hide


// ======================================================
// EXAMPLE 1 - NAME CHANGER
// ======================================================

// const [name, setName] = useState("Sachin");

// <h1>{name}</h1>

// <button
// onClick={() => {
//   setName("Rahul")
// }}>
// Change Name
// </button>

// Output:

// Sachin
// ↓
// Rahul


// ======================================================
// EXAMPLE 2 - DARK MODE
// ======================================================

// const [dark, setDark] = useState(false);

// <button
// onClick={() => {
//   setDark(!dark)
// }}>
// Toggle Theme
// </button>

// false -> true
// true -> false


// ======================================================
// INTERVIEW QUESTIONS
// ======================================================

// Q. What is React?

// React is a JavaScript library used to build
// fast and interactive User Interfaces.


// Q. What is useState?

// useState is a React Hook used to store
// and update data inside a component.


// Q. Why useState?

// Because React re-renders the component
// whenever state changes.


// Q. What is State?

// State is data that can change over time.


// Q. What is a Hook?

// A Hook is a special React function that
// allows Functional Components to use React features.


// ======================================================
// MOST IMPORTANT RULE
// ======================================================

// NEVER DO THIS:

// counter = counter + 1;

// DO THIS:

// setCounter(counter + 1);

// OR

// setCounter(prev => prev + 1);

// Because React only tracks State updates.


// ======================================================
// END OF NOTES
// ======================================================