# Big Os

## O(1)

Constants - no loops

## O(logN)

Logarithmic - usually searching have log n if they are sorted (Binary Search)

## O(n)

Linear - for loops, while loops through n items

## O(nlog(n))

Log linear - usually sorting operations

## O(n^2)

Quadratic - every element in a collection needs to be compared to every other element. Two nested loops

## O(2^n)

Exponential - recursive algorithms that solves problem of size N

## O(n!)

Factorial - you are adding a loop for every element

<br>

## Iterating through half a collection is still O(n)

## Two sepearate collections: O(a\*b)

<hr>

| BigO      | Name         | Description                        |
| --------- | ------------ | ---------------------------------- |
| 1         | Constant     | statement, one line of code        |
| log(n)    | Logarithmic  | Divide and conquer (binary search) |
| n         | Linear       | Loop                               |
| n\*log(n) | Linearithmic | Effective sorting algorithms       |
| n^2       | Quadratic    | Double loop                        |
| n^3       | Cubic        | Triple loop                        |
| 2^n       | Exponential  | Complex full search                |

<br>

# What Can Cause Time in a Function?

- Operations (+,-,\*,/)
- Comparisons (<,>,==)
- Looping (for, while)
- Outside Function Call (function())

<br>

## SORTING ALGORITHMS

| Sorting Algorithms | Space complexity | Time complexity | Time complexity |
| ------------------ | ---------------- | --------------- | --------------- |
|                    | Worst case       | Best case       | Worst case      |
| Insertion Sort     | O(1)             | O(n)            | O(n^2)          |
| Selection Sort     | O(1)             | O(n^2)          | O(n^2)          |
| Bubble Sort        | O(1)             | O(n)            | O(n^2)          |
| Mergesort          | O(n)             | O(n log n)      | O(n log n)      |
| Quicksort          | O(log n)         | O(n log n)      | O(n^2)          |
| Heapsort           | O(1)             | O(n log n)      | O(n log n)      |

<br>
<hr>
<br>

## COMMON DATA STRUCTURE OPERATIONS

| Worst Case→        | Access | Search | Insertion | Deletion | Space Complexity |
| ------------------ | ------ | ------ | --------- | -------- | ---------------- |
| Array              | O(1)   | O(n)   | O(n)      | O(n)     | O(n)             |
| Stack              | O(n)   | O(n)   | O(1)      | O(1)     | O(n)             |
| Queue              | O(n)   | O(n)   | O(1)      | O(1)     | O(n)             |
| Singly-Linked List | O(n)   | O(n)   | O(1)      | O(1)     | O(n)             |
| Doubly-Linked List | O(n)   | O(n)   | O(1)      | O(1)     | O(n)             |
| Hash Table         | N/A    | O(n)   | O(n)      | O(n)     | O(n)             |

# Rule Book

Rule 1: Always worst case
Rule2 : Remove Constants
Rule 3:

- Different inputs should have different variables: O(a+b)
- A and B arrays nested would be: O(a\*b)

* for steps in order

- for nested steps

Rule4 : Drop Non-dominant Terms

# What Causes Space Complexity?

- Variables
- Datastructures
- Function Calls
- Allocations
