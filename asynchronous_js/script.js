// ==================tash one =======================
let readTasbih = true;

function startTasbih(callback) {
  if (readTasbih === true) {
    callback();
  } else {
    console.log("it is notstart");
  }
}

function tasbihOne(callback) {
  setTimeout(function () {
    console.log("লা ইলাহা ইল্লালাহ");

    callback();
  }, 2000);
}

function tasbihTwo(callback) {
  setTimeout(function () {
    console.log("alhamdulillah");

    callback();
  }, 3000);
}

function tasbihthree() {
  setTimeout(function () {
    console.log("subahanallah");
  }, 3000);
}
// startTasbih(function () {
//   tasbihOne(function () {
//     tasbihTwo(tasbihthree);
//   });
// });

//  ===============task two ======================
function taskStart(callback) {
  console.log("task 1 started ");
  callback();
}

function process(callback) {
  setTimeout(function () {
    console.log("processing... ");
    callback();
  }, 1000);
}
function complete(callback) {
  setTimeout(function () {
    console.log("Task 2 is complete ");
  }, 2000);
}

taskStart(function () {
  process(complete);
});
console.log("Hello from Node.js in VS Code!");

//  ===============TASK THREE ======================
