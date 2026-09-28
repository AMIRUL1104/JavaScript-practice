/*
Problem Description:

Given an integer array `arr` and a transformation function `fn`,
return a new array where each element is transformed by applying `fn`.

The resulting array must satisfy:
returnedArray[i] = fn(arr[i], i)

Note:
- Do not use the built-in Array.prototype.map method.
- You must implement the transformation manually.

Example:

Input:
arr = [1, 2, 3]
fn = function plusOne(n) { return n + 1; }

Output:
[2, 3, 4]

Explanation:
Calling map(arr, plusOne) returns [2, 3, 4].
The function increases each element of the array by 1.
*/

const old = [1, 2, 3];
function plusone(n) {
  return n + 1;
}

var map = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }

  return result;
};
let output = map(old, plusone);
console.log(output);
