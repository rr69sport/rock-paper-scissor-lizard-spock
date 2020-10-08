const shortid = require('shortid');

let turns = 0

const c = async () => {
    setTimeout(() => {
        console.log(shortid.generate())
    }, 1000);
}

const f = async () => {
    console.log('aguarde...')
    await c()
    const interval = setInterval(async () => {
        await c()
        turns += 1
        if (turns >= 5) {
            clearInterval(interval)
        }
    }, 300)
}
export { f }