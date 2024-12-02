const System = class
{
  #default
  constructor (root)
  {
    this.#default =
    {
      root,
      app_root : __dirname,
    }
    this.#default.config = require (`${this.#default.app_root}/config.json`)
    this.#default.fsm = `${this.#default.app_root}${this.#default.config.fsm}`
  }
  fsm ()
  {
    const FSM = require (`${this.#default.fsm}`)
    return this.fsm = new FSM ()
  }
}
module.exports = System