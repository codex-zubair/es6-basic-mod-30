const arr = ['apple','banana','mango'];

console.log(arr);
console.log(arr.length);

const arr2 = [1,23,4,5,6,77,8];

console.log(Math.max(arr2));
console.log(Math.max(...arr2));



// Advance array declaration...

const ar3 = [122,232,44,54];

const [a,b,c] = ar3;
console.log(a,b,c);

// Spread array declare...
console.log(ar3);
console.log("spread array declare\n");
console.log(...ar3);
