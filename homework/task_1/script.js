// 1.Create a string, number, boolean, undefined, null, symbol, and bigint variable.


let string = "Niko"
let number = 24
let boolean = true
let undefined = undefined
let mnull = null
let symbol = Symbol('Hello')
let bigint = 12345789988765421457n

// 2.Print each variable type using typeof. 

console.log(string)
console.log(number)
console.log(boolean)
console.log(undefined)
console.log(null)
console.log(symbol)
console.log(bigint)

// 3.Use let, const, and var to declare variables and explain their differences with examples.

let city ='Baku'
city = 'Baku'
console.log(city)

// const country = 'Azerbaijan'
// country ='Canada'
// console.log(country);

var hobby = 'IT'
hobby1 ='Football'
console.log(hobby)

//let:allows reassignment.
//const: does not allow reassignmet.
//var: allows reassigment.

// 4.Use backticks to create a dynamic meessage that includes (firstName,lastName,age,country,hobby,occupation) variables.

let firstname = 'Nihat'
let surname = 'Azadli'
let age = '24'
let country = 'Azerbaijan'
let hobby = 'it'
let occupation ='CyberSecurity Specialist'

console.log(`Hello my name is ${firstname} ${surname}. I am ${age} years old, from ${country}. I enjoy ${hobby} and work as a ${occupation}.`) 

// 5.Use arithmetic operators (+, -, *, /, %)

let x = 10
let y = 8

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

// 6.Use comparison operators (==, ===, >, <, etc.)$

let r = 20
let u = 15
let o = "20"

// 6.Use comparison operators (==, ===, >, <, etc.)

console.log(r == o);
console.log(r === o);
console.log(o > u);
console.log(u < r);
console.log(o >= u);
console.log(u <= r);

// 7.Use logical operators (&&, ||, !).

let a = true
let b = false
let c = 20
let d = 30

console.log(a && b);
console.log(c > 5 && d > 20);
console.log(a || b);
console.log(c > 25 || d < 20);
console.log(!a);
console.log(!b);

console.log('test');