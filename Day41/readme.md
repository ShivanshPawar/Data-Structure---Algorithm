# 🦁 Sheryians Coding School Cohort – Day41 Learnings


# 🧮 Sorting Algorithms



<details>
<summary><strong>🔁 Bubble Sort</strong></summary>

### 📌 Concept:

Bubble Sort is a simple comparison-based algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

### 🔍 Logic:

* Compare adjacent elements.
* Swap if needed.
* Largest element "bubbles" to the end after each pass.

### 🧠 Time Complexity:

* Worst Case: O(n²)
* Best Case: O(n) (when array is already sorted)
* Space: O(1)

### 🧪 Example:

```js
Input: [5, 2, 9, 1, 5, 6]
Pass 1: [2, 5, 1, 5, 6, 9]
Pass 2: [2, 1, 5, 5, 6, 9]
...
Output: [1, 2, 5, 5, 6, 9]
```

</details>

---

<details>
<summary><strong>📥 Insertion Sort</strong></summary>

### 📌 Concept:

Insertion Sort builds the final sorted array one item at a time. It's like sorting playing cards in your hand.

### 🔍 Logic:

* Assume first element is sorted.
* Pick the next element and insert it into the correct position among the sorted ones.

### 🧠 Time Complexity:

* Worst Case: O(n²)
* Best Case: O(n) (already sorted)
* Space: O(1)

### 🧪 Example:

```js
Input: [8, 4, 1, 3]
Step 1: [4, 8, 1, 3]
Step 2: [1, 4, 8, 3]
Step 3: [1, 3, 4, 8]
Output: [1, 3, 4, 8]
```

</details>

---

<details>
<summary><strong>🎯 Selection Sort</strong></summary>

### 📌 Concept:

Selection Sort repeatedly selects the smallest (or largest) element from the unsorted part and puts it in the sorted part.

### 🔍 Logic:

* Loop through the array.
* Find the minimum value in the unsorted part.
* Swap with the first unsorted element.

### 🧠 Time Complexity:

* Always O(n²)
* Space: O(1)

### 🧪 Example:

```js
Input: [29, 10, 14, 37, 13]
Step 1: [10, 29, 14, 37, 13]
Step 2: [10, 13, 14, 37, 29]
Step 3: [10, 13, 14, 37, 29]
Step 4: [10, 13, 14, 29, 37]
Output: [10, 13, 14, 29, 37]
```

</details>

---





## Created with ❤️ by Shivansh 