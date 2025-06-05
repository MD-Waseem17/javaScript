//5. Bitwise Operators
//Work at binary (bit) level. Numbers are converted to 32-bit binary first.


let a = 5;   // binary: 0101
let b = 3;   // binary: 0011

console.log(a & b);  // 1 → 0101 & 0011 = 0001
console.log(a | b);  // 7 → 0101 | 0011 = 0111
console.log(a ^ b);  // 6 → 0101 ^ 0011 = 0110
console.log(~a);     // -6 → NOT 0101 = 1010 (2's complement)
console.log(a << 1); // 10 → 0101 becomes 1010
console.log(a >> 1); // 2 → 0101 becomes 0010
//Operator	Name	Description
//&	Bitwise AND	1 only if both bits are 1
//`	`	Bitwise OR
//^	Bitwise XOR	1 if bits are different
//~	Bitwise NOT	Inverts each bit
//<<	Left Shift	Shifts bits to the left
//>>	Right Shift	Shifts bits to the right
//>>>	Zero-fill Right Shift	Fills left bits with 0 (unsigned)//