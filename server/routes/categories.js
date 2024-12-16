const { Category} = require('../models/category');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const categoryList = await Category.find();

    if(!categoryList){
        res.status(500).json({success: false})
    }
    res.send(categoryList);
});

router.post('create', async (req, res) => {
    const limit = pLimit(2);

    const imagesToUpLoad = req.body.images.map((image) =>{
        return limit (async () =>{
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });

    const uploadStatus = await Promise.all(imagesToUpLoad);
    const imgurl = uploadStatus.map((item)=>{
        return item.secure_url
    })

    if(!uploadStatus){
        return res.status(500).json({
            error: "images cannot upload!",
            status: false
        })
    }

    let category = new Category({
        name: req.body.name,
        images: imgurl,
        color: req.body.color
    })

    if(!category){
        res.status(500).json({
            error: err,
            success: false
        })
    }

    category = await category.save();

    res.status(201).json(category);
})

module.exports = router;