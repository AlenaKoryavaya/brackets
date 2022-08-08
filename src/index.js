module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let bracketsPair = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    let prop = bracketsConfig[i][1];
    let value = bracketsConfig[i][0];
    openBrackets.push(bracketsConfig[i][0]);
    bracketsPair[prop] = value;
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentValue = str[i];

    if (openBrackets.includes(currentValue)) {
      stack.push(currentValue);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElem = stack[stack.length - 1];

      if (bracketsPair[currentValue] === topElem) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
