// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// // console.log(first, second)

// writeFileSync(
// 	'./content/result-sync.txt', 
// 	`Here is the result: ${first}, ${second}`,
// 	{flag: 'a'}
// )

// const results = readFileSync('./content/result-sync.txt', 'utf8')

// console.log(results)

//const {readFile, writeFile} = require('fs')
const fs = require('fs')

console.log('start')
fs.readFile('./content/first.txt', 'utf8',(err, data) => {
	if (err) {
		console.log(err)
		return
	}
	const first = data
	fs.readFile('./content/second.txt', 'utf8',(err, data) => {
		if (err) {
			console.log(err)
			return
		}
		const second = data
		fs.writeFile(
			'./content/result-async.txt', 
			`Here is the result: ${first}, ${second}`,
			(err, data) => {
				if (err) {
					console.log(err)
					return
				}
				console.log('Done with this task')
	    })
	})
})

console.log('starting next task')