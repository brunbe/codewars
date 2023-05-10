"use strict";

/*
Two Sums - codewars
Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers;
target will always be the sum of two different items from that array).
*/

// function twoSum(numbers, target) {
//   let answer;
//   numbers
//     .map((el) => target - el)
//     .forEach((el, i) => {
//       const e = numbers.findIndex((val) => val === el);
//       if (i !== e) answer = [i, e];
//     });
//   return answer;
// }

// function twoSum(numbers, target) {
//   let answer;
//   numbers.forEach((el, i) =>
//     numbers.includes(target - el) && i !== numbers.indexOf(target - el)
//       ? (answer = [i, numbers.indexOf(target - el)])
//       : 0
//   );
//   return answer;
// }
// console.log(twoSum([1, 2, 3], 4));

/*Day 6 - leetcode*/
// function sum(accum, curr) {
//   return accum + curr;
// }
// const nums = [1, 2, 3, 4];

// const reduce = function (nums, fn, init) {
//   nums.forEach((el) => (init = fn(init, el)));
//   return init;
// };

// console.log(reduce(nums, sum, 0));

/* Consecutive String - codewars
You are given an array(list) strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

example:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, 
if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note:
consecutive strings : follow one after another without an interruption
*/

// function longestConsec(strarr, k) {
//   const sum = new Array(strarr.length - k + 1);
//   for (let i = 0; i < strarr.length - k + 1; i++) {
//     sum[i] = strarr
//       .map((el, i) => el.length)
//       .slice(i, i + k)
//       .reduce((acc, cur) => acc + cur);
//   }
//   const index = sum.indexOf(sum.slice().sort((a, b) => b - a)[0]);
//   return strarr.slice(index, index + k).join("");
// }

// console.log(
//   longestConsec(
//     ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
//     2
//   )
// );

/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

Note: The order of the permutations doesn't matter.

Good luck!
*/
function fac(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * fac(num - 1);
  }
}

function calcUnique(string) {
  const obj = {};
  for (const el of [...string]) {
    obj[el] = (obj[el] || 0) + 1;
  }
  return [...Object.values(obj)];
}

function calcPerm(string) {
  const perm =
    fac(string.length) /
    calcUnique(string)
      .map((el) => fac(el))
      .reduce((acc, cur) => acc * cur, 1);
  return perm;
}

function permutator(string) {
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  return arr;
}
console.log(permutator("abcd"));
