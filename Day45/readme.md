# 🦁 Sheryians Coding School Cohort – Day45 Learnings

## 📘 Matrix Operations in JavaScript (2D Arrays)

---

## ✅ Covered Concepts

1. Matrix Creation
2. Display Matrix
3. Transpose Matrix
4. In-place Transpose
5. Rotate Image (90° Clockwise)

---

## 🧮 Q: What is a Matrix?

A **Matrix** is a two-dimensional array, structured as rows and columns.

```js
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

---

## 🔧 Step-by-Step Breakdown

---

### 🔹 Step 1: Matrix Creation (with Random Values)

```js
let arr = new Array(size);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(size);
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.floor(Math.random() * 100);
    }
}
```

📌 **Logic**:

* Create an empty square matrix of size `size x size`.
* Fill it with random integers between 0–99 using `Math.random()`.

🧠 **Concept**:

* Arrays of arrays = 2D structure.
* Useful in image processing, DSA problems, grid-based logic, etc.

⏱ **Time Complexity**: `O(n²)`
🗂 **Space Complexity**: `O(n²)`

---

### 🔹 Step 2: Display Matrix

```js
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        process.stdout.write(`${arr[i][j]}  `);
    }
    console.log("");
}
```

📌 **Logic**:
Print matrix row by row using nested loops.

⏱ **Time Complexity**: `O(n²)`
🗂 **Space Complexity**: `O(1)` (No extra space used)

---

### 🔹 Step 3: Transpose (In a New Matrix)

> *(Commented out in your code)*

```js
let ans = Array.from({ length: arr[0].length }, () => Array(arr.length));
for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i].length; j++) {
        ans[i][j] = arr[j][i];
    }
}
```

📌 **Logic**:
Swap `arr[i][j]` with `arr[j][i]` → create a new matrix.

⏱ **Time Complexity**: `O(n²)`
🗂 **Space Complexity**: `O(n²)` (New matrix created)

---

### 🔹 Step 4: In-place Transpose

```js
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
        let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
}
```

📌 **Logic**:
Swap elements diagonally across the main diagonal without extra space.

🧠 **Why `j = i`?**
To avoid swapping already swapped pairs (upper triangle only).

⏱ **Time Complexity**: `O(n²)`
🗂 **Space Complexity**: `O(1)`

---

### 🔹 Step 5: Reverse Each Row (Rotate Image)

```js
for (let i = 0; i < arr.length; i++) {
    let k = 0, j = arr[i].length - 1;
    while (k < j) {
        let temp = arr[i][k];
        arr[i][k] = arr[i][j];
        arr[i][j] = temp;
        k++;
        j--;
    }
}
```

📌 **Logic**:
After transposing, reverse every row to rotate the matrix 90° clockwise.

🧠 **Why reverse?**
Transpose turns rows into columns. Reversing finalizes the clockwise rotation.

⏱ **Time Complexity**: `O(n²)`
🗂 **Space Complexity**: `O(1)`

---

## 🔁 🔄 Full 90° Clockwise Rotation Logic (2-step)

1. **Transpose the matrix**: swap `arr[i][j]` with `arr[j][i]`.
2. **Reverse each row**: swap elements within a row.

This combination effectively rotates a square matrix 90° in-place.

---

### 🧑‍💻 Code : [Class-Code](Code/index.js)

---

## Created with ❤️ by Shivansh 