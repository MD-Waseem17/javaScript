let fruits = ["Apple","Mango","Orange"]
// Index         0       1       2
console.log(fruits);
//.push
fruits.push("Banana")
fruits.pusg("watermelon")
console.log(fruits); 

fruits.unshift("Waseem")
console.log(fruit)

//unshift adds at first
// push adds at last 
 
fruits.shift() // removes element from first 
fruits.pop() // removes element from last 
console.log(fruit)


// .map() and .forEach()

let number =  [ "10","20","30","40"];
number.forEach((value) => {
      console.log(value)
});
// forEach is use to print all the elements
// in an array
// forEach does not return value

let num1 = [5, 12, 8]
// .find() ==> returns the first match based on condution.

let output = num1.find((value) => { 
    console.log(value > 5)
})