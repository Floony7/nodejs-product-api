const product = require('./data/products')
const find = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    }) 
}