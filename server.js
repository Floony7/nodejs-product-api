const http = require('http')
const product = require('./data/products')

const server = http.createServer((req, res) => {
    // res.statusCode = 200, res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>Content</h1>')
    res.writeHead(200, {'Content-Type': 'application/json'}) 
    res.end(JSON.stringify(products))
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
