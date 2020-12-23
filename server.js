const http = require('http')
const { getProducts } = require('./controllers/productController')

const server = http.createServer((req, res) => {
    // res.statusCode = 200, res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>Content</h1>')
    if(req.url === '/api/products') {
        getProducts(req, res)
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: "Resource not found."}))
    }
    
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
