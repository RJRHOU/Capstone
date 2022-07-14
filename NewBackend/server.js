const express = require('express')
const { application } = require('express')
const { sequelize } = require('./models')
const userinfo = require('./models/userinfo')


const app = express()
app.use(express.json())


// const sequelize = new Sequelize('recall_db', 'victorbrew', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });

// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }


app.get('/may', (req, res) => {
    res.send("hello")
})

app.post('/userinfo', async(req, res) => {
    const { name, email, product, productreview } = req.body

    try{
        const user = await userinfo.create({name, email, product, productreview })
        return res.json(user)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.listen({ port: 6500 }, async () =>{
    console.log('Server up on http://localhost:6500')
    console.log('Database synced!')
})