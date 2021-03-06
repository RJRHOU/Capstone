const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {Sequelize, User} = require("../models");
const saltRounds = bcrypt.genSaltSync(10)



router.get("/", async (req, res, next) => {

    const users = await User.findAll()
    console.log("users from get",users)
    res.json(users)
})

router.post("/register", async (req, res, next) => {
console.log(req.body)
    const {firstName, lastName, email, password} = req.body
    const hash = bcrypt.hashSync(password, saltRounds)
    
    const user = await User.create({

        firstName, 
        lastName,
        email,
        password:hash
        
    })
    
    console.log({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
        
    })
    res.send({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
        
    })
    
    
})

router.post("/login", async (req, res, next) => {

    const {email, password} = req.body
    console.log(email, password)
    
    const user = await User.findOne({

        where: {
            email
           
        }
        
        
    })
    
    if(user){
        const comparePass = bcrypt.compareSync(password, user.password)
        console.log(comparePass)
        if(comparePass === true){
            console.log("loggedIn User", user)
            res.json({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
                
            })
        } else {
            res.send("sorry, wrong password")
        }

    } else{
        res.send("sorry, no user found")
    }
   
})






module.exports = router