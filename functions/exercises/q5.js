function formateDecimal(a) {
    valueInReais = `R$ ${a.toFixed(2).toString().replace(".",",")}`
    console.log(valueInReais)
}

formateDecimal(0.1 + 0.2)