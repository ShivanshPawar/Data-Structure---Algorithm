# 🦁 Sheryians Coding School Cohort – Day31 Learnings


## `while` Loop + Break & Continue



### 📘 Conceptual Learning

---

<details>
<summary><strong> Break & Continue (Conceptual)</strong></summary>

### 🧾 Concept:

* **`break`** exits the loop immediately.
* **`continue`** skips the current iteration and continues with the next one.

### 💡 Examples:

* Use `break` to exit on the first match (e.g. first prime factor).
* Use `continue` to skip specific values (e.g. ignore odd numbers in even sum).

### 🧠 Learning:

* Enhances control over loop execution.
* Helps in writing efficient and readable logic.

</details>

---

<details>
<summary><strong> While Loop (Conceptual)</strong></summary>

### 🧾 Concept:

* A `while` loop runs as long as a given condition is true.
* The condition is checked **before** each iteration.

### 💡 Syntax:

```js
while (condition) {
  // code block
}
```

### 🧠 Learning:

* Used when the number of iterations is not known in advance.
* Common in input validation, digit processing, etc.

</details>

---

### 🧮 Problem Solving

---

<details>
<summary><strong>Q27: Sum of Digits of a Number</strong></summary>

### 🧾 Concept:

Extract each digit of a number using `% 10`, add to sum, and remove it using `/ 10`.

### 💡 Goal:

* Accept an integer.
* Sum all its digits using a `while` loop.

### 🧠 Learning:

* Modulo and division to isolate digits.
* Loop until number becomes 0.

</details>

---

<details>
<summary><strong>Q28: Reverse a Number</strong></summary>

### 🧾 Concept:

Build reverse by extracting digits from the end and appending them in reverse order.

### 💡 Goal:

* Accept an integer.
* Print the number in reverse using a `while` loop.

### 🧠 Learning:

* Digit manipulation.
* Use of remainder and multiplication logic.

</details>

---

<details>
<summary><strong>Q29: Check for Strong Number</strong></summary>

### 🧾 Concept:

A **strong number** is one where the **sum of the factorial of each digit** equals the number itself.

#### 📌 Example:

```
145 → 1! + 4! + 5! = 1 + 24 + 120 = 145 ✅
```

### 💡 Goal:

* Accept a number.
* For each digit, find its factorial and sum it.
* Compare with original number.

### 🧠 Learning:

* Nested loops: outer for digits, inner for factorial.
* Use of `while` + `factorial logic`.

</details>

---

<details>
<summary><strong>Q30: Automorphic Number</strong></summary>

### 🧾 Concept:

An **automorphic number** is a number whose square ends with the number itself.

#### 📌 Example:

```
5² = 25 → ends with 5 ✅  
76² = 5776 → ends with 76 ✅
```

### 💡 Goal:

* Accept a number.
* Square it.
* Check if square ends with the number using string or modulo approach.

### 🧠 Learning:

* Mathematical manipulation or string-based suffix comparison.
* Real-life pattern-based logic building.

</details>

---

## 🧭 `switch` Statement (Conceptual Learning)


<details>
<summary><strong>Switch Case (Conceptual)</strong></summary>

### 🧾 Concept:

The `switch` statement allows you to test a variable or expression against multiple possible **case** values and execute corresponding code.

### 🧪 Syntax:

```js
switch(expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // fallback code
}
```

### 🧠 Use Cases:

* Menus (calculator, food ordering system, etc.)
* Grading systems
* Weekday names from numbers
* Shape calculators (like area of circle, square, triangle)

### 💡 Learning:

* Helps replace multiple `if-else-if` chains
* Cleaner logic for fixed, known options
* Must use `break` to prevent fall-through

</details>

---


#### 🧑‍💻 Code : [Class-Code](Code/index.js)

---

## Created with ❤️ by Shivansh 