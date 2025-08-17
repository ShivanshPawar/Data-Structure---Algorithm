# 🦁 Sheryians Coding School Cohort – Day47 Learnings

# **Strings**


## 🔹 What is a String?

A **String** is a sequence of characters enclosed within **single**, **double**, or **backticks**:

```js
let name1 = 'John';
let name2 = "Doe";
let greeting = `Hello ${name1}`;
```

JavaScript strings are **immutable**, meaning their content can't be changed once created (though you can reassign them).

---

## 🔧 String Methods and Their Usage

---

### 1. **`.length`**

Returns the total number of characters in the string.

```js
let str = "JavaScript";
console.log(str.length);  // Output: 10
```

---

### 2. **`.slice(start, end)`**

Extracts part of a string from `start` to `end` (excluding `end`). Supports negative indices.

```js
let str = "Hello World";
console.log(str.slice(0, 5));   // Output: Hello
console.log(str.slice(-5));     // Output: World
```

---

### 3. **`.substring(start, end)`**

Same as `slice()`, but **does not** support negative indexes.

```js
let str = "Hello World";
console.log(str.substring(0, 5));  // Output: Hello
```

---

### 4. **`.substr(start, length)`**

Returns a substring starting from `start` with specified `length`. *(Deprecated but still used)*

```js
let str = "JavaScript";
console.log(str.substr(4, 6));  // Output: Script
```

---

### 5. **`.toUpperCase()`**

Converts all characters to **uppercase**.

```js
let str = "hello";
console.log(str.toUpperCase());  // Output: HELLO
```

---

### 6. **`.toLowerCase()`**

Converts all characters to **lowercase**.

```js
let str = "HELLO";
console.log(str.toLowerCase());  // Output: hello
```

---

### 7. **`.concat()`**

Joins two or more strings.

```js
let first = "Hello";
let second = "World";
console.log(first.concat(" ", second)); // Output: Hello World
```

---

### 8. **`.trim()`**

Removes whitespace from **both** ends.

```js
let str = "  Hello World  ";
console.log(str.trim());  // Output: "Hello World"
```

---

### 9. **`.indexOf(substring)`**

Returns the **first occurrence** of the substring. Returns `-1` if not found.

```js
let str = "banana";
console.log(str.indexOf("a"));  // Output: 1
```

---

### 10. **`.lastIndexOf(substring)`**

Returns the **last occurrence** of the substring.

```js
let str = "banana";
console.log(str.lastIndexOf("a"));  // Output: 5
```

---

### 11. **`.includes(substring)`**

Checks if the string contains the given substring.

```js
let str = "JavaScript";
console.log(str.includes("Script"));  // Output: true
```

---

### 12. **`.startsWith(substring)`**

Checks if the string starts with the given substring.

```js
let str = "JavaScript";
console.log(str.startsWith("Java"));  // Output: true
```

---

### 13. **`.endsWith(substring)`**

Checks if the string ends with the given substring.

```js
let str = "script.js";
console.log(str.endsWith(".js"));  // Output: true
```

---

### 14. **`.replace(old, new)`**

Replaces **first occurrence** of a substring.

```js
let str = "I love bananas";
console.log(str.replace("bananas", "apples"));  // Output: I love apples
```

---

### 15. **`.replaceAll(old, new)`**

Replaces **all occurrences** of a substring.

```js
let str = "a b a b a";
console.log(str.replaceAll("a", "x"));  // Output: x b x b x
```

---

### 16. **`.split(separator)`**

Splits a string into an **array** based on a separator.

```js
let str = "a,b,c";
console.log(str.split(","));  // Output: ['a', 'b', 'c']
```

---

### 17. **`.charAt(index)`**

Returns the character at the specified index.

```js
let str = "Java";
console.log(str.charAt(2));  // Output: v
```

---

### 18. **`.charCodeAt(index)`**

Returns the **Unicode** value of the character at the given index.

```js
let str = "A";
console.log(str.charCodeAt(0));  // Output: 65
```

---

## 🔥 Quick Summary Table

| Method          | Purpose                        |
| --------------- | ------------------------------ |
| `length`        | Get length of string           |
| `slice()`       | Extract substring              |
| `substring()`   | Like slice but no negatives    |
| `substr()`      | Substring with length          |
| `toUpperCase()` | Convert to uppercase           |
| `toLowerCase()` | Convert to lowercase           |
| `concat()`      | Combine strings                |
| `trim()`        | Remove leading/trailing spaces |
| `indexOf()`     | First match position           |
| `lastIndexOf()` | Last match position            |
| `includes()`    | Check presence of substring    |
| `startsWith()`  | Check if starts with substring |
| `endsWith()`    | Check if ends with substring   |
| `replace()`     | Replace first occurrence       |
| `replaceAll()`  | Replace all occurrences        |
| `split()`       | Split into array               |
| `charAt()`      | Character at index             |
| `charCodeAt()`  | Unicode value at index         |

---


# 🔹 Q 55: Traverse Each Character of a String

### 📝 Problem

Given a string, print each character on a new line.

### 💡 Concept

* Strings in JavaScript are **array-like** (can access using index `str[i]`).
* Looping allows us to process each character individually.

### ⚙️ Logic

1. Take input string `str`.
2. Loop from `i = 0` to `str.length-1`.
3. Print `str[i]` in each iteration.

### 🔄 Dry Run (Input: `"abc"`)

* i=0 → `a`
* i=1 → `b`
* i=2 → `c`

👉 Output:

```
a  
b  
c
```

### 📊 Complexity

* **Time:** `O(n)` → loop runs for all characters.
* **Space:** `O(1)` → no extra storage.

---

# 🔹 Q 55: Reverse a String

### 📝 Problem

Reverse a given string using iteration.

### 💡 Concept

* A string is immutable in JS → can’t modify directly.
* Need to build a new string (`revStr`).
* Traverse from **end → start** and append characters.

### ⚙️ Logic

1. Initialize `revStr = ""`.
2. Start loop `i = str.length - 1` → `0`.
3. At each step, append `str.charAt(i)` to `revStr`.
4. Print final reversed string.

### 🔄 Dry Run (Input: `"abc"`)

* i=2 → `c` → revStr = `"c"`
* i=1 → `b` → revStr = `"cb"`
* i=0 → `a` → revStr = `"cba"`

👉 Output: `"cba"`

⚠️ Note: In your code you used

```js
for (let i = str.length; i >= 0; i--) 
```

It starts from `str.length` (which is **out of bound**) → first `charAt()` gives `""`.
Correct would be:

```js
for (let i = str.length - 1; i >= 0; i--) 
```

### 📊 Complexity

* **Time:** `O(n)` → each char visited once.
* **Space:** `O(n)` → new reversed string created.


### 🧑‍💻 Code : [Class-Code](Code/index.js)

---

## Created with ❤️ by Shivansh 