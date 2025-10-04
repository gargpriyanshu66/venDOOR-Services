const userModel = require("./userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
let secretkey = "123#@"
const login = (req,res)=>{
        var errMsgs = []
          if(!req.body.email)
            errMsgs.push("email is required!!")  
          if(!req.body.password)
            errMsgs.push("password is required!!")  
          if(errMsgs.length>0){
            res.json({
                status:422,
                success:false,
                message:errMsgs
            })
          }
          else{
            //login logic create
            userModel.findOne({email:req.body.email})
            .then((userdata)=>{
                    // console.log("userdata is ",userdata);
                    if(userdata == null){
                        res.send({
                            status:404,
                            success:false,
                            message:"email not found!!"
                        })
                    }
                    else{
                        //password compare
                        bcrypt.compare(req.body.password,userdata.password,function(err,ismatch){
                            if(!ismatch){
                                res.send({
                                    status:400,
                                    success:false,
                                    message:"password is wrong!!"
                                })
                            }
                            else{
                                //token jwt
                                let payload = {
                                    _id:userdata._id,
                                    email:userdata.email,
                                    name:userdata.password,
                                    userType:userdata.userType
                                }
                                let token = jwt.sign(payload,secretkey)
                                res.send({
                                    status:200,
                                    success:true,
                                    message:"Login successfully!!!",
                                    data:userdata,
                                    token:token
                                })
                            }
                        })

                    }
                    
            })
            .catch((err)=>{
                res.json({
                        status:500,
                        success:false,
                        message:"Internal server error!!",
                        errMsg:err
                    })    
                })
          }
    }

    const changePassword =(req,res)=>{
        var errMsgs = []
          if(!req.body.userId)
            errMsgs.push("userId is required!!")  
          if(!req.body.oldPassword)
            errMsgs.push("oldPassword is required!!")  
          if(!req.body.newPassword)
            errMsgs.push("newPassword is required!!")  
          if(!req.body.confirmPassword)
            errMsgs.push("confirmPassword is required!!")  
          if(errMsgs.length>0){
            res.json({
                status:422,
                success:false,
                message:errMsgs
            })
          }
          else{
            if(req.body.newPassword == req.body.confirmPassword){
                //compare
                userModel.findOne({_id:req.body.userId})
                .then((userdata)=>{
                        if(userdata == null){
                            res.send({
                            status:404,
                            success:false,
                            message:"user not found!!"
                        }) 
                        }
                        else{
                            //compare old password
                            bcrypt.compare(req.body.oldPassword,userdata.password,function(err,ismatch){
                                if(!ismatch){
                                    res.send({
                                        status:400,
                                        success:false,
                                        message:"old password is wrong!!"
                                    })
                                }
                                else{
                                    //update password
                                    userdata.password = bcrypt.hashSync(req.body.newPassword,10)
                                    userdata.save()
                                    .then((updatedata)=>{
                                     res.json({
                                            status:200,
                                            success:true,
                                            message:"Password Updated!",
                                         })   

                                    })
                                        .catch((err)=>{
                                            res.json({
                                            status:500,
                                            success:false,
                                            message:"Internel server error!!",
                                            errMsg:err
                                         })    
                })
                                }
                            })
                        }
                })
                  .catch((err)=>{
                          res.json({
                        status:500,
                        success:false,
                        message:"Internel server error!!",
                        errMsg:err
                    })    
                })


            }
            else{
                res.send({
                    status:404,
                    success:false,
                    message:"confirm password doesn't match with new password!!"
                })
            }
          }
}

module.exports = {login,changePassword}