/*
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}
*/
/*
for (x = 9; x >= 1; x--) {
  console.log("hello " + x);
}
*/
/*
for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);
}
*/
/*
for (var x = 5; x < 10; x++) {
  console.log(x);
}
*/
/*
for (var k = 0 ; k < 200 ; k++) {
    console.log(k);
}
*/
/*
let factorial = "";
let solution = 1;

for (let x =12 ; x > 0 ; x--){
    if (x>1){
    factorial += (x + "*");
    solution *= x
    } else 
    factorial += (x);
   
}
console.log(factorial + "=" + solution);
*/
/*
let solution = 1;

for (let i = 12; i >= 1; i--) {
  solution *= i;
}

console.log(solution);

*/

let row = 0;
let seat = 0;

for (i = row; i <= 25 ; i ++) {
    for (k = seat; k < 100; k ++){
        console.log(i + "-" + k)
    }
}
