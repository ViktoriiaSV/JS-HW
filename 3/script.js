
function printStairs(n) {
 let stair = '#';
 let stairs ='';
 for(let i = 0; i < n; i++){
     for(let j = 0; j <= i; j++){
         stairs +=  stair;
  }
    stairs += '\n';
}
return stairs;
}
alert(printStairs(3));






