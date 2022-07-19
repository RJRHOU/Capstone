const express = require("express");
const router = express.Router();
const {Sequelize, reviewpost} = require("../models");


module.exports = router;

router.post("/comment", async (req, res, next) => {


    const {productID, userID, reviewtitle, productreview } = req.body



const commenTing = await reviewpost.create({


    productID,
    userID,
    reviewtitle, 
    productreview,
    

})

console.log("post created",commenTing)
res.json({

    productID: commenTing.productID,
    userID: commenTing.userID,
    reviewtitle: commenTing.reviewtitle,
    productreview: commenTing.productreview,
    
})

        


})
module.exports = router