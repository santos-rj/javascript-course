const showResult = function (value) {
    switch (Math.floor(value)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado!')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação!')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida!')
            break
    }
}

showResult(10)
showResult(8.9)
showResult(6.55)
showResult(2.3)
showResult(-1)
showResult(11)