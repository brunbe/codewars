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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//////////////////////// Leetcode - 2666. Allow one function call //////////////////////////
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
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// */

// //////////////////////// codewars - Best travel ////////////////////////
// document.querySelector(".assignment").insertAdjacentHTML(
//   "afterbegin",
//   `<div class="markdown prose max-w-none mb-8" id="description"><p>John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns.
//   <code>ls = [50, 55, 57, 58, 60]</code>.
//   John is tired of driving and he says to Mary that he doesn't want to drive more than <code>t = 174 miles</code> and he
//   will visit only <code>3</code> towns.</p>
//   <p>Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?</p>
//   <h4 id="example">Example:</h4>
//   <p>With list <code>ls</code> and 3 towns to visit they can make a choice between:
//   <code>[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60]</code>.</p>
//   <p>The sums of distances are then:
//   <code>162, 163, 165, 165, 167, 168, 170, 172, 173, 175</code>.</p>
//   <p>The biggest possible sum taking a limit of <code>174</code> into account is then <code>173</code> and the distances of the <code>3</code>
//   corresponding towns is <code>[55, 58, 60]</code>.</p>
//   <p>The function <code>chooseBestSum</code> (or <code>choose_best_sum</code> or ... depending on the language) will take as parameters <code>t</code> (maximum sum of distances, integer &gt;= 0), <code>k</code> (number of towns to visit, k &gt;= 1)
//   and <code>ls</code> (list of distances, all distances are positive or zero integers and this list has at least one element).
//   The function returns the "best" sum ie the biggest possible sum of <code>k</code> distances less than or equal to the given limit <code>t</code>, if that sum exists,
//   or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return <code>-1</code>.</p>
//   <h4 id="examples">Examples:</h4>
//   <p><code>ts = [50, 55, 56, 57, 58]</code>
//   <code>choose_best_sum(163, 3, ts) -&gt; 163</code></p>
//   <p><code>xs = [50]</code>
//   <code>choose_best_sum(163, 3, xs) -&gt; nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)</code></p>
//   <p><code>ys = [91, 74, 73, 85, 73, 81, 87]</code>
//   <code>choose_best_sum(230, 3, ys) -&gt; 228</code></p>
//   <h4 id="notes">Notes:</h4>
//   <ul>
//   <li>try not to modify the input list of distances <code>ls</code></li>
//   <li>in some languages this "list" is in fact a <em>string</em> (see the Sample Tests).</li>
//   </ul>
//   </div>`
// );

// function chooseBestSum(t, k, ls) {

// }

//make all possible combinations of el of args for a-number of slots.
// let o = 0;
// let p = 0;
// function combinator(args, a, arr = [], res = []) {
//   const aa = a;
//   console.log(`p:${++p}`);
//   console.log(aa, args.length, arr.length);
//   //base case:
//   if (aa > args.length) {
//     res.push("yeeha");
//     return;
//   }
//   if (arr.length === aa) {
//     res.push(arr);
//     return;
//   }

//   //recursion:
//   for (let i = 0; i < args.length; i++) {
//     console.log(`o:${++o}`);
//     arr.push(args[i]);
//     const rest = args.filter((_, index) => index > i);
//     console.log(arr);
//     console.log(rest);
//     combinator(rest, aa);
//     arr.pop();
//     console.log("pop");
//   }
//   return res;
// }

// // console.log(combinator([1, 2, 3], 2));
// const arr = [];
// const res = [];

// function recursion(args) {
//   if (arr.length === 3) {
//     res.push([...arr]);
//     return;
//   }

//   for (let i = 0; i < args.length; i++) {
//     arr.push(args[i]);
//     const rest = args.filter((_, index) => index > i);
//     recursion(rest);
//     arr.pop();
//   }

//   return res;
// }

// const travelCalc = function (array) {
//   const combinations = recursion(array);
//   console.log(combinations);
//   let longestRoute = [0, 0];
//   const map = combinations.map((el) => el.reduce((acc, val) => acc + val, 0));
//   map.forEach((el, i) =>
//     el > longestRoute[0] && el < 174 ? (longestRoute = [el, i]) : null
//   );
//   return combinations[longestRoute[1]];
// };

