const orginal = [1, 2, 3];

let copy = [];

for (let index = orginal.length - 1; index >= 0; index--) {
  index == 0 ? copy.unshift(99) : copy.unshift(orginal[index]);
}

console.log(copy);
console.log(orginal);
