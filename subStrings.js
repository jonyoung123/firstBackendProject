// Write a JavaScript function that generates all combinations of a string
console.time('timer');
function subStrings(s){
    for (let i = 0; i < s.length; i++){
        for (let j = i+1; j <= s.length; j++){
            console.log(s.slice(i,j));
        }
    }
}
subStrings('jollofriceissweeterthanfriderice');
console.timeEnd('timer');