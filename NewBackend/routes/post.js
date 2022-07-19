const express = require("express");
const router = express.Router();
const {Sequelize, Posting} = require("../models");





module.exports = router;


router.post("/poster", async (req, res, next) => {

    const {productID, userID, reviewtitle, productreview } = req.body
   
    
    const reviewPost = await Posting.create({

        productID,
        userID,
        reviewtitle, 
        productreview,
        
        
        
        
    })
    console.log("post created",reviewPost)
    res.json({
        
        productID: reviewPost.productID,
        userID: reviewPost.userID,
        reviewtitle: reviewPost.reviewtitle,
        productreview: reviewPost.productreview,
        
        
        
    })
})