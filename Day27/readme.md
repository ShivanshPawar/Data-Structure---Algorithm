# 🦁 Sheryians Coding School Cohort – Day27 Learnings

## Conceptual Learnings ([Code](Code/index.js))


### ✅ Q1. **Sum of Two Integers**

This involves taking two integer values and calculating their sum using the `+` (addition) operator. It helps understand basic input handling and arithmetic in JavaScript.

---

### ✅ Q2. **Relation Between Integer and String**

JavaScript performs **type coercion** automatically when an operation involves different types:

* When adding a number and a string, JavaScript converts the number to a string and **concatenates**.
* In arithmetic operations (other than `+`), JavaScript tries to convert strings to numbers.

---

### ✅ Q3. **Sum and Message – Type Coercion**

When combining a number with a message (string), JavaScript uses **type coercion** and converts the number into a string for display. This introduces how dynamic and flexible JS is when handling mixed types in operations.

---

### ✅ Q4. **Greet the User**

This concept introduces user interaction using input/output methods:

* Taking input from the user
* Displaying a greeting message based on that input

It's foundational for dynamic programs that respond to user actions.

---

### ✅ Q5. **Accept and Print the Answer**

Covers how to:

* Take user input
* Process it (optional)
* Display the result/output

It teaches how to connect the user interface (prompt/console) with program logic.

---

### ✅ Q6. **Swap Two Variables via 3 Methods**

Swapping values of two variables helps understand **temporary storage and assignments**. Common methods include:

1. Using a temporary variable
2. Without a third variable (using arithmetic)
3. Using array destructuring (modern JS)

It builds problem-solving and logic understanding.

---

## ⚙️ Operators and Their Categories

### ➕ Arithmetic Operators (`+`, `-`, `*`, `/`, `%`)

Used to perform **basic mathematical calculations**:

* `+` Addition
* `-` Subtraction
* `*` Multiplication
* `/` Division
* `%` Modulus (remainder)

---

### 🔍 Relational (Comparison) Operators (`>`, `<`, `>=`, `<=`, `!=`)

Used to **compare values**:

* Result is a boolean (`true` or `false`)
* Helps in decision-making and conditions

---

### 🔗 Logical Operators (`&&`, `||`)

Used to **combine multiple conditions**:

* `&&` (AND): All conditions must be true
* `||` (OR): At least one condition must be true

Used in control structures like `if`, `while`, etc.

---

### 🔄 Unary Operators (`++`, `--`)

* `++` Increment: Increases a value by 1
* `--` Decrement: Decreases a value by 1

They can be **prefix** or **postfix**, which affects when the value changes.

---





## ‼️Assignment ‼️([Assignment](Assignment/index.js))



### 🧮 1. Increment and Decrement Operators

<details>
<summary><strong>Q1:</strong> <code>let i = 11; i = i++ + ++i; console.log(i);</code></summary>

```js
let i = 11;
i = i++ + ++i;
console.log(i);
```

</details>

---

<details>
<summary><strong>Q2:</strong> <code>let a = 11, b = 22, c;</code></summary>

```js
let a = 11, b = 22, c;
c = a + b + a++ + b++ + ++a + ++b;

console.log("a=" + a); 
console.log("b=" + b); 
console.log("c=" + c);
```

</details>

---

<details>
<summary><strong>Q3:</strong> <code>let i = 0; i = i++ - --i + ++i - i--; console.log(i);</code></summary>

```js
let i = 0;
i = i++ - --i + ++i - i--;
console.log(i);
```

</details>

---

<details>
<summary><strong>Q4:</strong> <code>let b = true; b++; console.log(b);</code></summary>

```js
let b = true;
b++;
console.log(b);
```

</details>

---

### ⚙️ 2. Complex Increment and Decrement Operations

<details>
<summary><strong>Q5:</strong> <code>let i = 1, j = 2, k = 3; let m = i-- - j-- - k--;</code></summary>

```js
let i = 1, j = 2, k = 3;
let m = i-- - j-- - k--;

console.log("i=" + i); 
console.log("j=" + j); 
console.log("k=" + k); 
console.log("m=" + m);
```

</details>

---

<details>
<summary><strong>Q6:</strong> <code>let a = 1, b = 2; console.log(--b - ++a + ++b - --a);</code></summary>

```js
let a = 1, b = 2;
console.log(--b - ++a + ++b - --a);
```

</details>

---

<details>
<summary><strong>Q7:</strong> <code>let i = 19, j = 29, k; ... complex operation</code></summary>

```js
let i = 19, j = 29, k;
k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;

console.log("i=" + i); 
console.log("j=" + j); 
console.log("k=" + k);
```

</details>

---

### ⚠️ 3. Syntax Errors and Logical Issues

<details>
<summary><strong>Q8:</strong> <code>let i = 11; let j = --(i++);</code></summary>

```js
let i = 11;
let j = --(i++); // ❌ Syntax Error
```

</details>

---

<details>
<summary><strong>Q9:</strong> <code>let m = 0, n = 0; let p = --m * --n * n-- * m--;</code></summary>

```js
let m = 0, n = 0;
let p = --m * --n * n-- * m--;
console.log(p);
```

</details>

---

<details>
<summary><strong>Q10:</strong> <code>let a = 1; a = a++ + ++a * --a - a--;</code></summary>

```js
let a = 1;
a = a++ + ++a * --a - a--;
console.log(a);
```

</details>

---

<details>
<summary><strong>Q11:</strong> <code>let a = 11++;</code></summary>

```js
let a = 11++; // ❌ Syntax Error: Invalid left-hand side expression
console.log(a);
```

</details>

---

<details>
<summary><strong>Q12:</strong> <code>let i = 0, j = 0; console.log(--i * i++ * ++j * j++);</code></summary>

```js
let i = 0, j = 0;
console.log(--i * i++ * ++j * j++);
```

</details>

---

## Created with ❤️ by Shivansh 

