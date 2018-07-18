const Products = require("../models/product")

function createProduct(req, res){
    Products.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>res.json(err));
}

function getAllProducts(req, res)
{
    Products.find({})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
}

function getProductById(req, res)
{
    Products.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
}

function updateProduct(req, res)
{
    Products.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
}

function deleteProduct(req, res)
{
    Products.findByIdAndRemove(req.params.id, req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
}

module.exports = {
    createProduct: createProduct,
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}