const http = require('http')

// const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=c63fdc1a13b8dd52d31e42cda4fd9da2'
// http.get(endpoint, (res) => {
//   const { statusCode } = res;
//   const contentType = res.headers['content-type'];

//   let error;
//   // Any 2xx status code signals a successful response but
//   // here we're only checking for 200.
//   if (statusCode !== 200) {
//     error = new Error('Request Failed.\n' +
//                       `Status Code: ${statusCode}`);
//   } else if (!/^application\/json/.test(contentType)) {
//     error = new Error('Invalid content-type.\n' +
//                       `Expected application/json but received ${contentType}`);
//   }
//   if (error) {
//     console.error(error.message);
//     // Consume response data to free up memory
//     res.resume();
//     return;
//   }

//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
//     try {
//       const parsedData = JSON.parse(rawData);
//       //console.log(parsedData);
//     } catch (e) {
//       console.error(e.message);
//     }
//   });
// }).on('error', (e) => {
//   console.error(`Got error: ${e.message}`);
// });

const host = 'localhost'

const port = 5000

const server = http.createServer((req, res) => {
	res.end('welcome to my first node page!')
}).listen(port, host, ()=>{
	console.log(`Server is running on http://${host}:${port}`);
})

