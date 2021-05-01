// GLOBALS - No window !!!

// __dirname   - path to current directiory
// __filename  - file name
// require     - function to use modules (Common JS)
// module      - infor about current module (file)
// process     - infor about env where the program is being executed.

// setInterval(() => {
// 	console.log('Hello world Richard and Ryan!')
// }, 1000)
// const names = require('./name')
// const sayHi = require('./sayHi')
// const items = require('./items')
// const addValues = require('./addvalue')
//require('./os')
//require('./path')
//require('./fs')
// require('./http')

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)


























