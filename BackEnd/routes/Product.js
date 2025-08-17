const { Category } = require("../models/CategorySchema.js")
const { Product } = require("../models/ProductSchema.js")
const express = require("express")
const router = express.Router();



const pLimit = require('p-limit').default;
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret
})




// Get the return from just category search
router.get(`/`, async (req, res) => {
    const ProductList = await Product.find().populate("category");

    if (!ProductList) {
        res.status(500).json({ success: false })
    }
    res.send(ProductList)
    // res.send("Product List Data", ProductList)
})

// Get by ID 

router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(500).json({ message: "The product with the given ID was not not found" })
    }

    return res.status(200).send(product)
})

// Post Data
router.post(`/create`, async (req, res) => {

    const category = await Category.findById(req.body.category);

    if (!category) {
        return res.status(404).send("Invalid Category!")
    }

    const limit = pLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    })

    const uploadStatus = await Promise.all(imagesToUpload)

    const imgurl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.send(500).json({
            error: "images cannot upload",
            status: false
        })
    }



    let product = new Product({

        name: req.body.name,
        description: req.body.description,
        images: imgurl,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
        dataCreated: req.body.dataCreated
    });

    product = await product.save();
    if (!product) {
        res.status(500).json({
            error: err,
            success: false
        })
    }

    // res.status(201).json(product)
    res.send("Product List Data")
})

// Delete Data

router.delete('/:id', async (req, res) => {

    const deleteProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deleteProduct) {
        return res.status(404).json({
            message: "Product not found!",
            status: false
        })
    }

    res.status(200).send({
        message: "The product is deleted!!",
        status: true
    })
})


// Update Data 
router.put("/:id", async (req, res) => {


    const limit = pLimit(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    })

    const uploadStatus = await Promise.all(imagesToUpload)

    const imgurl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.send(500).json({
            error: "images cannot upload",
            status: false
        })
    }


    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            images: imgurl,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
            dataCreated: req.body.dataCreated
        },
        { new: true }
    )
    if (!product) {
        return res.status(500).json({
            message: "The product cannot be updated",
            success: false
        })
    }
    res.send("Product Updated")
    res.send(product);
})



module.exports = router;