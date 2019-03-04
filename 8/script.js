function cursorCheck(str) {
let ironman = 'ironman';
let cursor = 'cursor';
let ostap = 'ostap';
let inputString = str.toLowerCase();
if (inputString.includes(ironman) || inputString.includes(cursor) || inputString.includes(ostap)) {
 return true;
}
return false;

}
alert(cursorCheck('Hello I am OstaP'));
alert(cursorCheck('Superman is here'));








