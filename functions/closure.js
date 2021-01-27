/**
 * Closure is the scope created when a function is declared
 * This scope allows the function to access and manipulate variables external to the function
 */

const value = 'Global'

function outSide() {
    const value = 'Local'

    function inSide() {
        return value
    }

    return inSide
}

const myFunction = outSide();
console.log(myFunction())