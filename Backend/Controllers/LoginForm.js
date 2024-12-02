const User = require('../Models/LoginForm')
const LoginData = async(req,res) => {
    const {fname, lname , gender , phone , dob ,email , address , street , city ,zip , highschool , university , experience1,experience2} = req.body
    try{
        const Data= new User ({
            fname, lname , gender , phone , dob ,email , address , street , city ,zip , highschool , university , experience1,experience2
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