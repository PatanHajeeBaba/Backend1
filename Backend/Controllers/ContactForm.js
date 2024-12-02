const User = require('../Models/ContactForm')
const BookData = async(req,res) => {
    const {Fname,Lname,Email,Phone,Country,Msg} = req.body
    try{
        const Data= new User ({
        Fname,Lname,Email,Phone,Country,Msg
        })
        console.log(Data)
        await Data.save()
        return res.status (201).json ({msg:"data added Suscess"})
      }
    catch(err){
        console.log(err)
        return res.status (500).json ({msg:"Internal server error"})
    }
}
module.exports = BookData