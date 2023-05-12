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

///////////// Codewars - So many permutations ////////////////////////////////////////////////////////
// document.querySelector(".assignment").insertAdjacentHTML(
//   "afterbegin",
//   `<p>In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present create as many "shufflings" as you can!</p>

// <ul><p>Examples:</p>

// <li>With input 'a':
// Your function should return: ['a']</li>

// <li>With input 'ab':
// Your function should return ['ab', 'ba']</li>

// <li>With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']</li>

// <li>With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']</li></ul>

// <p>Note: The order of the permutations doesn't matter.</p>

// <p>Good luck!</p>`
// );

// function fac(num) {
//   if (num < 0) return -1;
//   else if (num === 0) return 1;
//   else {
//     return num * fac(num - 1);
//   }
// }

// function calcUnique(string) {
//   const obj = {};
//   for (const el of [...string]) {
//     obj[el] = (obj[el] || 0) + 1;
//   }
//   return [...Object.values(obj)];
// }

// function calcPerm(string) {
//   const perm =
//     fac(string.length) /
//     calcUnique(string)
//       .map((el) => fac(el))
//       .reduce((acc, cur) => acc * cur, 1);
//   return perm;
// }
// let o = 0;
// function permute(nums) {
//   let result = [];
//   console.log(++o);
//   console.log(`nums: ${nums}`);
//   console.log(`numslength: ${nums.length}`);
//   console.log(`result: ${result}`);

//   if (nums.length === 0) return [];
//   if (nums.length === 1) return [nums];

//   for (let i = 0; i < nums.length; i++) {
//     console.log(`i: ${i}`);
//     const currentNum = nums[i];
//     console.log(`currentNum: ${currentNum}`);
//     const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
//     console.log(`remainingNums: ${remainingNums}`);
//     const remainingNumsPermuted = permute(remainingNums);
//     console.log(`remainingNumsPermuted: ${remainingNumsPermuted}`);
//     console.log(`currentNum: ${currentNum}`);
//     for (let j = 0; j < remainingNumsPermuted.length; j++) {
//       console.log(`j : ${j}`);
//       const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
//       result.push(permutedArray);
//       console.log(`permutedArray: ${permutedArray}`);
//       console.dir(`result: ${result}`);
//     }
//   }
//   return result;
// }

/*
let n = 0;
let o = 0;

function permute(nums, result = [], arr = []) {
  console.log(`start: ${++n}`);
  console.log(`nums: ${nums}`);
  console.log(`result: ${result}`);
  console.log(`arr: ${arr}`);
  //base case
  if (nums.length === 0) {
    console.log(`base: ${++o}`);
    result.push([...arr]);
  }

  for (let i = 0; i < nums.length; i++) {
    let p = 0;
    let q = 0;
    console.log(`for:${++p}`);
    let rest = nums.filter((n, index) => index !== i);
    console.log(`rest: ${rest}`);
    arr.push(nums[i]);
    //recursiveness
    permute(rest, result, arr);
    arr.pop();
    console.log(`after pop:${++q}`);
    console.log(arr);
  }
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  return result;
}

console.log(permute(["a", "b", "c"]));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
////////////////////////// Leetcode - 2629. Function Composition //////////////////////////
document.querySelector(".assignment").insertAdjacentHTML(
  "afterbegin",
  `<div><p>Given an array of functions&nbsp;<code>[f<span style="font-size: 10.8333px;">1</span>, f<sub>2</sub>, f<sub>3</sub>,&nbsp;..., f<sub>n</sub>]</code>, return&nbsp;a new function&nbsp;<code>fn</code>&nbsp;that is the <strong>function&nbsp;composition</strong> of the array of functions.</p>

<p>The&nbsp;<strong>function&nbsp;composition</strong>&nbsp;of&nbsp;<code>[f(x), g(x), h(x)]</code>&nbsp;is&nbsp;<code>fn(x) = f(g(h(x)))</code>.</p>

<p>The&nbsp;<strong>function&nbsp;composition</strong>&nbsp;of an empty list of functions is the&nbsp;<strong>identity function</strong>&nbsp;<code>f(x) = x</code>.</p>

<p>You may assume each&nbsp;function&nbsp;in the array accepts one integer as input&nbsp;and returns one integer as output.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> functions = [x =&gt; x + 1, x =&gt; x * x, x =&gt; 2 * x], x = 4
<strong>Output:</strong> 65
<strong>Explanation:</strong>
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> functions = [x =&gt; 10 * x, x =&gt; 10 * x, x =&gt; 10 * x], x = 1
<strong>Output:</strong> 1000
<strong>Explanation:</strong>
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> functions = [], x = 42
<strong>Output:</strong> 42
<strong>Explanation:</strong>
The composition of zero functions is the identity function</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code><font face="monospace">-1000 &lt;= x &lt;= 1000</font></code></li>
	<li><code><font face="monospace">0 &lt;= functions.length &lt;= 1000</font></code></li>
	<li><font face="monospace"><code>all functions accept and return a single integer</code></font></li>
</ul>
</div>`
);

const compose = function (functions) {
  let c = -1;
  return function calc(x) {
    c++;
    if (c === functions.length) {
      return x;
    } else {
      return functions[c](calc(x));
    }
  };
};

const fn = compose([]);
console.log(fn(42));
*/

////////////////////////// Leetcode - 2666. Allow one function call //////////////////////////
document.querySelector(".assignment").insertAdjacentHTML(
  "afterbegin",
  `<div><p>Given a function <code>fn</code>, return a new function that is identical to the original function except that it ensures&nbsp;<code>fn</code>&nbsp;is&nbsp;called at most once.</p>

<ul>
	<li>The first time the returned function is called, it should return the same result as&nbsp;<code>fn</code>.</li>
	<li>Every subsequent time it is called, it should return&nbsp;<code>undefined</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> fn = (a,b,c) =&gt; (a + b + c), calls = [[1,2,3],[2,3,6]]
<strong>Output:</strong> [{"calls":1,"value":6}]
<strong>Explanation:</strong>
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> fn = (a,b,c) =&gt; (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
<strong>Output:</strong> [{"calls":1,"value":140}]
<strong>Explanation:</strong>
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= calls.length &lt;= 10</code></li>
	<li><code>1 &lt;= calls[i].length &lt;= 100</code></li>
	<li><code>2 &lt;= JSON.stringify(calls).length &lt;= 1000</code></li>
</ul>
</div>`
);
function once(fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
}

const onceFn = once((a, b) => a + b);
console.log(onceFn(1, 2));
console.log(onceFn(3, 3));
