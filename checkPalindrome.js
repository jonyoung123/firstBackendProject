// Write a JavaScript function that checks whether a passed string is palindrome or not?
console.time('timer');
function checkPalindrome(s){
    return  (s === s.split("").reverse().join("")) ? true : false
}
console.log(checkPalindrome('mada'));
console.timeEnd('timer')
