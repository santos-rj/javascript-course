Number.prototype.interval = function (begin, end) {
    return this >= begin && this <= end
}

const showResult = function (value) {
    if (value.interval(9, 10)) {
        console.log('Quadro de Honra')
    } else if (value.interval(7, 8.99)) {
        console.log('Aprovado!')
    } else if (value.interval(4, 6.99)) {
        console.log('Recuperação!')
    } else if (value.interval(0, 3.99)) {
        console.log('Reprovado!')
    } else {
        console.log('Nota inválida!')
    }
}

showResult(10)
showResult(8.9)
showResult(6.55)
showResult(2.3)
showResult(-1)
showResult(11)