let count = 0;
console.log(count);

// let myAge = 20;
// console.log(myAge);

// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);
function increment() {
  count = count + 1;
  let inc = document.getElementById("count-el");
  inc.innerHTML = count;
}
