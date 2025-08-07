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

## 🎯 Real-World Examples

* ✅ Validating input: `.trim()` to remove unwanted spaces.
* 🔍 Searching in strings: `.includes()` or `.indexOf()`
* 🛠️ Formatting: `.toUpperCase()` for uppercase names
* 🗂️ Parsing data: `.split(',')` for CSV values

---

### 🧑‍💻 Code : [Class-Code](Code/index.js)

---

## Created with ❤️ by Shivansh 