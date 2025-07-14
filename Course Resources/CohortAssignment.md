# 🗂 Data Structure & Algorithm (Problem Set)


<details>
<summary><strong>Q1. Movie Rating (if-else)</strong></summary>

### 📌 Question:

Ask the user for a rating (1–5) and print a response (like poor/good/excellent).

### 🔍 Logic:

Use `if-else` ladder:

* 1 or 2 → Poor
* 3 → Average
* 4 → Good
* 5 → Excellent

</details>

---

<details>
<summary><strong>Q2. Profile Based Program</strong></summary>

### 📌 Question:

Ask name, age, and gender. Generate a basic greeting like:

> "Hello Mr. John, you’re 25 years old."

### 🔍 Logic:

Use if-else based on gender to determine prefix (Mr./Ms.)

</details>

---

<details>
<summary><strong>Q3. Check if Alphabet is Vowel or Consonant</strong></summary>

### 🔍 Logic:

* Use `.toLowerCase()`
* Check if char is in `'aeiou'`

### 🧪 Input/Output:

```
Input: A  
Output: Vowel

Input: b  
Output: Consonant
```

</details>

---

<details>
<summary><strong>Q4. Check Valid ISBN (Loop)</strong></summary>

🔗 [GFG Explanation](https://www.geeksforgeeks.org/program-check-isbn/)

### 🔍 Logic:

* Multiply digits by position (1-based)
* Sum them up
* If sum % 11 === 0 → valid

</details>

---

<details>
<summary><strong>Q5. Check Harshad Number</strong></summary>

### 🔍 Logic:

A number is Harshad if it is divisible by the sum of its digits.

</details>

---

<details>
<summary><strong>Q6. Check Perfect Square</strong></summary>

### 🔍 Logic:

Check if `Math.sqrt(n) % 1 === 0`

</details>

---

<details>
<summary><strong>Q7. Check Abundant Number</strong></summary>

### 🔍 Logic:

Find all divisors of n (excluding n), sum them.
If `sum > n` → abundant number

</details>

---

<details>
<summary><strong>Q8. Count Numbers with Exactly X Divisors</strong></summary>

### 🔍 Logic:

For each number ≤ N, count number of divisors.
If exactly X → count it.

</details>

---

<details>
<summary><strong>Q9. Prime Factorization of a Number</strong></summary>

### 🔍 Logic:

Divide the number by every prime ≤ √n until it becomes 1.

</details>

---

<details>
<summary><strong>Q10. Area using Switch (Circle, Rectangle, Triangle)</strong></summary>

### 🔍 Logic:

Use `switch(choice)` with formulas:

* Circle: πr²
* Rectangle: l × b
* Triangle: ½ × b × h

</details>

---

<details>
<summary><strong>Q11. Neon Number</strong></summary>

### 🔍 Logic:

A number is Neon if the sum of digits of its square equals the number.

### 🧪 Input/Output:

```
Input: 9  
Square = 81 → 8 + 1 = 9  
Output: Neon Number
```

</details>

---

<details>
<summary><strong>Q12. Perfect Number</strong></summary>

### 🔍 Logic:

Sum of all proper divisors (excluding itself) = number

</details>

---

<details>
<summary><strong>Q13. Friendly Pair (Amicable)</strong></summary>

🔗 [PrepInsta](https://prepinsta.com/java-program/friendly-pair-or-notamicable-or-not-using-java/)

### 🔍 Logic:

Find `(sum of divisors)/number` for both and compare

</details>

---

<details>
<summary><strong>Q14. Permutations (n people in r seats)</strong></summary>

🔗 [PrepInsta](https://prepinsta.com/java-program/permutations-in-which-n-people-can-occupy-r-seats-in-a-classroom/)

### 🔍 Logic:

Use formula `n! / (n - r)!`

</details>

---

<details>
<summary><strong>Q15. Maximum Handshakes</strong></summary>

🔗 [PrepInsta](https://prepinsta.com/java-program/maximum-number-of-handshakes/)

### 🔍 Logic:

Total handshakes = `n * (n - 1) / 2`

</details>

---

<details>
<summary><strong>Q16. Days in a Given Month</strong></summary>

🔗 [PrepInsta](https://prepinsta.com/java-program/counting-number-of-days-in-a-given-month-of-a-year/)

### 🔍 Logic:

Use switch for month
Handle February separately (leap year check)

</details>

---

<details>
<summary><strong>Q17. Sum of Even Indexed Fibonacci Terms till F2n</strong></summary>

### 🔍 Logic:

Generate Fibonacci till 2n, sum terms at even index (0-based)

### 🧪 Input/Output:

```
Input: n = 4  
Fibo: 0 1 1 2 3 5 8 13 21  
Even Index Sum: 0 + 1 + 3 + 8 + 21 = 33  
Output: 33
```

</details>

---

<details>
<summary><strong>Q18. Sum of Absolute Differences of All Pairs</strong></summary>

### 🔍 Logic:

Use 2 loops or math formula for sorted array

### 🧪 Input/Output:

```
Input: [1, 2, 3, 4]  
Output: 10
```

</details>

---

<details>
<summary><strong>Q19. Min(a + b, c) from Linked Arrays</strong></summary>

### 🔍 Logic:

Sum elements from array A based on their pair in B

### 🧪 Input/Output:

```
A = [3,6,4,5,6], B = ['a','c','b','b','a']  
a_sum = 9, b_sum = 9, c_sum = 6  
Output: min(18, 6) = 6
```

</details>

---

<details>
<summary><strong>Q20. Update Array with Product of Previous and Next</strong></summary>

### 🔍 Logic:

* First element = a\[0] \* a\[1]
* Last = a\[n-1] \* a\[n-2]
* Middle: a\[i] = a\[i-1] \* a\[i+1]

### 🧪 Input/Output:

```
Input: [2, 3, 4, 5, 6]  
Output: [6, 8, 15, 24, 30]
```

</details>

---

<details>
<summary><strong>Q21. Exhaust Array in Max-Right Deletion Steps</strong></summary>

### 🔍 Logic:

* Repeatedly remove the max + all elements right of it
* Count steps until array is empty

### 🧪 Input/Output:

```
Input: [2, 3, 5, 4, 1]  
Output: 3
```

</details>

---

<details>
<summary><strong>Q22. Balance Left and Right Half of Array</strong></summary>

### 🔍 Logic:

Sum left and right half
Return min value needed to equalize

### 🧪 Input/Output:

```
Input: [1,2,1,2,1,3]  
Output: 2
```

</details>

---

<details>
<summary><strong>Q23. Divide Array Into Equal Pairs</strong></summary>

🔍 Logic:
Every number should occur **even number of times**

</details>

---

<details>
<summary><strong>Q24. Max Number of Pairs in Array</strong></summary>

🔍 Logic:
Use frequency count.
`pairs = Math.floor(freq / 2)`

</details>

---

<details>
<summary><strong>Q25. Keep Multiplying Found Values by 2</strong></summary>

🔍 Logic:

* If original value is in array → double it
* Repeat until it's not found

</details>

---

## ✅ If-Else Based Programs

1. Movie Rating Program
2. Profile Based Program ([Reference Graphic](https://drive.google.com/file/d/1TvfLLb0VDj6qNpWGJtwlKueZHj8GIMjy/view?usp=sharing))
3. Accept an English alphabet and check whether it's a consonant or a vowel

---

## 🔁 Loop-Based Problems

4. ISBN Number ([GFG Link](https://www.geeksforgeeks.org/program-check-isbn/))
5. Harshad Number
6. Perfect Square Check
7. Abundant Number
8. Count integers with exactly X divisors (Java)
9. Prime Factorization of a Number
10. Area of Circle, Rectangle, Triangle using `switch` statement
11. Neon Number Check
12. Perfect Number Check
13. Friendly Pairs ([PrepInsta](https://prepinsta.com/java-program/friendly-pair-or-notamicable-or-not-using-java/))
14. Permutations (n people in r seats) ([PrepInsta](https://prepinsta.com/java-program/permutations-in-which-n-people-can-occupy-r-seats-in-a-classroom/))
15. Maximum Handshakes ([PrepInsta](https://prepinsta.com/java-program/maximum-number-of-handshakes/))
16. Days in a Given Month ([PrepInsta](https://prepinsta.com/java-program/counting-number-of-days-in-a-given-month-of-a-year/))
17. Sum of Even-Indexed Fibonacci Terms up to F(2N)

---

## 🔢 Array-Based Problems

18. Sum of Absolute Differences of All Pairs
19. Minimize: `min(a_sum + b_sum, c_sum)` from Two Arrays A\[] and B\[]
20. Update Elements with Product of Previous and Next (Edge elements handled separately)
21. Exhaust Array by Deleting Max and Right Side – Count Steps
22. Minimum Value to Balance Array Halves
23. Sort First Half Ascending, Second Half Descending
24. Sum of Minimum Absolute Difference ([PrepInsta](https://prepinsta.com/java-program/to-find-sum-of-minimum-absolute-difference-of-the-given-array/))

---

## 🧠 Leetcode Logical Array Problems

25. 2206. Divide Array Into Equal Pairs
26. 2341. Maximum Number of Pairs in Array
27. 2154. Keep Multiplying Found Values by Two
28. 2057. Smallest Index With Equal Value
29. 2169. Count Operations to Obtain Zero
30. 2357. Make Array Zero by Subtracting Equal Amounts
31. 1979. Find Greatest Common Divisor of Array
32. 1732. Find the Highest Altitude
33. 2160. Minimum Sum After Splitting Four Digit Number
34. 2164. Sort Even and Odd Indices Independently
35. 2293. Min Max Game
36. 2078. Two Furthest Houses With Different Colors
37. Count Subarrays with Target Sum = T (e.g. {1,2,3,7,5}, T=12 → O/P: 2)
38. Leetcode 1929 – Concatenation of Array
39. Leetcode 1920 – Build Array from Permutation

---

## 🔤 String-Based Problems

40. Remove Vowels from String
41. Count Asterisks
42. 2278. Percentage of Letter in String
43. 2124. All A's Before All B's
44. 2299. Strong Password Checker II
45. Greatest English Letter in Upper and Lower Case
46. 2283. Check Equal Digit Count and Value
47. 2243. Calculate Digit Sum of a String
48. 2068. Check Whether Two Strings are Almost Equivalent
49. 2042. Check if Numbers Are Ascending in a Sentence
50. 2000. Reverse Prefix of Word

---

## #️⃣ Hashing-Based Problems

51. Replace Array Element by Its Rank ([PrepInsta](https://prepinsta.com/java-program/to-replace-each-element-by-its-rank-in-the-given-array/))
52. 2404. Most Frequent Even Element
53. 575. Distribute Candies
54. 389. Find the Difference
55. 2062. Count Vowel Substrings of a String
56. 2053. Kth Distinct String in an Array
57. 645. Set Mismatch
58. 804. Unique Morse Code Words
59. 819. Most Common Word
