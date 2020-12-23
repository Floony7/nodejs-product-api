// Control what the route is doing
// Status, responses, headers, interact with model to send back

const Product = require('../models/productModel')

const getProducts = async (req, res) => {
    try {
        await Product.findAll()
        res.writeHead(200, {'Content-Type': 'application/json'}) 
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

module.exports(getProducts)