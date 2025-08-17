# 🦁 Sheryians Coding School Cohort – Day51 Learnings



## Here we go 👇


## 📘 Day – String Problems (DSA Practice)


## 🔹 Q57. Palindromic String using Two Pointer Algorithm

### 📝 Problem

Check whether a string is a **palindrome** (same forwards & backwards).
👉 Use the **two-pointer approach** (hint: like array reverse).

### 💡 Concept

* A palindrome reads the same both ways (e.g., `madam`, `racecar`).
* Instead of reversing the whole string, compare characters **from both ends**:

  * Left pointer (`i`) at index `0`.
  * Right pointer (`j`) at index `n-1`.
  * Move `i++` and `j--` while comparing.

### ⚙️ Logic

1. Start with `i=0`, `j=n-1`.
2. While `i<j` → compare `s[i]` and `s[j]`.
3. If mismatch → **not palindrome**.
4. Else → continue inward.
5. If loop finishes → palindrome.

### 🔄 Dry Run (Input: `"level"`)

* `i=0 (l)`, `j=4 (l)` → match ✅
* `i=1 (e)`, `j=3 (e)` → match ✅
* `i=2`, middle → stop.
  👉 `"level"` is a palindrome.

### 📊 Complexity

* **Time:** `O(n)` → each char checked once.
* **Space:** `O(1)` → only pointers used.

---

## 🔹 Q58. Toggle Case of String

### 📝 Problem

Given a string, **toggle each alphabet’s case**.
Example: `AcgDfD → aCGdFd`

### 💡 Concept

* Each alphabet has an **ASCII code**.

  * `'A'–'Z' → 65–90`
  * `'a'–'z' → 97–122`
* Convert using ASCII math:

  * Upper → Lower → `+32`
  * Lower → Upper → `-32`

### ⚙️ Logic

1. Traverse string char by char.
2. Get ASCII code using `charCodeAt()`.
3. If upper → convert to lower.
4. If lower → convert to upper.
5. Build final answer string.

### 🔄 Dry Run (Input: `"Acg"`)

* `A (65)` → lower → `"a"`
* `c (99)` → upper → `"C"`
* `g (103)` → upper → `"G"`
  👉 Output = `"aCG"`

### 📊 Complexity

* **Time:** `O(n)` → traverse string.
* **Space:** `O(n)` → new toggled string.

---

## 🔹 Q59. Count Words with Prefix

### 📝 Problem

Given an array of words and a string `prefix`, count how many words **start with that prefix**.

Example:
Input → `["pay","attention","practice","attend"], prefix="at"`
Output → `2`

### 💡 Concept

* Use `string.startsWith(prefix)` for check.
* Traverse all words, count matches.

### ⚙️ Logic

1. Initialize `count=0`.
2. Loop over each word in `words[]`.
3. If `word.startsWith(prefix)` → `count++`.
4. Print final count.

### 🔄 Dry Run

* Words: `["attention","people","attire","hello","attend"]`, prefix = `"at"`
* `"attention"` ✅
* `"people"` ❌
* `"attire"` ✅
* `"hello"` ❌
* `"attend"` ✅
  👉 Count = 3

### 📊 Complexity

* **Time:** `O(n * m)` → `n=words`, `m=prefix length`.
* **Space:** `O(1)`.

---

## 🔹 Q60. Capitalize First & Last Character of Each Word

### 📝 Problem

Capitalize the **first & last character** of each word in a sentence.

Example:
Input → `"hello bhai kaise ho a"`
Output → `"HellO BhaI KaisE HO A"`

### 💡 Concept

* Split sentence into words.
* For each word:

  * If length ≤ 2 → uppercase whole word.
  * Else → capitalize first + last character.

### ⚙️ Logic

1. Split sentence into words with `.split(" ")`.
2. Loop each word:

   * `word[0] → uppercase`
   * `word[word.length-1] → uppercase`
   * Middle stays same.
3. Join all words back.

### 🔄 Dry Run (Input: `"hello kaise"`)

* Word `"hello"` → `H + ell + O = "HellO"`
* Word `"kaise"` → `K + ais + E = "KaisE"`
  👉 Output = `"HellO KaisE"`

### 📊 Complexity

* **Time:** `O(n)` → n = length of sentence.
* **Space:** `O(n)` → new string created.

---


## Created with ❤️ by Shivansh 