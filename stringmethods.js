// String Methods
// JavaScript string are primitive datatype
//that is to work with text


// there are 3 ways to use 

// 1.Single Quotation ===> ''
// 2.Double Quotation ===> ""
// 3.Template Literal ===> `` (Black Trick)

let a = 'waseem'
let b = "waseem"
let c = `waseem`
console.log(a, b, c)

console.log(a[0]) // w
console.log(b[1]) // a
console.log(c[2]) // s



console.log(a.length)  // 6


// In JavaScript its case sensitive
// a not equal to A
// C is not equal to c
console.log("c" === "C") 
console.log("c" === "c")

// In JS to add new lines in string
// use \n
console.log("Iam\n Hello\n Waseem") 


// // 1.charAt() 
// let collage = "Global"
// console.log(collage.charAt(0))  
// // charAt takes index as value and gives string element 
// // of that index

// // 2.indexOf
// let Fname = "Collage"
// console.log(Fname.indexOf("C") // 0
// console.log(Fname.indexOf("W")) // -1



// // 3.concat
// let n1 = "Global"
// let n2 = " Collage"
// let n3 = n1.concat(" ", n2) // Global Collage
// console.log(n3) 
// console.log(n1.concat(" ", n2)) // Global Collage

// // 4.includes
// let msg = "JavaScript is fun"
// console.log(msg.includes("fun")) // true
// console.log(msg.includes("Java")) // true


// // 5.lastIndexOf

// let m1 = "Collage"
// console.log(m1.IndexOf("C")) // 0
// console.log(m1.lastIndexOf("l")) // 2
// console.log(m1.lastIndexOf("W")) // -1  



// // 6.length

// let Lang = "JAVA"
// console.log(Lang.length) // 4

// 7.repeat

let m2 = "Hi";
console.log(m2.repeat(2))  // HiHi

// 8.replace

let m3 = "ball bat"
console.log(m3.replace("b", "c")) // call cat 

 // 9.replaceAll
 console.log(m3.replaceAll("b", "c")) // call cat

 // 10.startsWith()
 // 11.endsWith()

let m4 = "JavaScript is fun";
console.log(m4.startsWith("Java")) // true
console.log(m4.startsWith("Script")) // false

console.log(m4.endsWith("fun")) // true
console.log(m4.endsWith("Java")) // false  

// 13.toupperCase
let m6 = "hello world";
console.log(m6.toUpperCase()) // HELLO WORLD


// 14. trim
let m7 = "   Hello World   ";
console.log(m7.trim()) // "Hello World"

// 15. slice(index, length)

let m8 = "JAVA"
// index  0123
// length 1234

console.log(m8.slice(2, 4)) // JA

// 16. split()
let m9 = "Global Collage Hyderabad";
console.log(m9.split(" ")) // ["Global", "Collage", "Hyderabad"]

