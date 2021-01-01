function shoppings(work1, work2) {
    const buyIceCream = work1 || work2
    const buyTv50 = work1 && work2
    // const buyTv32 = !!(work1 ^ work2) // bitwise xor
    const buyTv32 = work1 != work2
    const stayHealthy = !buyIceCream

    return {
        buyIceCream,
        buyTv50,
        buyTv32,
        stayHealthy
    }
}

console.log(shoppings(true, true))
console.log(shoppings(true, false))
console.log(shoppings(false, true))
console.log(shoppings(false, false))