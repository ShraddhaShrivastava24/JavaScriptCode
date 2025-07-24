// Javescript execution context
// Execution context is the environment in which JavaScript code is executed.
// It consists of the variable object, scope chain, and the value of 'this'.    

// Global Execution Context
// The global execution context is created when the JavaScript engine starts executing the code.
// In the global context, 'this' refers to the global object (window in browsers).

// Function Execution Context
// When a function is invoked, a new execution context is created for that function.
// Each function has its own scope chain and 'this' value.

// Block Execution Context
// In JavaScript, blocks (like those created by if statements or loops) do not create
// a new execution context, but they can create a new scope for variables declared with let or
// const. Variables declared with var are function-scoped and do not create a new scope in
// blocks.

//eval execution context
// The eval function creates a new execution context for the code passed to it.
// It allows you to execute JavaScript code represented as a string, but it is generally discouraged
// due to security and performance concerns.
// Example of Execution Context

