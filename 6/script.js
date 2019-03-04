function printPyramid(n) {
 let spaceNumber = n - 1;
 let hash = '#';
 let space = "  ";
 let hashNumb = 1;
 let hashNumbInc = 2;
 let spaceNumDec = 1;
 let output = '';

 for (let i = 0; i < n; i++) {

 for (let j = 0; j < spaceNumber; j++){
  output += space;
 }

  for (let k = 0; k < hashNumb; k++) {
   output += hash;
  }
  output += '\n';
  spaceNumber -= spaceNumDec;
  hashNumb += hashNumbInc;

 }
 alert(output);
}
printPyramid(4);









//   #
//  ###
// #####








