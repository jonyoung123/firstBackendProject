// Write a JavaScript function that returns a passed string with letters in alphabetical order.
console.time('time');
function sortString(s){
    return s.toLowerCase().split("").sort().join("");
}
console.log(sortString('Webmaster'));
console.timeEnd('time');