const array = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let newArray = [];

array.forEach((item, index) => {
  //   console.log(item, index);
  index === 1 ? newArray.push([99, 4]) : newArray.push(item);

  //   index === 1 ? console.log([99, 4]) : console.log(item);
});
console.log(newArray);
