const showResult = function (value) {
    if (value >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

showResult(10)
showResult(4)
showResult('Eita!'); // Because javascript is weakly typed it can generate this type of situation