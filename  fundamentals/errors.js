function treatError(error) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'message'
    throw {
        name: error.name,
        msg: error.message,
        date: new Date
    }
}

function showNameScreaming(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        treatError(error)
    } finally {
        console.log('final')
    }
}

const obj = {
    name: 'Rafael'
}
showNameScreaming(obj)