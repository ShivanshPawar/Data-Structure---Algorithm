# 🦁 Sheryians Coding School Cohort – Day43 Learnings


## 🧩 Multi-Dimensional Arrays (2D Arrays)


### 🔍 Concept Overview

A **2D array** is an array of arrays, used to store matrix-style data. Think of it like a grid of `rows` and `columns`.

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

---

## ✅ Questions

---

<details>
<summary><strong>Q51. 1572. Matrix Diagonal Sum</strong></summary>

### 🧠 Logic:

* Primary diagonal: `matrix[i][i]`
* Secondary diagonal: `matrix[i][n - i - 1]`
* Avoid double counting middle element in odd-sized matrix.

### 🔢 Input:

```js
[[1,2,3],
 [4,5,6],
 [7,8,9]]
```

### 🎯 Output:

```
25 (1 + 5 + 9 + 3 + 7)
```

</details>

---

<details>
<summary><strong>Q52. 867. Transpose Matrix</strong></summary>

### 🧠 Logic:

* Transpose of matrix flips it over its diagonal.
* `result[col][row] = matrix[row][col]`

### 🔢 Input:

```js
[[1,2,3],
 [4,5,6]]
```

### 🎯 Output:

```js
[[1,4],
 [2,5],
 [3,6]]
```

</details>

---

<details>
<summary><strong>Q53. 48. Rotate Image</strong></summary>

### 🧠 Logic:

* **Transpose + Reverse Rows** = 90° clockwise rotation.
* **In-place** manipulation required (no extra matrix).

### 🔢 Input:

```js
[[1,2,3],
 [4,5,6],
 [7,8,9]]
```

### 🎯 Output:

```js
[[7,4,1],
 [8,5,2],
 [9,6,3]]
```

</details>

---

<details>
<summary><strong>Q54. 54. Spiral Matrix</strong></summary>

### 🧠 Logic:

* Traverse boundaries: top → right → bottom → left.
* Use 4 pointers: `top`, `bottom`, `left`, `right` and loop until they collapse.

### 🔢 Input:

```js
[[1,2,3],
 [4,5,6],
 [7,8,9]]
```

### 🎯 Output:

```
[1,2,3,6,9,8,7,4,5]
```

</details>

### 🧑‍💻 Code : [Class-Code](Code/index.js)


---

## Created with ❤️ by Shivansh 