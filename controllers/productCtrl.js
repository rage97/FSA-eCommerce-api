const productRepository = require('../repositories/productRepo');

const createProduct = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        await productRepository.add(data);
        res.status(201);
        res.send();    
    }catch(e) {
        // handelErrors(e, res)
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {createProduct}