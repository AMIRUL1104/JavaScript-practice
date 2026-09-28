// 1. Even Numbers
// const numbers = [3, 8, 11, 14, 20, 25, 30];
// শুধু even numbers বের করো।

// const numbers = [3, 8, 11, 14, 20, 25, 30];
// let even = numbers.filter((i) => {
//   if (i % 2 === 0) {
//     return i;
//   }
// });
// console.log(even);

// =================================
// =================================
// 2. Double the Numbers
// const numbers = [2, 4, 6, 8];
// প্রতিটি সংখ্যাকে double করে নতুন array তৈরি করো।
// Expected:
// [4, 8, 12, 16]
// const numbers = [2, 4, 6, 8];
// let dubble = numbers.map((i) => {
//   return i * 2;
// });
// console.log(dubble);

// =================================
// =================================

// // 3. Find User
// const users = [
//   { id: 1, name: "Amirul" },
//   { id: 2, name: "Rahim" },
//   { id: 3, name: "Karim" },
// ];
// // id === 2 user-কে খুঁজে বের করো।

// let user = users.find((i) => i.id === 2);
// console.log(user);

// =================================
// =================================

// // 4. Active Users
const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
  { name: "D", active: false },
];

// // শুধু active users-এর array তৈরি করো।

// // Expected:

// // [
// //   { name: "A", active: true },
// //   { name: "C", active: true }
// // ]

// let activeUser = users.filter((user) => user.active);
// console.log(activeUser);

// ============================
// ============================
// // 6. Total Price
// const prices = [100, 250, 50, 300];
// // সব price যোগ করে total বের করো।
// // Expected:
// // 700
// let totalPrice = prices.reduce((p, c) => p + c);
// console.log(totalPrice);

// ============================
// ============================
// // 7. Products Above 500
// // শুধু price > 500 products বের করো।
// const products = [
//   { name: "Book", price: 300 },
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 400 },
//   { name: "Phone", price: 1200 },
// ];
// let damiProducts = products.filter((i) => i.price > 500);
// console.log(damiProducts);

// // 8. Extract Product Names
// // উপরের products থেকে শুধু product name-এর array তৈরি করো।
// // Expected:
// // ["Book", "Laptop", "Mouse", "Phone"]
// // let productsName = products.map((i) => i.name);
// // console.log(productsName);

// // ============================
// // ============================
// // 9. String Reverse
// // const text = "javascript";
// // String-টি reverse করো।
// // Expected:
// // "tpircsavaj"
// const reverse = (string) => {
//   let toArray = string.split("");
//   //   console.log(toArray);

//   let reverseArray = [];
//   for (let index = toArray.length - 1; index >= 0; index--) {
//     reverseArray.push(toArray[index]);
//   }

//   console.log(reverseArray.join(""));

//   return;
// };
// reverse("javascript");
// ===================================
// ===================================
// 10. Count Vowels
// একটি function লেখো:
// countVowels("javascript");
// যেটা string-এর মধ্যে কতগুলো vowel (a, e, i, o, u) আছে সেটা return করবে।
// Expected:
// 3

// const findvowel = (string) => {
//   let toArray = string.split("");
//   //   console.log(toArray);
//   let count = 0;
//   for (let index = 0; index < toArray.length; index++) {
//     if ("aeiou".includes(toArray[index])) {
//       count++;
//       //   console.log(toArray[index]);
//     }
//   }
//   console.log(count);
// };
// findvowel("javascript");

// ===================================
// ===================================
// 12. Find Maximum
const numbers = [10, 45, 23, 89, 12, 67];
// Array-এর সবচেয়ে বড় সংখ্যাটি বের করো।
// Expected: 89
// শর্ত: Math.max(...numbers) ব্যবহার করবে না। নিজে logic লিখবে।
