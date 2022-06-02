let count = 0;
console.log(count);
let inc = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// let myAge = 20;
// console.log(myAge);

// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);
function increment() {
  count = count + 1;

  inc.innerHTML = count;
}

function save() {
  console.log(count);
  let countStr = count + "-";
  saveEl.textContent += countStr;
  inc.innerHTML = 0;
  count = 0;
}
