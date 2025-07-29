# 🦁 Sheryians Coding School Cohort – Day42 Learnings


# ⚙️ **Time and Space Complexity in Programming**

---

## 🧠 What is Complexity?

**Complexity** tells us how efficiently an algorithm uses **time** and **memory (space)** when handling input.

> It helps you **predict performance** without running code.

---

## ⏱️ Time Complexity

### ✅ Definition:

Time complexity measures **how the number of operations grows** as the input size `n` increases.

---

## ⚡ Common Time Complexities:

| Big O Notation | Name              | Example                          |
| -------------- | ----------------- | -------------------------------- |
| O(1)           | Constant Time     | Accessing an array element       |
| O(log n)       | Logarithmic Time  | Binary Search                    |
| O(n)           | Linear Time       | Loop through array               |
| O(n log n)     | Linearithmic Time | Merge Sort, Quick Sort (average) |
| O(n²)          | Quadratic Time    | Nested loops (Bubble Sort)       |
| O(2ⁿ)          | Exponential Time  | Recursive Fibonacci              |
| O(n!)          | Factorial Time    | Permutations                     |

---

## 🚀 Example:

### O(n): Linear Time

```js
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i); // runs n times
  }
}
```

### O(n²): Nested Loops

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

---

## 🔍 Handling Large Input

If input `n = 10^6`, algorithms with:

* ✅ O(n), O(log n), O(n log n) are **efficient**
* ❌ O(n²), O(2ⁿ) become **very slow**

---

## 📈 Complexity Graph

```text
|
|                        O(2ⁿ)
|                     O(n²)
|         O(n log n)
|      O(n)
|   O(log n)
|___O(1)_________________________→ n (input size)
```

---

## 🧮 Generating Complexity Equations

Just count the number of **operations inside loops** and **recursion calls**.

### Example:

```js
function printSum(n) {
  let sum = 0;            // 1
  for (let i = 1; i <= n; i++) {  // runs n times
    sum += i;             // n
  }
  return sum;             // 1
}
// Total: 1 + n + 1 => O(n)
```

---

## ⛔ TLE — Time Limit Exceeded

### When does TLE happen?

If your solution takes too long for large inputs:

* 🚫 Inefficient loops (O(n²), O(2ⁿ))
* 🚫 Recursion without optimization

### 💡 Fix it:

* Use **better algorithms** (e.g. Binary Search instead of Linear Search)
* Use **memoization/dynamic programming**

---

## 🧠 Space Complexity

### ✅ Definition:

Space complexity measures **how much memory** your algorithm needs to run, depending on input size.

### Includes:

* Variables
* Data structures (arrays, objects)
* Function call stack (recursion)

---

## ⚡ Common Space Complexities:

| Space Complexity | Meaning                | Example                 |
| ---------------- | ---------------------- | ----------------------- |
| O(1)             | Constant space         | Simple variables        |
| O(n)             | Space grows with input | Storing an array of `n` |
| O(n²)            | Matrix of size n×n     | 2D arrays               |

---

## 💡 Space vs Time Tradeoff

Sometimes you can **use more memory to reduce time**.

Example: Using a **hashmap** (O(n) space) to reduce lookup time to O(1).

---

## 📦 Example: Space Complexity

```js
function doubleElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
// Space Complexity: O(n) for result array
```

---

## ❓ Sample Questions

### Q1. Find the maximum in an array (O(n), O(1))

```js
function maxElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

### Q2. Check if array contains duplicates (O(n), O(n))

```js
function hasDuplicate(arr) {
  const seen = new Set();
  for (let item of arr) {
    if (seen.has(item)) return true;
    seen.add(item);
  }
  return false;
}
```

---


## Created with ❤️ by Shivansh 