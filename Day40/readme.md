# 🦁 Sheryians Coding School Cohort – Day40 Learnings

## 📘 Array DSA Problems


## 🔹 Q49. Array Left Rotation by K Elements

**🧩 Problem:**
Given an array and a number `k`, rotate the array to the **left** by `k` positions.

**🧠 DSA Logic:**

* Left rotation shifts each element to the left by 1, `k` times.
* Effective rotation: `k % n`
* To rotate left:

  * Slice the array into two parts: `arr.slice(k)` and `arr.slice(0, k)`
  * Concatenate them: `arr = [...arr.slice(k), ...arr.slice(0, k)]`

**📌 Example:**

```
Input: arr = [1, 2, 3, 4, 5], k = 2  
Output: [3, 4, 5, 1, 2]
```

**🕒 Time Complexity:** O(n)
**📦 Space Complexity:** O(n) (unless done in-place)

---
## Program :


### 🔸 What is Left Rotation?

Left rotate an array by `k` elements means:

> Move each element to the left by `k` positions and wrap around to the end.

### Example:

```js
Input:  [1, 2, 3, 4, 5],  k = 2  
Output: [3, 4, 5, 1, 2]
```

---

### ✅ **1st Method: Brute Force In-place Rotation (Repeated shifting)**

### 🔗 Code:

```js
k = k % arr.length;
for (let j = 1; j <= k; j++) {
  let copy = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = copy;
}
```

### 🔍 How it works:

* Repeats the process `k` times:

  * Removes the first element
  * Shifts the rest to the left
  * Adds the removed element to the end

### 💡 Dry Run:

```js
[1,2,3,4,5], k=2
Step 1: [2,3,4,5,1]
Step 2: [3,4,5,1,2]
```

### ⚖️ Time & Space:

* Time: **O(n × k)** ❌ (slow for large `k`)
* Space: **O(1)** ✅ (in-place)

### ✅ Use Case: Simple logic, but not good for large `k`.

---

### ✅ **2nd Method: Using Temporary Array (Extra Space)**

### 🔗 Code:

```js
for (let i = 0; i < arr.length; i++) {
  temp[i] = arr[(i + k) % arr.length];
}
```

### 🔍 How it works:

* Creates a new array `temp`
* For each element at index `i`, it moves to index `(i + k) % length`

### 💡 Dry Run:

```js
arr = [1,2,3,4,5], k = 2

temp[0] = arr[2] = 3
temp[1] = arr[3] = 4
temp[2] = arr[4] = 5
temp[3] = arr[0] = 1
temp[4] = arr[1] = 2

=> temp = [3, 4, 5, 1, 2]
```

### ⚖️ Time & Space:

* Time: **O(n)** ✅
* Space: **O(n)** ❌ (extra array)

### ✅ Use Case: Efficient, clean, but uses extra memory.

---

### ✅ **3rd Method: Reversal Algorithm (Most Optimal)**

### 🔗 Code:

```js
reverse(arr, 0, k - 1);
reverse(arr, k, arr.length - 1);
reverse(arr, 0, arr.length - 1);
```

### 🔍 How it works:

Suppose:

```js
arr = [1, 2, 3, 4, 5], k = 2
```

* Step 1: Reverse first part → `[2, 1, 3, 4, 5]`
* Step 2: Reverse second part → `[2, 1, 5, 4, 3]`
* Step 3: Reverse whole → `[3, 4, 5, 1, 2]`

### 💡 Why it works:

It cleverly breaks the array into parts and reorders using reverse operations.

### ⚖️ Time & Space:

* Time: **O(n)** ✅
* Space: **O(1)** ✅ (in-place)
* **Most Optimal**

### ✅ Use Case: Best for performance + in-place requirement.

---

### 🔚 Final Comparison

| Method   | Time Complexity | Space Complexity | In-place | Best For                       |
| -------- | --------------- | ---------------- | -------- | ------------------------------ |
| Method 1 | ❌ O(n × k)      | ✅ O(1)           | ✅ Yes    | Small `k` values               |
| Method 2 | ✅ O(n)          | ❌ O(n)           | ❌ No     | Simplicity + fast              |
| Method 3 | ✅ O(n)          | ✅ O(1)           | ✅ Yes    | 🔥 Best in performance & space |

---

## 🏆 Best Approach?

✅ **3rd Method (Reversal Algorithm)**

> Fastest + In-place + No extra memory




---

## 🔹 Q50. Linear Search in an Array

**🧩 Problem:**
Search for a given element in an array using **linear search**.
Return its index if found, else return `-1`.

**🧠 DSA Logic:**

* Traverse array from `0 to n-1`
* Compare each element with the target
* Return index on match, or `-1` if not found

**📌 Example:**

```
Input: arr = [10, 20, 30, 40], target = 30  
Output: 2

Input: arr = [10, 20, 30], target = 50  
Output: -1
```

**🕒 Time Complexity:** O(n)
**📦 Space Complexity:** O(1)

---

## 🔹 Q51. Binary Search in a Sorted Array

**🧩 Problem:**
Search for a given number in a **sorted array** using binary search.

**🧠 DSA Logic:**

* Set `start = 0`, `end = n - 1`
* While `start <= end`:

  * Calculate `mid = Math.floor((start + end) / 2)`
  * If `arr[mid] === target`, return `mid`
  * If `arr[mid] < target`, search right: `start = mid + 1`
  * Else search left: `end = mid - 1`

**📌 Example:**

```
Input: arr = [5, 10, 15, 20, 25], target = 15  
Output: 2

Input: arr = [1, 3, 5, 7, 9], target = 8  
Output: -1
```

**🕒 Time Complexity:** O(log n)
**📦 Space Complexity:** O(1)

> ⚠️ Works **only** on sorted arrays


---

### 🧑‍💻 Code : [Class-Code](Code/index.js)

---

## Created with ❤️ by Shivansh 