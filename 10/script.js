
function removeDuplicationLetters(str) {

 let uniqueLetters = str.toLowerCase().split('');
 console.log(uniqueLetters);

 let checkLetters = [];

 for(let i = 0; i < uniqueLetters.length; i++){
  if(checkLetters.indexOf(uniqueLetters[i])=== -1){
   checkLetters += uniqueLetters[i];
  }

 }

 return checkLetters;
}
console.log(removeDuplicationLetters('Hello I am Iron Man'));

