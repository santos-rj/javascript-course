// Assignment by reference

/**
 * When we assign an object to a constant, we store in it the memory address
 * where the object is located.
 */

const a = {
    name: 'Test'
}

/**
 * Therefore, when we pass the value from the constate 'a' to the constant 'b',
 * we are passing the memory address.
 */

const b = a

console.log(a)
console.log(b)

/**
 * Therefore, if we change the value of the 'name' attribute in any of the constants,
 * the other will also be updated. For, the address stored in the two is of the same object.
 */

b.name = 'Rafael'
console.log(a)

// Assignment by value

/**
 * Because we are working with primitive data types. This reference pass is made
 * using the variable's value, not its memory address.
 */

let c = 3
let d = c

d++

console.log(c)
console.log(d)

let value // uninitialized
console.log(value)

value = null // does not point to any memory address
console.log(value)

/**
 * It is not possible to access the toString method of a variable that does not point to any value
 */
//console.log(value.toString()) 

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.45
console.log(product.price)

product.price = undefined // avert doing this
console.log(!!product.price)
console.log(product)