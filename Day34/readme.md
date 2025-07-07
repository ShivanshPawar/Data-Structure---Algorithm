# 🦁 Sheryians Coding School Cohort – Day34 Learnings


## 🎨 Pattern Programming (Q39–Q42)


<details>
<summary><strong>Q39: Mirror Right Angle Triangle</strong></summary>

### 🔹 Pattern:

```
        *
      * *
    * * *
  * * * *
* * * * *
```

### 💡 Logic:

* **Left padding with spaces**
* **Stars increase** on each line
* Uses nested loops: one for spaces, one for stars

</details>

---

<details>
<summary><strong>Q40: Mirror Right Triangle (Single Space Variant)</strong></summary>

### 🔹 Pattern:

```
    *
   * *
  * * *
 * * * *
* * * * *
```

### 💡 Logic:

* Same star logic as Q39
* **Tighter alignment** with single spaces
* Great for pyramid alignment practice

</details>

---

<details>
<summary><strong>Q41: X Pattern (Diagonal Cross)</strong></summary>

### 🔹 Pattern:

```
*       *
  *   * 
    *
  *   * 
*       *    
```

### 💡 Logic:

* Print `*` on:

  * Left diagonal: `i === j`
  * Right diagonal: `i + j === n + 1`
* **Symmetrical cross pattern**

</details>

---

<details>
<summary><strong>Q42: V Pattern</strong></summary>

### 🔹 Pattern:

```
*               *
  *           *
    *       *
      *   *
        *
```

### 💡 Logic:

* Similar to X pattern but **bottom-half only**
* Print `*` on:

  * Left V-leg: `i === j`
  * Right V-leg: `i + j === 2n`
* Forms a **mirrored V** using wide column space

</details>

---


## Created with ❤️ by Shivansh 