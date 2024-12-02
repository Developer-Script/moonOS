const config = require (`${__dirname}/config.json`)
const System = require (`${__dirname}${config.init.system}`)

const app = new System (__dirname)

const fsm = app.fsm ()
fsm.map (`${__dirname}`)

console.dir (app, {depth: 20})
