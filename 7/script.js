
function firstAndLastToUpper(str) {
let n = str.length;
console.log(n);
return str.charAt(0).toUpperCase() + str.slice(1, n-1) + str.charAt(n-1).toUpperCase();
}
alert(firstAndLastToUpper('abc'));



 




