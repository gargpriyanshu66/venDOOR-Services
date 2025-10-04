const userModel = require("../user/userModel")
const vendorModel = require("./vendorModel")
const bcrypt = require("bcrypt")

const register = (req,res)=>{
    var errMsgs = [];
    if(!req.body.name)
    {
        errMsgs.push("name is required!!")
    }
    if(!req.body.email){
        errMsgs.push("email is required!!")
    }
    if(!req.body.contact){
        errMsgs.push("contact is required!!")
    }
    if(!req.body.address){
        errMsgs.push("address is required!!")
    }
    if(!req.body.categoryId){
        errMsgs.push("categoryId is required!!")
    }
     if(!req.body.password){
        errMsgs.push("password is required!!")
    }
   
    if(errMsgs.length>0){
        res.json({
            status:422,
            success:false,
            message:errMsgs,
        
        })

    }
    else{
        //logic
        userModel.findOne({email:req.body.email})
        .then((userdata)=>{
                 console.log("userdata is ",userdata);
                if(userdata == null){
                        //register 
                        let userObj = new userModel()
                        userObj.name = req.body.name
                        userObj.email = req.body.email
                        userObj.password =bcrypt.hashSync(req.body.password,10) 
                        userObj.userType = 2
                        userObj.save()
                        .then(async(vdata)=>{
                                    //vendor model
                                    
                                    let totalVendors = await vendorModel.countDocuments()
                                    let vendorObj = new vendorModel()
                                    vendorObj.autoId = totalVendors + 1
                                    vendorObj.userId = vdata._id
                                    vendorObj.categoryId = req.body.categoryId
                                    vendorObj.name = req.body.name
                                    vendorObj.email = req.body.email
                                    vendorObj.address = req.body.address
                                    vendorObj.contact = req.body.contact
                                    vendorObj.save()
                                    .then((vendordata)=>{
                                        res.json({
                                                    status:200,
                                                    success:true,
                                                    message:"vendor Register successfully!!",
                                                    data:vendordata
        
                                                }) 

                                    })
                                    .catch((err)=>{
                                            res.json({
                                                    status:500,
                                                    success:false,
                                                    message:"Internal server error!!",
                                                    errMsg:err
        
                                                })    
                                                })


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
                else{
                    res.send({
                        status:422,
                        success:false,
                        message:"user already exists with same email!!!"
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
    }}
const getAll = (req,res)=>{
   vendorModel.find(req.body)
    .populate("categoryId")
    .populate("userId")
    .then((vendorData)=>{
        res.send({
            status:200,
            success:true,
            message:"data loaded!",
            total:vendorData.length,
            data:vendorData
        })

    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Internel server error",
            errMsg :err
        })
})
} 


const getSingle = (req,res)=>{
     var errMsgs = []
    if(!req.body._id){
        errMsgs.push("_id is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
   vendorModel.findOne({userId:req.body._id})
    
    .populate("categoryId")
    .populate("userId")
    .then((vendorData)=>{
        console.log("vendor data",vendorData);
        
        if(vendorData == null){

            res.send({
                status:404,
                success:false,
                message:"Data not found!!",
             
            })
        }
        else{
            res.json({
                status:200,
                success:true,
                message:"Single record loaded!!",
                data:vendorData
            })
        }

    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Internel server error",
            errMsg :err
        })
    })
 }
}

const getPagination = (req,res)=>{
    var errMsgs = []
    if(!req.body.pageno){
        errMsgs.push("Page no is required!")
    }
    if(!req.body.limit){
        errMsgs.push("limit is required!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        let limit = req.body.limit;
        let pageno = req.body.pageno;
        let skip = 0;
        if(pageno>1){
            skip = (pageno-1)*limit

        }
       vendorModel.find()
        .populate("categoryId")
        .populate("userId")
        .skip(skip)
        .limit(limit)
        .then((vendorData)=>{
                res.send({
                    status:200,
                    success:true,
                    message:"data loaded",
                    data:vendorData
                })
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internel server error",
                errMsg :err
            })
        })

    }
}

const deleteOne = (req,res)=>{
    var errMsgs = []
    if(!req.body._id){
        errMsgs.push("_id is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{

        //delete 
       vendorModel.deleteOne({_id:req.body._id})
        .then((vendordata)=>{
            res.send({
                status:200,
                success:true,
                message:"data deleted!!",
                data:vendordata
            })
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internel server error",
                errMsg :err
            })
        })
    }

}

const update = (req,res)=>{
    var errMsgs = []
    if(!req.body.userId){
        errMsgs.push("userId is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
       userModel.findOne({_id:req.body._id})
        .then((vendorData)=>{
                // console.log("enquiry data",vendorData);
                if(vendorData == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!",
                        
                    })
                }
                else{
                    //update code
                    // console.log(vendorData);
                    if(req.body.status){
                       vendorData.status = req.body.status
                    }
                    if(req.body.email){
                       vendorData.email = req.body.email
                    }
                    
                     if(req.body.name){
                       vendorData.name = req.body.name
                    }
                   vendorData.save()
                    .then((updateddata)=>{
                        res.send({
                            status:200,
                            success:true,
                            message:"Data Updated!!",
                            data:updateddata
                        })
                    })

                    .catch((err)=>{
                        res.send({
                            status:500,
                            success:false,
                            message:"Internel server error",
                            errMsg :err
                        })
                    })
                }
                
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internel server error",
                errMsg :err
            })
        })
    }
}
//soft delete
const changeStatus = (req,res)=>{
    var errMsgs = []
    if(!req.body._id){
        errMsgs.push("_id is required!!")
    }
    if(req.body.status==null||req.body.status==undefined){
        errMsgs.push("status is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
       vendorModel.findOne({_id:req.body._id})
        .then((vendorData)=>{
                // console.log("vendor data",vendorData);
                if(vendorData == null){
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    //update status
                   vendorData.status = req.body.status
                   vendorData.save()
                    .then((updateddata)=>{
                        res.send({
                            status:200,
                            success:true,
                            message:"Status changed!!",
                            data:updateddata
                        })
                    })
                    .catch((err)=>{
                        res.send({
                            status:500,
                            success:false,
                            message:"Internel server error",
                            errMsg :err
                        })
                    })

                }
                
        })
        .catch((err)=>{
            res.send({
                status:500,
                success:false,
                message:"Internel server error",
                errMsg :err
            })
        })
        
    }
}
module.exports = {register,getAll,getSingle,getPagination,deleteOne,update,changeStatus}