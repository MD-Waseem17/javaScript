//  .includes

let arr = [1, 2, 3, 4, 5];
let check = arr.includes(3); // true 
console.log(check);

let arr1 = [3, 6, 9, 1, 2];
// to sort the array 
console.log(arr1.sort());    // [1, 2, 3, 6, 9]
console.log(arr1.reverse()); // [9, 6, 3, 2, 1]

let num2 = [1, 5, 20, 11, 80, 23, 1075];
// Default sort (lexicographical)
console.log(num2.sort()); // [1, 1075, 11, 20, 23, 5, 80]
// Numeric sort
console.log(num2.sort((a, b) => a - b)); // [1, 5, 11, 20, 23, 80, 1075]