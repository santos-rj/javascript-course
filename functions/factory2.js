function createProduct(name, price, discount = 0.1) {

    let finalPrice = price - (price * discount)

    return {
        name: name,
        price: price,
        discount: discount,
        finalPrice: finalPrice
    }
}

console.log(createProduct('Sabão', 100))