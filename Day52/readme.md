# 🦁 Sheryians Coding School Cohort – Day51 Learnings


## 📝 1. Frequency Count of Characters

👉 **Problem:** Count how many times each character appears in a string.

### 💡 Concept:

* Every character has an **ASCII code**.
* Use an **array of fixed size (say 123 for ASCII)** where `index = ASCII code`.
* Increment frequency whenever the character occurs.

### ⚙️ Logic:

1. Create an array `freqArr` of size 123 (all `0`).
2. For every character in string → find its ASCII → increase count.
3. Print all characters with count > 0.

### 🔄 Dry Run

Input: `"hello"`

* `'h'` → ASCII 104 → freqArr\[104] = 1
* `'e'` → ASCII 101 → freqArr\[101] = 1
* `'l'` → ASCII 108 → freqArr\[108] = 2
* `'o'` → ASCII 111 → freqArr\[111] = 1

Output:

```
h -> 1
e -> 1
l -> 2
o -> 1
```

### 📊 Complexity

* **Time:** O(n) → one scan of string.
* **Space:** O(1) → array of fixed size (ASCII limit).

---

## 📝 2. Check if Two Strings are Anagrams

👉 **Problem:** Two strings are anagrams if they have same characters with same frequency (order doesn’t matter).

### 💡 Concept

* Use a frequency array of size 123.
* First string: increment counts.
* Second string: decrement counts.
* If all entries are `0` → ✅ anagram.

### ⚙️ Logic

1. If lengths differ → ❌ Not anagram.
2. Fill frequency from first string.
3. Subtract frequency from second string.
4. Check if array is all `0`.

### 🔄 Dry Run

Input: `"listen"`, `"silent"`

* After processing → all frequencies `0`.
  👉 `"listen"` and `"silent"` are anagrams ✅.

### 📊 Complexity

* **Time:** O(n).
* **Space:** O(1) → fixed ASCII array.

---

## 📝 3. `Set` in JavaScript

👉 **Definition:** A **Set** is a collection of **unique values** (no duplicates).

* **Order doesn’t matter**.
* Can store primitives and objects.

### 🔑 Important Methods

| Method              | Description                | Example              |
| ------------------- | -------------------------- | -------------------- |
| `set.add(value)`    | Adds a value               | `set.add(10)`        |
| `set.delete(value)` | Removes a value            | `set.delete(20)`     |
| `set.has(value)`    | Checks existence           | `set.has(30)` → true |
| `set.size`          | Returns number of elements |                      |
| `set.clear()`       | Clears entire set          |                      |
| Iteration           | `for (let val of set)`     | Loops all values     |

### Example

```js
let set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(10); // duplicate ignored
console.log(set);  // {10, 20, 30}
console.log(set.size);  // 3
```

---

## 📝 4. Pangram Check

👉 **Problem:** A pangram is a string that contains **all 26 English letters** at least once.

### 💡 Concept

* Use a **Set** to store unique characters.
* If set size == 26 → ✅ pangram.

### ⚙️ Logic

1. Iterate string.
2. Insert each character into Set.
3. After loop → if `set.size === 26` → ✅ Pangram.

### 🔄 Dry Run

Input: `"the quick brown fox jumps over a lazy dog"`

Set after processing → contains all letters (a-z).
👉 ✅ Pangram.

Input: `"hello world"`
Set size < 26 → ❌ Not Pangram.

### 📊 Complexity

* **Time:** O(n).
* **Space:** O(1) → at most 26 chars in set.

---

✅ Today’s learnings tied together:

* **Frequency arrays** → useful for counting & anagrams.
* **Set** → best for uniqueness problems.
* **Pangram check** → perfect real-world use of Set.

---



#### 🧑‍💻 Code : [Class-Code](Code/index.js)

## Created with ❤️ by Shivansh 