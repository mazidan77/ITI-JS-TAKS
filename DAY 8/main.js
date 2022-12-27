// //1

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(`a:${a} ,b:${b}`);

// //2

// let arr = (...array) => {
//   let min = Math.min(...array);
//   let max = Math.max(...array);
//   return `min=${min} max=${max}`;
// };
// console.log(arr(5, 3, 6, 3, 9));

// //3
// let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// //a
// let isString = fruits.every((b) => typeof b == "string");
// console.log(isString);
// //b
// let startwithA = fruits.some((a) => a.startsWith("a"));
// console.log(startwithA);
// //c
// let filter = fruits.filter((a) => a.startsWith("b") || a.startsWith("s"));
// console.log(filter);
// //d
// let newArr = fruits.map((a) => `I like ${a}`);
// console.log(newArr);
// //e
// newArr.forEach((a) => console.log(a));

