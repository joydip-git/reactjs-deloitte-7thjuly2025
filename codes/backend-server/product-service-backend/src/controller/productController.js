const productBo = require('../bo/productBo');
const { Status } = require('../models/status');

async function fetchProducts(req, res) {
    console.log('request came')
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)
    try {
        let data = await productBo.getProducts(page, limit);
        res.status(200).end(JSON.stringify(data));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

async function fetchProduct(req, res) {
    let pid = parseInt(req.params.id);
    console.log('request came for' + pid)
    try {
        let data = await productBo.getProductById(pid);
        res.status(200).end(JSON.stringify(data));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

async function insertProduct(req, res) {
    let p = req.body;
    let data = await productBo.addProduct(p);
    try {
        res.status(201).end(JSON.stringify(data));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

async function deleteProduct(req, res) {
    let pid = parseInt(req.params.id);
    try {
        let data = await productBo.removeProduct(pid);
        res.status(200).end(JSON.stringify(data));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

async function modifyProduct(req, res) {
    let p = req.body;
    let pid = Number(req.params.id);
    try {
        let data = await productBo.updateProduct(p, pid);
        res.status(200).end(JSON.stringify(data));
    } catch (e) {
        res.status(500).json(new Status(e.message));
    }
}

module.exports = {
    fetchProduct,
    fetchProducts,
    insertProduct,
    deleteProduct,
    modifyProduct
};