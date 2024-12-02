const FSM = class
{
  #path
  #fs
  #fsCount
  constructor ()
  {
    this.#path = require ('path')
    this.#fs = require ('fs')
    this.#fsCount = 0
  }
  map (root)
  {
    this.#fsCount ++
    this[this.#fsCount] = []

    this.#mapping (this[this.#fsCount], root)
  }
  #mapping (obj, path)
  {
    const temp =
    {
      name : this.#path.parse (path).name,
      root : this.#path.parse (path).root,
      base : this.#path.parse (path).base,
      dir : this.#path.parse (path).dir,
      path 
    }

    obj.push (temp)

    if (this.#fs.lstatSync (temp.path).isDirectory ())
    {
      temp.type = "dir"

      if (this.#fs.readdirSync (temp.path))
      {
        temp.content = []

        const contentNames = this.#fs.readdirSync (temp.path)
        const contentPaths = []
        for (let x in contentNames)
        {
          contentPaths[x] = (`${temp.path}/${contentNames[x]}`)
          
          this.#mapping (temp.content, contentPaths[x])
        }
      }
      else
      {
        temp.content = "Empty"
      }
    }
    else if (this.#fs.lstatSync (path).isFile ())
    {
      temp.type = "file"
    }
    else
    {

    }

    console.log (temp)
  }
  parsePath ()
  {
    
  }
}

module.exports = FSM