// console.log(travelCalc([50, 55, 57, 58, 60]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////// leetcode 2623 Momoize ////////////////////////
document.querySelector(".assignment").insertAdjacentHTML(
  "afterbegin",
  `<div><p>Given a function <code>fn</code>, return a&nbsp;<strong>memoized</strong>&nbsp;version of that function.</p>

  <p>A&nbsp;<strong>memoized&nbsp;</strong>function is a function that will never be called twice with&nbsp;the same inputs. Instead it will return&nbsp;a cached value.</p>
  
  <p>You can assume there are&nbsp;<strong>3&nbsp;</strong>possible input functions:&nbsp;<code>sum</code><strong>, </strong><code>fib</code><strong>,&nbsp;</strong>and&nbsp;<code>factorial</code><strong>.</strong></p>
  
  <ul>
    <li><code>sum</code><strong>&nbsp;</strong>accepts two integers&nbsp;<code>a</code> and <code>b</code> and returns <code>a + b</code>.</li>
    <li><code>fib</code><strong>&nbsp;</strong>accepts a&nbsp;single integer&nbsp;<code>n</code> and&nbsp;returns&nbsp;<code>1</code> if <font face="monospace"><code>n &lt;= 1</code> </font>or<font face="monospace">&nbsp;<code>fib(n - 1) + fib(n - 2)</code>&nbsp;</font>otherwise.</li>
    <li><code>factorial</code>&nbsp;accepts a single integer&nbsp;<code>n</code> and returns <code>1</code>&nbsp;if&nbsp;<code>n &lt;= 1</code>&nbsp;or&nbsp;<code>factorial(n - 1) * n</code>&nbsp;otherwise.</li>
  </ul>
  
  <p>&nbsp;</p>
  <p><strong class="example">Example 1:</strong></p>
  
  <pre><strong>Input</strong>
  "sum"
  ["call","call","getCallCount","call","getCallCount"]
  [[2,2],[2,2],[],[1,2],[]]
  <strong>Output</strong>
  [4,4,1,3,2]
  
  <strong>Explanation</strong>
  const sum = (a, b) =&gt; a + b;
  const memoizedSum = memoize(sum);
  memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
  memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
  // Total call count: 1
  memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
  // Total call count: 2
  </pre>
  
  <p><strong class="example">Example 2:</strong></p>
  
  <pre><strong>Input
  </strong>"factorial"
  ["call","call","call","getCallCount","call","getCallCount"]
  [[2],[3],[2],[],[3],[]]
  <strong>Output</strong>
  [2,6,2,2,6,2]
  
  <strong>Explanation</strong>
  const factorial = (n) =&gt; (n &lt;= 1) ? 1 : (n * factorial(n - 1));
  const memoFactorial = memoize(factorial);
  memoFactorial(2); // Returns 2.
  memoFactorial(3); // Returns 6.
  memoFactorial(2); // Returns 2. However factorial was not called because 2 was seen before.
  // Total call count: 2
  memoFactorial(3); // Returns 6. However factorial was not called because 3 was seen before.
  // Total call count: 2
  </pre>
  
  <p><strong class="example">Example 3:</strong></p>
  
  <pre><strong>Input
  </strong>"fib"
  ["call","getCallCount"]
  [[5],[]]
  <strong>Output</strong>
  [8,1]
  
  <strong>Explanation
  </strong>fib(5) = 8
  // Total call count: 1
  
  </pre>
  
  <p>&nbsp;</p>
  <p><strong>Constraints:</strong></p>
  
  <ul>
    <li><code>0 &lt;= a, b &lt;= 10<sup>5</sup></code></li>
    <li><code>1 &lt;= n &lt;= 10</code></li>
    <li><code>at most 10<sup>5</sup>&nbsp;function calls</code></li>
    <li><code>at most 10<sup>5</sup>&nbsp;attempts to access callCount</code></li>
    <li><code>input function is sum, fib, or factorial</code></li>
  </ul>
  </div>`
);

const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n < 1 ? 1 : factorial(n - 1) * n);

// function memoize(fn) {
//   const arr = [];
//   return function (...args) {
//     if (
//       !arr.some((obj) =>
//         obj.input.every((val, index) => val === [...args][index])
//       )
//     ) {
//       arr.push({ input: [...args], solution: fn(...args) });
//     }
//     let index = arr.findIndex((el) =>
//       el.input.every((val, index) => val === [...args][index])
//     );
//     // console.log(arr[0].input);
//     // console.log([...args]);
//     // console.log(index);
//     // console.log(arr);
//     return arr[index].solution;
//   };
// }

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = fn(...args);
      console.log("yeeha");
    }
    return cache[key];
  };
}

const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

console.log(memoizedSum(2, 6));
console.log(memoizedSum(2, 5));
console.log(memoizedSum(5, 2));
console.log(memoizedSum(6, 2));
console.log(memoizedSum(2, 2));
console.log(memoizedSum(3, 3));
console.log(memoizedSum(2, 6));
console.log(memoizedSum(2, 2));

console.log(memoizedFib(3));
console.log(memoizedFib(4));
console.log(memoizedFib(5));
console.log(memoizedFib(6));
console.log(memoizedFib(7));
console.log(memoizedFib(8));
console.log(memoizedFib(3));
console.log(memoizedFib(5));

console.log(memoizedFactorial(2));
console.log(memoizedFactorial(3));
console.log(memoizedFactorial(4));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(7));
console.log(memoizedFactorial(3));
console.log(memoizedFactorial(5));
