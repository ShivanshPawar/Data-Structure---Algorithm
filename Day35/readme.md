# 🦁 Sheryians Coding School Cohort – Day35 Learnings



## 📦 Array (Conceptual Learning + Practice)



<details>
<summary><strong> Array – Conceptual Introduction</strong></summary>

### 📘 What is an Array?

An **array** is a data structure used to store **multiple values** in a single variable.

### 📦 Syntax:

```js
let arr = [10, 20, 30];  // Numeric array
let names = ["Alice", "Bob"]; // String array
```

### 🔑 Key Points:

* Arrays are **zero-indexed** (`arr[0]` is the first element).
* They can store any data type — even mixed types.
* Arrays are **mutable** (can be updated/changed).

</details>

---

<details>
<summary><strong> Fixed vs Dynamic Size Array</strong></summary>

### 🧊 Fixed Size:

* Used in **languages like C or Java**.
* Size is defined during declaration.

### 💡 JavaScript Array:

* **Dynamic in size**.
* You can push, pop, or modify size anytime.

```js
let arr = [];
arr.push(10); // Adds element
arr.push(20); // Adds another
```

</details>

---

<details>
<summary><strong> Accept Value from User and Store in Array</strong></summary>

### 📘 Goal:

Take input from user using prompt or input field and store in array.

### 🧪 Example (browser-based):

```js
let n = prompt("Enter array size:");
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Enter value ${i + 1}:`);
}

console.log("User Array:", arr);
```

> 🔐 Works with browser environment using `prompt()`.

</details>

---

### ✅ Practice Questions

---

<details>
<summary><strong>Q43: Sum of Array Elements</strong></summary>

### 📘 Goal:

Calculate the total sum of all numbers in an array.

### 🔁 Logic:

Loop through array and accumulate total.

### 🧪 Example:

```js
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum =", sum); // Output: 15
```

</details>

---

<details>
<summary><strong>Q44: Maximum Element in Array</strong></summary>

### 📘 Goal:

Find the **largest number** in the array.

### 🔁 Logic:

Use a loop and compare each element with a `max` variable.

### 🧪 Example:

```js
let arr = [5, 3, 9, 2];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Max =", max); // Output: 9
```

</details>

---

<details>
<summary><strong>Q45: Second Maximum Element in Array</strong></summary>

### 📘 Goal:

Find the **second largest number** in the array.

### 🔁 Logic:

* Initialize `max` and `secondMax`
* Traverse array to track both

### 🧪 Example:

```js
let arr = [5, 12, 8, 3];
let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
    }
}

console.log("Second Max =", secondMax); // Output: 8
```

</details>

---


# 📦 JavaScript Arrays – Complete Notes (Behavior, Methods, and Tricks)



## 🔹 What is an Array?

An **array** is a special variable in JavaScript that can hold **multiple values** under a single name.

```js
let fruits = ["apple", "banana", "cherry"];
```

---

## 🧠 Key Characteristics of Arrays

| Property            | Behavior                                                  |
| ------------------- | --------------------------------------------------------- |
| **Indexed**         | 0-based index (`arr[0]` is the first element)             |
| **Dynamic**         | Automatically resizes as items are added or removed       |
| **Heterogeneous**   | Can store mixed types (`[1, "hello", true]`)              |
| **Mutable**         | Elements can be modified (`arr[1] = "mango"`)             |
| **Objects**         | Arrays are technically objects (`typeof [] === "object"`) |
| **Length property** | `arr.length` gives the number of elements (1-based count) |

---

## 🧩 Common Array Creation Methods

```js
let a = [];                         // empty array
let b = [1, 2, 3];                  // numeric array
let c = new Array(3);              // array with 3 empty slots
let d = Array.of(10, 20, 30);      // creates [10, 20, 30]
```

---

## 🔄 Array Iteration Techniques

```js
let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((value, index) => {
  console.log(index, value);
});

for (let value of arr) {
  console.log(value);
}
```

---

## ⚙️ Mutating Methods (Modify Original Array)

| Method      | Description              | Example            |
| ----------- | ------------------------ | ------------------ |
| `push()`    | Adds to end              | `arr.push(4)`      |
| `pop()`     | Removes last             | `arr.pop()`        |
| `shift()`   | Removes first            | `arr.shift()`      |
| `unshift()` | Adds to front            | `arr.unshift(0)`   |
| `splice()`  | Add/remove at index      | `arr.splice(2, 1)` |
| `reverse()` | Reverses array           | `arr.reverse()`    |
| `sort()`    | Sorts elements lexically | `arr.sort()`       |

---

## 🔎 Non-Mutating Methods (Return New Array)

| Method     | Description                     | Example                       |
| ---------- | ------------------------------- | ----------------------------- |
| `slice()`  | Returns part of array           | `arr.slice(1, 3)`             |
| `concat()` | Combines arrays                 | `arr.concat([4, 5])`          |
| `map()`    | Transforms items                | `arr.map(x => x * 2)`         |
| `filter()` | Filters based on condition      | `arr.filter(x => x > 10)`     |
| `reduce()` | Reduces array to a single value | `arr.reduce((a, b) => a + b)` |

---

## 🔍 Search & Check Methods

| Method          | Description                       |
| --------------- | --------------------------------- |
| `includes()`    | Checks if value exists            |
| `indexOf()`     | First index of item               |
| `lastIndexOf()` | Last index of item                |
| `find()`        | Finds first match                 |
| `findIndex()`   | Finds index of first match        |
| `some()`        | Checks if **any** element matches |
| `every()`       | Checks if **all** elements match  |

---

## 🔧 Conversion & Utility Methods

| Method         | Description                        |
| -------------- | ---------------------------------- |
| `toString()`   | Converts to comma-separated string |
| `join()`       | Joins with custom separator        |
| `flat()`       | Flattens nested arrays             |
| `isArray()`    | Checks if value is array           |
| `fill()`       | Fills entire array with value      |
| `copyWithin()` | Copies part of array within itself |

---

## 📐 Array Destructuring

```js
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

With rest:

```js
const [x, y, ...rest] = [1, 2, 3, 4];
console.log(rest); // [3, 4]
```

---

## 🧱 Spread Operator (`...`)

```js
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```

Used in:

* Cloning arrays
* Merging arrays
* Destructuring rest values

---

## 🧮 Array Utility Patterns

### ✅ Sum of all elements

```js
let sum = arr.reduce((a, b) => a + b);
```

### ✅ Maximum element

```js
let max = Math.max(...arr);
```

### ✅ Second largest element

```js
let sorted = [...new Set(arr)].sort((a, b) => b - a);
let secondMax = sorted[1];
```

---

## 🚨 Common Pitfalls

* `typeof arr` is `"object"` — use `Array.isArray()` instead
* `arr.length` includes empty slots
* `sort()` without a compare function sorts as **strings**

  ```js
  [10, 2, 5].sort(); // [10, 2, 5] ❌
  [10, 2, 5].sort((a, b) => a - b); // ✅ [2, 5, 10]
  ```

---

## 🧠 Summary

| Topic          | Quick Tip                           |
| -------------- | ----------------------------------- |
| Create         | `[]`, `new Array()`, `Array.of()`   |
| Check if Array | `Array.isArray(arr)`                |
| Clone          | `[...arr]` or `arr.slice()`         |
| Loop           | `for`, `forEach`, `for...of`        |
| Transform      | `map()`, `filter()`, `reduce()`     |
| Find & Search  | `includes()`, `indexOf()`, `find()` |
| Modify         | `push()`, `pop()`, `splice()`       |

---



## Created with ❤️ by Shivansh 