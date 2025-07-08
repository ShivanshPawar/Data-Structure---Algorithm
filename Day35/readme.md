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

## Created with ❤️ by Shivansh 