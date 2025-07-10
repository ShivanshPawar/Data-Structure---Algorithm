# 🦁 Sheryians Coding School Cohort – Day36 Learnings


### 🔹 Q46. Reverse the Array

**🧩 Problem:**
Reverse the elements of an array in-place.

**🧠 DSA Logic:**

* Use **two-pointer approach**

  * Initialize `left = 0`, `right = n - 1`
  * While `left < right`, swap `arr[left]` and `arr[right]`
  * Move pointers inward: `left++`, `right--`

---

#### 🧪 Dry Run Example:

> **Input:** `[1, 2, 3, 4, 5]`

| Step | left | right | arr                     |
| ---- | ---- | ----- | ----------------------- |
| 1    | 0    | 4     | `[5, 2, 3, 4, 1]`       |
| 2    | 1    | 3     | `[5, 4, 3, 2, 1]`       |
| 3    | 2    | 2     | `Stop` → Fully reversed |

**🕒 Time:** O(n)
**📦 Space:** O(1)

---

### 🔹 Q47. Move All Zeroes to Left and Ones to Right

**🧩 Problem:**
Move all 0s to the **left** and 1s to the **right** in a binary array.

**🧠 DSA Logic:**

**Approach 1 – Count Based:**

* Count number of 0s → say `z`
* Overwrite array: first `z` positions with 0, rest with 1

---

#### 🧪 Dry Run Example:

> **Input:** `[1, 0, 1, 0, 0, 1]`

| Count | Zeroes Count | New Array            |
| ----- | ------------ | -------------------- |
|       | 3            | `[0, 0, 0, 1, 1, 1]` |

---

**Approach 2 – Two Pointer Swap:**

* `left = 0`, `right = n-1`
* Move `left` until it finds 1, and `right` until it finds 0
* Swap and move inward

> Great for **in-place** swapping logic (if interview demands)

**🕒 Time:** O(n)
**📦 Space:** O(1)

---

### 🔹 Q48. Left Rotate the Array by 1

**🧩 Problem:**
Rotate all elements to the **left by 1 position**.

**🧠 DSA Logic:**

* Store `first = arr[0]`
* Shift elements:

  * `arr[i] = arr[i+1]` for `i = 0 to n-2`
* Set `arr[n-1] = first`

---

#### 🧪 Dry Run Example:

> **Input:** `[1, 2, 3, 4, 5]`

| Step | Description        | Array             |
| ---- | ------------------ | ----------------- |
| 1    | Store `first = 1`  |                   |
| 2    | Shift left         | `[2, 3, 4, 5, 5]` |
| 3    | Set last = `first` | `[2, 3, 4, 5, 1]` |

**🕒 Time:** O(n)
**📦 Space:** O(1)

---

### 🔹 Q48. Right Rotate the Array by 1

**🧩 Problem:**
Rotate the elements of an array to the **right by 1 position**.

---

#### 🧠 DSA Logic:

* Step 1: Store the **last element**.
* Step 2: Shift all other elements **one position to the right** (from end to start).
* Step 3: Place the stored last element at **index 0**.

---

#### 📌 Example:

> **Input:** `[1, 2, 3, 4, 5]`
> **Output:** `[5, 1, 2, 3, 4]`

---

#### 🧪 Dry Run:

| Step | Operation        | Array             |
| ---- | ---------------- | ----------------- |
| 1    | Store `last = 5` | `[1, 2, 3, 4, 5]` |
| 2    | Shift right      | `[1, 1, 2, 3, 4]` |
| 3    | Set `arr[0] = 5` | `[5, 1, 2, 3, 4]` |

---

#### ⏱️ Time Complexity:

* **O(n)** – every element is moved once

#### 📦 Space Complexity:

* **O(1)** – done in-place (only one extra variable used)

---

#### 🧑‍💻 Code : [Class-Code](Code/index.js)

---

## Created with ❤️ by Shivansh 