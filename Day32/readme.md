# 🦁 Sheryians Coding School Cohort – Day32 Learnings



## 🔁 `do-while` Loop Practice

<details>
<summary><strong>do-while Loop (Conceptual)</strong></summary>

### 🧾 Concept:

The `do-while` loop executes the code block **at least once** before checking the condition.

### 🔁 Syntax:

```js
do {
  // code block
} while (condition);
```

### 💡 Key Difference:

* `while` loop: checks condition **before** the loop body.
* `do-while`: executes once and checks **after**.

### 🧠 Learning:

* Great for menu-driven programs, retry flows, and loops that require **at least one execution**.
* Often used in calculators, games, and form re-prompting.

</details>

---

### 🧮 Practice Questions

---

<details>
<summary><strong>Q31: Repeat Hello</strong></summary>

### 🧾 Concept:

* Print `"Hello"` repeatedly until the user chooses to stop.

### 💡 Goal:

* Use a `do-while` loop.
* Ask the user: "Do you want to continue (y/n)?"

</details>

---

<details>
<summary><strong>Q32: Guess the Number 🎲</strong></summary>

### 🧾 Concept:

* User must guess a randomly generated number until correct.

### 💡 Goal:

* Use a `do-while` loop.
* On each iteration, check if guess matches the number.
* Display hints: `"Too low"` / `"Too high"` / `"Correct"`.

</details>

---

<details>
<summary><strong>Q33: Sasta Calculator 🧮</strong></summary>

### 🧾 Concept:

A **menu-driven calculator** using `do-while`.

### 💡 Goal:

* Show menu: `+`, `-`, `*`, `/`, `%`, Exit
* Accept two numbers and the operation
* Perform operation
* Repeat until the user chooses Exit

### 🧠 Learning:

* Combine `do-while` with `switch-case` for real interactivity

</details>

---

<details>
<summary><strong>Q34: Restaurant Project 🍽️</strong></summary>

### 🧾 Concept:

Create a **basic console restaurant menu app**.

### 💡 Goal:

* Show dishes with price (menu)
* Ask user to select item & quantity
* Calculate total bill
* Ask to continue or exit
* Show final total at the end

### 🧠 Learning:

* Combines `do-while`, `switch`, and variables
* Simulates real app flow logic

</details>

---

#### 🧑‍💻 Code : [Class-Code](Code/index.js)

---

## Created with ❤️ by Shivansh 
