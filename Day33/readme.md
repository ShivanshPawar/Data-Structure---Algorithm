# 🦁 Sheryians Coding School Cohort – Day33 Learnings



## 🧩 Nested Loops & Pattern Programming


<details>
<summary><strong> Nested Looping (Conceptual Learning)</strong></summary>

### 🧾 Concept:

A **nested loop** is a loop inside another loop.
Used when you need to perform repeated operations **row × column** style — often seen in pattern printing.

### 🧠 Syntax:

```js
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    // logic here
  }
}
```

### 📌 Learning Outcomes:

* Mastery of row-wise and column-wise structure
* Control over shape, alignment, and output formatting

</details>

---

<details>
<summary><strong> Pattern Programming (Conceptual Learning)</strong></summary>

### 🧾 Concept:

Pattern programming involves printing characters, numbers, or symbols in **structured shapes** using nested loops.

### 📌 Common Patterns:

* Stars (`*`)
* Numbers (`1 2 3`)
* Alphabets (`A B C`)
* Inverted patterns
* Pyramids, diamonds, etc.

### 🧠 Learning Outcomes:

* Loop logic control
* Character/number transformation with ASCII values
* Sharpen logic-building and attention to detail

</details>

---

### 🎨 Pattern Questions

<details>
<summary><strong>Q35: Right Angle Triangle (Star Pattern)</strong></summary>

### 🔹 Pattern:

```
*
* *
* * *
* * * *
* * * * *
```

### 💡 Logic:

* Outer loop: rows (1 to n)
* Inner loop: print `*` i times per row

</details>

---

<details>
<summary><strong>Q36: Number Triangle</strong></summary>

### 🔹 Pattern:

```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

### 💡 Logic:

* Outer loop: rows
* Inner loop: print numbers from 1 to i

</details>

---

<details>
<summary><strong>Q37: Alphabet Triangle</strong></summary>

### 🔹 Pattern:

```
A
A B
A B C
A B C D
A B C D E
```

### 💡 Logic:

* Use `String.fromCharCode(65 + j)` to convert 0→A, 1→B...
* Inner loop runs from 0 to i

</details>

---

<details>
<summary><strong>Q38: Inverted Right Angle Triangle</strong></summary>

### 🔹 Pattern:

```
* * * * *
* * * *
* * *
* *
*
```

### 💡 Logic:

* Outer loop: rows from n to 1
* Inner loop: print `*` j times where j ≤ i

</details>

---

#### 🧑‍💻 Code : [Class-Code](Code/index.js)


## Created with ❤️ by Shivansh 
