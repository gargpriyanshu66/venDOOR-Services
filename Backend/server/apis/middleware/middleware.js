const jwt = require("jsonwebtoken")
let secretkey = "123#@"
module.exports = (req,res,next)=>{
        let token = req.headers["authorization"];
        if(!token){
            res.send({
                status:404,
                success:false,
                message:"Token not found!!"
            })
        }
        else{
                //verify token
            jwt.verify(token,secretkey,function(err,data){
                if(err != null){
                        res.json({
                            status:422,
                            success:false,
                            message:"unauthorized access!!"
                        })
    
                }
                else{
                    console.log("userdata is ",data);
                    req.decoded = data;
                    next();
                    

                }
            })
        }
}