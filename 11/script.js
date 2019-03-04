function fibonacci(n) {

 let prevNumb = 1;
 let curNumb = 1;
 let sum = 1;
 for (let i = 2; i < n; i++) {
  sum = curNumb + prevNumb;
  prevNumb = curNumb;
  curNumb = sum;
 }
 return sum;
}
alert(fibonacci(3));
alert(fibonacci(5));
alert(fibonacci(7));








