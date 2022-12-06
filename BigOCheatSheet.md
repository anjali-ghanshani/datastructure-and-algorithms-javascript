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

<br>
<br>

# What Can Cause Time in a Function?

Operations (+,-,\*,/)
Comparisons (<,>,==)
Looping (for, while)
Outside Function Call (function())

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
