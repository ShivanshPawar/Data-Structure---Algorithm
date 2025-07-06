# 📘 JavaScript Assignments


<details>
<summary><strong>Q1. ISBN Number 📚</strong></summary>

### 📖 Description:

A valid 10-digit ISBN number must satisfy:

> Sum of each digit multiplied by its position (1–10) should be divisible by 11.

### ✅ Example:

* Input: `0471958697` → **Valid ISBN**
* Input: `020131452` → **Invalid ISBN**

### 💡 Hint:

Use a loop to multiply each digit by its index and check if the total is divisible by 11.

</details>

---

<details>
<summary><strong>Q2. HCF / GCD 🧮</strong></summary>

### 📖 Description:

Find the Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers.

### ✅ Example:

* Input: `a = 12`, `b = 18` → GCD = `6`

### 💡 Hint:

Use the Euclidean Algorithm:
`GCD(a, b) = GCD(b, a % b)`

</details>

---

<details>
<summary><strong>Q3. Harshad Number 🔢</strong></summary>

### 📖 Description:

A number is a **Harshad Number** if it is divisible by the sum of its digits.

### ✅ Example:

* Input: `18` → 1 + 8 = 9 → 18 % 9 = 0 → **Harshad**

### 💡 Hint:

Use `%` and integer division to sum digits.

</details>

---

<details>
<summary><strong>Q4. Perfect Square ✅</strong></summary>

### 📖 Description:

A number is a perfect square if it is the square of an integer.

### ✅ Example:

* Input: `25` → 5 × 5 = 25 → **Perfect Square**

### 💡 Hint:

Use `Math.sqrt()` and check if it’s an integer.

</details>

---

<details>
<summary><strong>Q5. Abundant Number ➕</strong></summary>

### 📖 Description:

A number is **abundant** if the sum of its **proper divisors** is greater than the number itself.

### ✅ Example:

* Input: `12` → Divisors: 1, 2, 3, 4, 6 → Sum = 16 > 12 → **Abundant**

### 💡 Hint:

Use a loop to find proper divisors (exclude the number itself).

</details>

---

<details>
<summary><strong>Q6. Fibonacci Series (Loop) 🌀</strong></summary>

### 📖 Description:

Print the Fibonacci series up to N terms using a loop.

### ✅ Example:

* Input: `N = 6` → Output: `0, 1, 1, 2, 3, 5`

</details>

---

<details>
<summary><strong>Q7. Find Numbers with Exactly X Divisors</strong></summary>

### 📖 Description:

Find all numbers having exactly `X` divisors.

### ✅ Example:

* Input: `X = 3` → Output: `4, 9, 25` (all perfect squares of primes)

### 💡 Hint:

Use prime factorization logic.

</details>

---

<details>
<summary><strong>Q8. Prime Factors 🧠</strong></summary>

### 📖 Description:

Find all **prime factors** of a given number.

### ✅ Example:

* Input: `30` → Output: `2, 3, 5`

### 💡 Hint:

Use trial division starting from 2 upwards.

</details>

---

<details>
<summary><strong>Q9. Area using Switch Statement ⬜🔺🟠</strong></summary>

### 📖 Description:

Calculate area based on shape selection using `switch-case`.

### ✅ Example:

* Circle: `π × r²`
* Rectangle: `l × b`
* Triangle: `½ × b × h`

</details>

---

<details>
<summary><strong>Q10. Neon Number 💡</strong></summary>

### 📖 Description:

A **Neon Number** is one where the sum of digits of its square equals the number itself.

### ✅ Example:

* Input: `9` → 9² = 81 → 8 + 1 = 9 → **Neon Number**

</details>

---

<details>
<summary><strong>Q11. Sum of Even Indexed Fibonacci Numbers</strong></summary>

### 📖 Description:

Calculate sum of Fibonacci numbers at even indices up to `F2N`.

### ✅ Example:

* N = 4 → 0 + 1 + 3 + 8 + 21 = `33`

### 💡 Hint:

Track index while generating Fibonacci terms.

</details>

---

<details>
<summary><strong>Q12. Largest Digit in a Number</strong></summary>

### 📖 Description:

Extract and compare digits to find the **largest digit**.

### ✅ Example:

* Input: `5482` → Output: `8`

</details>

---

<details>
<summary><strong>Q13. LCM of Two Numbers</strong></summary>

### 📖 Description:

Calculate Least Common Multiple using:

> `LCM(a, b) = (a × b) / GCD(a, b)`

### ✅ Example:

* Input: `12`, `15` → LCM = `60`

</details>

---

<details>
<summary><strong>Q14. Sum of Even Digits in a Number</strong></summary>

### 📖 Description:

Add only even digits from the given number.

### ✅ Example:

* Input: `238` → 2 + 8 = **10**

</details>

---

<details>
<summary><strong>Q15. Number of Days in a Month 📅</strong></summary>

### 📖 Description:

Calculate number of days in a given month and year (leap year aware).

### ✅ Example:

* Input: `Month = 2, Year = 2020` → Output: `29 days`

### 📌 Logic:

* 31 Days: Jan, Mar, May, Jul, Aug, Oct, Dec
* 30 Days: Apr, Jun, Sep, Nov
* Feb: 28 or 29 based on leap year:

```js
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
```

</details>

---