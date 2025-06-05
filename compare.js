// Comparison Operator
let a = 10;
let b = "10";
let c = 20;

// Equal (loose)
console.log(a == b);   // true → value is same, type is ignored

// Equal (strict)
console.log(a === b);  // false → value is same, but type is different

// Not Equal (loose)
console.log(a != b);   // false → values are equal, so not equal is false

// Not Equal (strict)
console.log(a !== b);  // true → values are equal, but types are different

// Greater than
console.log(c > a);    // true → 20 > 10

// Less than
console.log(a < c);    // true → 10 < 20

// Greater than or equal to
console.log(a >= 10);  // true

// Less than or equal to
console.log(a <= 5);   // false