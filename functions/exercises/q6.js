function simpleInterest(initialCapital, interestRate, applicationTime) {
    let finalValue = initialCapital + (initialCapital * interestRate * applicationTime)

    return console.log(finalValue)
}

function compoundInterest(initialCapital, interestRate, applicationTime) {
    let finalValue = initialCapital * Math.pow((1 + interestRate), applicationTime)

    return console.log(finalValue)
}

simpleInterest(1000, 0.0015, 12)
compoundInterest(1000, 0.0015, 12)