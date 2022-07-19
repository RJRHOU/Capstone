const express = require('express')
require("dotenv").config()
const  db  = require('./models')
// const userinfo = require('./models/posting')


const app = express()
app.use(express.json())


const userController = require('./routes/user')
const postController = require('./routes/post')
const reviewpostController = require('./routes/reviewpost')


app.use('/user',userController )
app.use('/post', postController)
app.use('/reviewpost', reviewpostController)






app.listen({ port: 6700 }, async () =>{
    console.log('Server up on http://localhost:6700')
    console.log('Database synced!')
})

