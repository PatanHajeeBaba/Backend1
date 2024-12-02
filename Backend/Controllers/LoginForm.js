const User = require('../Models/LoginForm')
const LoginData = async(req,res) => {
    const {Email,Password} = req.body
    try{
        const Data= new User ({
            Email,Password
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
module.exports = LoginData
