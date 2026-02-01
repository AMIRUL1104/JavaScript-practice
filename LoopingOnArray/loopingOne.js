const colors = ["red", "blue", "green", "yellow", "orange"];

//  ======= sollution 1 =======
let i = colors.length;
let a = i;
for (const color of colors) {
  console.log(colors[a - 1]);
  a--;
}

//  ======= sollution 2 =======
for (let index = colors.length - 1; index >= 0; index--) {
  const element = colors[index];
  console.log(element);
}
