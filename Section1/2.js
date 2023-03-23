// Algorithm:
// 1) Initialize an empty stack.
// 2) Iterate through the tokens from left to right.
// For each token:
// a. If the token is an operator ('+', '-', '*', '/'), pop the top two elements from the stack, perform the operation, and push the result back onto the stack.
// b. Otherwise, the token is an operand, so push it onto the stack.
// 3) After processing all the tokens, the final result should be the only element left on the stack. Pop it and return it.

function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (token === "+") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a + b);
    } else if (token === "-") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a - b);
    } else if (token === "*") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a * b);
    } else if (token === "/") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(Math.trunc(a / b));
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
}
