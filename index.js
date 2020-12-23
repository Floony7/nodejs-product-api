const http = require('http')
const url = require('url')

// Server should respond to all requests with a string
const server = http.createServer((req, res) => {

// Get URL and parse it
const myURL = new URL(req.url)
console.log(myURL)
// Get the path
/* const path = myURL.pathname
const trimmedPath = path.replace(/^\/+|\/+$/g, '') */

// Send the response
res.end('Hello World\n')

// Log the request
/* console.log(`Request received on path: ${trimmedPath}`) */
    
})

// Start the server and have it listen on port 3000
const PORT = process.env.PORT || 3000
server.listen(PORT, ()=> `App running on port ${PORT}`)