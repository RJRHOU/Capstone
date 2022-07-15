const express = require('express')
require("dotenv").config()
const  db  = require('./models')
const userinfo = require('./models/productpost')


const app = express()
app.use(express.json())


const userController = require('./routes/user')
const postController = require('./routes/post')

app.use('/user',userController )
app.use('/post', postController)





app.listen({ port: 6500 }, async () =>{
    console.log('Server up on http://localhost:6500')
    console.log('Database synced!')
})

