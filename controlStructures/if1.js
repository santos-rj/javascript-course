function onlyGoodNews(value) {
    if (value >= 7) {
        console.log('Aprovado com ' + value)
    }
}

onlyGoodNews(8.1)
onlyGoodNews(6.1)

function onlyTruth(value) {
    if (value) {
        console.log('É verdade... ' + value)
    }
}

onlyTruth()
onlyTruth(null)
onlyTruth(undefined)
onlyTruth(NaN)
onlyTruth('')
onlyTruth(0)
onlyTruth(-1)
onlyTruth(' ')
onlyTruth('?')
onlyTruth([])
onlyTruth([1, 2, 3])
onlyTruth({})