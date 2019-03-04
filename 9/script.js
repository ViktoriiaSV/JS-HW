
function toUppercase(str) {
let bigLetters = '';
let shiftCode = 32;
for (let i = 0; i < str.length; i++){
    bigLetters += String.fromCharCode(str.charCodeAt(i)-shiftCode);
}
    return bigLetters;
}
alert(toUppercase('abc'));




