const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require ('./Routers/LoginForm')
const User1 = require ('./Routers/BookForm')
const User2 = require ('./Routers/ContactForm')

const app = express()
app.use(cors());
app.use(express.json());
const PORT = 4608;
mongoose.connect("mongodb+srv://madhavabobbili:Mr7Tu4TPWWdjYfMc@cluster0.qfs7q.mongodb.net/")
.then(()=>{
    app.listen(PORT)
    console.log(`server running on port ${PORT}`)
})
.catch((err)=>{
    console.log(err)
})
app.use('/',User)
app.use("/ ",(req,res) => {
    return res.status(200).json({msg:"testing"})
})
app.use('/',User1)
app.use("/ ",(req,res) => {
    return res.status(200).json({msg:"testing"})
})
app.use('/',User2)
app.use("/ ",(req,res) => {
    return res.status(200).json({msg:"testing"})
})



// app.post('/Book' , async(req,res) =>{
//     const {Name,Email,Phone,Services} = req.body
//     try{
//         const Data= new User ({
//         Name,Email,Phone,Services
//         })
//         console.log(Data)
//         await Data.save()
//         return res.status (201).json ({msg:"data added Suscess"})
//       }
//     catch(err){
//         console.log(err)
//         return res.status (500).json ({msg:"Internal server error"})
//     }
// })
// app.get('/Book', async(req,res) => {
//     try{
//         const allData = await Data.find();
//         res.status(200).json(allData);

//     }
//     catch(err){
//         res.status(500).json({msg:'Error fetching Data',err})
//     }
// })
// app.listen(PORT, () => {
//     console.log(`Backend is Running on ${PORT}`)
// })
