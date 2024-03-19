# JS Conditions & Booleans

## Learning Goals

- Understand conditional structures in Javascript
- Understand how to use expressions for comparison
- Understand boolean values and `truthy` / `falsy`

## Detailed Topics of the Lesson

In any programming language, a developer needs to be able to make decisions based on certain values in the code.

These structures are called _conditional statements_.
We use boolean values to evaluate these statements, that means our logical condition evaluates either to `true` or `false`.

:slightly*smiling_face: Fun fact: in the programming language \_Objective-C*, boolean values use YES or NO

### Boolean

Only two values are possible.

```js
isBlue = true;
isRed = false;
```

:heavy_exclamation_mark: There are some values which evaluate to `false`, so called

**falsy values**

- `false` (boolean)
- `0` (number)
- `''` (string)
- `undefined` (undefined)
- `null` (null / object)

See

```js
true && "1" // -> 1 (Truthy at the left side of &&)
false && "1" // -> false (Falsy at the left side of &&)
undefined && "1" -> undefined // -> false (Falsy at the left side of &&)
```

### if...else Statement

```javascript
if (condition) {
  /* code to run if condition evaluates to true */
} else {
  /* run some other code if condition evaluates to false */
}
```

The statement is made of

- The keyword `if`
- followed by some parentheses having a `condition` inside, which is going to be evaluated `true` or `false`: usually something like
  _"is this value bigger than this other value?"_ or _"does this value exist?"_
- The `condition` makes use of [`comparison operators`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#comparison_operators) and returns `true` or `false`.
- A pair of curly braces `{...}`, inside which we have code — only runs if the condition evaluates to `true`.
- The keyword `else` with another pair of curly braces, inside which we have code — which only runs if the condition evaluates to `false`.

:bulb: Thus, this code is some kind of _pseudo code_ to make it human-readable — it says

> **"if the condition returns true, run code A, else run code B"**

### switch - Statement

`if...else` statements are quite useful and very common, but they can get _verbose_. They are useful for cases where you've got a couple of choices, and each one requires an appropriate block of code to be run, and/or the conditions are complex (multiple logical operators, concatenation of conditions, etc.).

For simpler cases, where you just want to set a variable to a certain choice of value or determine a particular string statement for an output depending on a condition, the syntax can be a bit clumsy.

In such cases, switch statements come in handy — they take a single expression/value as an input, and then look through several choices (cases) until the one that matches is found - executing the corresponding code that goes along with it.

See this pseudo code to get an idea of the structure:

```javascript
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}

```

The statement consists of a `switch` - Block listing `cases` inside its body (within the curly braces) and uses an **expression** as an argument to check against the `cases`.

The keyword `break` tells the JS runtime engine to exit the switch statement once the code statements of a certain case are executed

The `default` keyword indicates a _fallback case_ when none of the values matches a `case`. A default case is **optional**.

### Conditional (ternary) operator

The conditional (ternary) operator is frequently used as an alternative to an `if...else` statement. It is the only JS operator that has 3 operands:

```js
condition ? expression_if_true : expression_if_false;
```

- `condition`: An expression used as a condition, evaluating to `true` or `false` e.g. `(myVariable === 'student')`
- `expression_if_true`: an expression which gets executed if the `condition` evaluates to `true` or `truthy`
- `expression_if_false`: an expression which gets executed if the `condition` evaluates to `false` or `falsy`

possible `falsy` values are:

- `null`
- `NaN`
- `0`
- `""`
- `undefined`

#### A simple example

```js
function checkCasinoAccess(age) {
  const casinoAccess =
    age >= 18 ? "May the gambling begin!" : "Access only for adults";
  return casinoAccess;
}
```

Ternary operators can be "chained", like a chain of `if...else if...else if...else` statements, e.g. (pseudo code)

```js
condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
```

The equivalent `if...else` statement looks like:

```js
if (condition1) {
  return value1;
} else if (condition2) {
  return value2;
} else if (condition3) {
  return value3;
} else {
  return value4;
}
```

### Resources

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#comparison_operators
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
