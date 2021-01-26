const manufacturers = ["Mercedes", "Audi", "BMW"]

function show(name, index) {
    console.log(`${index + 1}. ${name}`)
}

manufacturers.forEach(show)
manufacturers.forEach(manufacturer => console.log(manufacturer))