# 🦁 Sheryians Coding School Cohort – Day43 Learnings


## 📦 Multi-Dimensional Arrays (2D Arrays)


### 🔍 **Concept: Multi-Dimensional Arrays**

A **2D Array** in JavaScript is an array where each element itself is another array.

Think of it like a **matrix** or a **grid**:

```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

Each inner array is a **row**, and each element in the inner array is a **column** value.

---

## 🧾 Topics Covered


### ✅ 1. Matrix Creation (Fixed Size)

**Logic:**

* You can create a square matrix (like 3x3 or 4x4) by nesting loops.
* Each row is an array, and each column value can be filled dynamically.

**Example:**

* For size = 3:

```
[
 [23, 11, 45],
 [56, 67, 89],
 [12, 10, 33]
]
```

---

### ✅ 2. Printing a Matrix

**Logic:**

* To access each value in a 2D array, you need **two loops**:

  * Outer loop → each row.
  * Inner loop → each element in the row.

**Output Format:**

```
23 11 45
56 67 89
12 10 33
```

---

### ✅ 3. Diagonal Sums in a Square Matrix

**📌 Primary Diagonal (↘):**

* Elements like: `[0][0], [1][1], [2][2]...`
* Rule: `i === j`

**📌 Secondary Diagonal (↙):**

* Elements like: `[0][2], [1][1], [2][0]` in a 3x3
* Rule: `i + j === size - 1`

**Example:**

```
Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Left Diagonal = 1 + 5 + 9 = 15
Right Diagonal = 3 + 5 + 7 = 15
```

---

### ✅ 4. Matrix with Different Row Sizes (Jagged Array)

**Logic:**

* Not all rows need to have the same length.
* You can create rows with varying numbers of columns.
* Useful when representing ragged or triangular data.

**Example:**

```
[
 [1, 2, 3],
 [4, 5],
 [6, 7, 8, 9]
]
```

---

### ✅ 5. Accepting Matrix from User (Dynamic)

**Logic:**

* Take user input for:

  * Size of outer array
  * Size of each inner array
  * Values to be inserted
* You dynamically create arrays and insert data manually.

---

### ✅ 6. Array from Factory (Pre-filled)

**Logic:**

* JavaScript provides `Array.from()` with mapping function to generate a 2D array.
* This is useful when you need default or placeholder values.

**Example:**

```
3 rows, 4 columns filled with zeroes:
[
 [0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0]
]
```

---


### 🧑‍💻 Code : [Class-Code](Code/index.js)


---

## Created with ❤️ by Shivansh 