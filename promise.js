// without promise
/*
const add = function(a,b) {
    const c = a + b;
    return c;
}
const ans = add( 5, 6 );
console.log('With out promise: ', ans);
*/

// call back function example. 
/*
const add  = function(a, b, cb) {
    const c = a + b;
    setTimeout(() => {
        cb(c);
    }, 5000);
}

console.log('I am starting the program');
add( 5, 6, (ans) => {
    console.log('Answer from callback: ',ans);
});
console.log('I am doing some other work');
console.log('I am done');
*/

// promise