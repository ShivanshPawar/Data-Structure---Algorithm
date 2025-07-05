# 🦁 Sheryians Coding School Cohort – Day28 Learnings

## Math Functions Learnings ([Code](Code/index.js))


### 📊 Built-in Math Methods in JavaScript

---

### 🔢 **Rounding & Truncation**

* **`Math.round(x)`**
  Rounds a number to the nearest integer.
  `4.5 → 5`, `4.4 → 4`

* **`Math.ceil(x)`**
  Rounds **up** to the next whole number.
  `4.2 → 5`

* **`Math.floor(x)`**
  Rounds **down** to the previous whole number.
  `4.9 → 4`

* **`Math.trunc(x)`**
  Removes the decimal part (no rounding).
  `4.8 → 4`, `-4.8 → -4`

---

### 💥 **Powers & Roots**

* **`Math.pow(a, b)`**
  Returns `a` raised to the power of `b`.
  `Math.pow(2, 3) → 8`

* **`Math.sqrt(x)`**
  Returns the square root of `x`.
  `Math.sqrt(9) → 3`

* **`Math.cbrt(x)`**
  Returns the cube root of `x`.
  `Math.cbrt(27) → 3`

---

### ➕ **Absolute & Extremes**

* **`Math.abs(x)`**
  Returns the absolute (positive) value.
  `Math.abs(-10) → 10`

* **`Math.max(...args)`**
  Returns the largest number.
  `Math.max(10, 5, 8) → 10`

* **`Math.min(...args)`**
  Returns the smallest number.
  `Math.min(10, 5, 8) → 5`

---

### 🎲 **Random & Fixed Decimal**

* **`Math.random()`**
  Returns a pseudo-random number between `0` and `<1`.
  (Used for games, randomness, etc.)

* **`.toFixed(n)`**
  Converts a number to a string with `n` decimals.
  `4.6789.toFixed(2) → "4.68"`

---

## Math Problems


<details>
<summary><strong>Q6. Calculate Compound Interest</strong></summary>

### 💡 Concept:

Compound Interest is calculated using the formula:

```
CI = P × (1 + R/100)^T - P
```

Where:

* `P` = Principal amount
* `R` = Annual interest rate
* `T` = Time in years

### 🧠 Use:

Use `Math.pow()` to calculate `(1 + R/100)^T`.

</details>

---

<details>
<summary><strong>Q7. Generate OTP</strong></summary>

### 💡 Concept:

OTP (One-Time Password) is a randomly generated numeric code, usually 4 to 6 digits.

### 🧠 Use:

Use `Math.floor(Math.random() * 10000)` for 4-digit OTP.
You can pad with `.toString().padStart(4, '0')` if needed.

</details>

---

<details>
<summary><strong>Q8. Area of Triangle (Heron’s Formula)</strong></summary>

### 💡 Concept:

If sides of a triangle are `a`, `b`, and `c`:

1. Compute semi-perimeter `s = (a + b + c) / 2`
2. Apply Heron’s Formula:

```
Area = √[s(s - a)(s - b)(s - c)]
```

### 🧠 Use:

Use `Math.sqrt()` to compute square root.

</details>

---

<details>
<summary><strong>Q9. Circumference of Circle</strong></summary>

### 💡 Concept:

Formula:

```
Circumference = 2 × π × r
```

Where `r` is the radius of the circle.
Use `Math.PI` to get the value of π.

</details>



---

## ✅ If-Else Based Questions



<details>
<summary><strong>Q10. Accept two numbers and print the greatest between them</strong></summary>

### 💡 Concept:

Use an `if-else` statement to compare two numbers:

* If the first number is greater, print it.
* Else, print the second.

Useful to practice basic conditional comparisons (`>`, `<`, `===`).

</details>

---

<details>
<summary><strong>Q11. Accept an integer and check whether it is even or odd</strong></summary>

### 💡 Concept:

A number is **even** if it is divisible by 2 (`num % 2 == 0`), otherwise it's **odd**.

Use modulus operator `%` and apply an `if-else` condition to check parity.

</details>

---

<details>
<summary><strong>Q12. Accept name and age from the user. Check if the user is a valid voter or not.</strong></summary>

### 💡 Concept:

In most countries, the voting age is **18 years or older**.

* Accept `name` and `age`.
* If age ≥ 18, print "valid voter".
* Else, print "not eligible".

</details>

---

<details>
<summary><strong>Q13. Accept three numbers and print the greatest among them</strong></summary>

### 💡 Concept:

Use nested `if-else` or `if-else-if` conditions to:

* Compare all three numbers.
* Identify the maximum using logical conditions (`a > b && a > c`, etc).

Also good to use `Math.max(a, b, c)` as an alternative method.

</details>

---

<details>
<summary><strong>Q14. Accept a year and check if it is a leap year or not</strong></summary>

### 💡 Concept:

A year is a **leap year** if:

* It is divisible by 4 **and**

  * Not divisible by 100 **unless** also divisible by 400.

**Leap year rule:**

```text
If (year % 4 === 0 && year % 100 !== 0) OR (year % 400 === 0)
```

Use compound conditions with `&&`, `||` to evaluate.

</details>

---


## Created with ❤️ by Shivansh 