// Jvascript code to reverse a number
console.time('timer');
function reverseNum(num){
    newStr = '';
    numStr = num.toString();
    for (let i = numStr.length-1; i >= 0; i--){
        newStr = newStr + numStr[i];
    }
    console.log(parseInt(newStr));
}
reverseNum(3245);
console.timeEnd('timer');

console.time('time');
function reverseNumber(n){
    n = n.toString();
    n= n.split("").reverse().join("");
    console.log(parseInt(n));
}
reverseNumber(3245);
console.timeEnd('time');