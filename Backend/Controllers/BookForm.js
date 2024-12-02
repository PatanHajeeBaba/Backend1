const User = require('../Models/BookForm')
const BookData = async(req,res) => {
    const {Name,Email,Phone,Services} = req.body
    try{
        const Data= new User ({
        Name,Email,Phone,Services
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