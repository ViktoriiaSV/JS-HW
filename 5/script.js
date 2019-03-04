
function min(a, b, c) {
 let retVal = 0;
 if (a <= b && a <= c) {
  retVal = a;
 } else if (b <= a && b <= c) {
  retVal = b;
 } else if (c <= a && c <= b ) {
  retVal =  c;
 }

 return retVal;
}
console.log(min(10, 5, 11));
console.log(min(3, 8, 4));








//
// function min(a, b, c) {
//  if (a < b && a < c) {
//   return a;
//  } else if (b < a && b < c) {
//   return b;
//  } else if (c < a && c < b )
//   return c;
// }
// console.log(min(10, 5, 11));
// console.log(min(3, 8, 4));









