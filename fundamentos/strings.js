const escola = "Midas Crank"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(5))
console.log(escola.indexOf('k'))

console.log(escola.substring(1))
console.log(escola.substring(1, 10))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(/\w/g, 'MK'))

console.log('Felipe, Luiz, Pedro'.split(','))